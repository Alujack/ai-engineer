import { useState } from "react";
import "./App.css";

const PRODUCTS = [
  {
    id: 1,
    name: "Glow Serum (សេរ៉ូមបង្កើនពន្លឺស្បែក)",
    price: 28,
    category: "Serums",
    img: "✨",
  },
  {
    id: 2,
    name: "Hydrating Moisturizer (គ្រីមផ្តល់សំណើម)",
    price: 34,
    category: "Creams",
    img: "🧴",
  },
  {
    id: 3,
    name: "Cleansing Gel (ជែលលាងសម្អាតមុខ)",
    price: 22,
    category: "Cleansers",
    img: "🧼",
  },
  {
    id: 4,
    name: "Mineral Sunscreen SPF 50 (ឡេការពារកម្តៅថ្ងៃ)",
    price: 30,
    category: "Protection",
    img: "☀️",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ថែមចូលកន្ត្រក
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // ថយចុះចំនួន ឬលុបចេញពីកន្ត្រក
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + amount;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean),
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // តម្រងផលិតផល
  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="shop-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">AuraSkyn.</h1>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          🛒 កន្ត្រកទិញអីវ៉ាន់ ({cartCount})
        </button>
      </nav>

      {/* Hero Banner */}
      <header className="hero">
        <h2>ស្អាត បែបធម្មជាតិ និងមានទំនុកចិត្ត</h2>
        <p>
          ថែបំប៉នស្បែករបស់អ្នកជាមួយរូបមន្តរុក្ខជាតិធម្មជាតិ
          ដើម្បីទទួលបានស្បែកភ្លឺរលោង។
        </p>
      </header>

      {/* Categories Filter */}
      <div className="category-tabs">
        {["All", "Serums", "Creams", "Cleansers", "Protection"].map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === "All" ? "ទាំងអស់" : cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <main className="product-section">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.img}</div>
              <span className="product-tag">{product.category}</span>
              <h4>{product.name}</h4>
              <p className="price">${product.price}.00</p>
              <button className="add-btn" onClick={() => addToCart(product)}>
                ថែមចូលកន្ត្រក
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Sidebar Cart */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h3>កន្ត្រករបស់អ្នក</h3>
              <button
                className="close-btn"
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="empty-msg">មិនទាន់មានទំនិញនៅក្នុងកន្ត្រកនៅឡើយទេ។</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <span className="item-icon">{item.img}</span>
                      <div className="item-details">
                        <h5>{item.name}</h5>
                        <p>
                          ${item.price} x {item.quantity}
                        </p>
                        <div className="qty-controls">
                          <button onClick={() => updateQuantity(item.id, -1)}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}>
                            +
                          </button>
                        </div>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="total-row">
                    <span>សរុប៖</span>
                    <strong>${cartTotal}.00</strong>
                  </div>
                  <button
                    className="checkout-btn"
                    onClick={() =>
                      alert(
                        "សូមអរគុណសម្រាប់ការគាំទ្រ! កំពុងដំណើរការទៅកាន់ការទូទាត់...",
                      )
                    }
                  >
                    ទូទាត់ប្រាក់
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
