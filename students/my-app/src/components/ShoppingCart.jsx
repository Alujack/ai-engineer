import { useState } from "react";

export default function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, name: "អាវយឺត (T-Shirt)", price: 12, quantity: 1 },
    { id: 2, name: "ខោខូវប៊យ (Jeans)", price: 25, quantity: 1 },
  ]);

  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return { ...item, quantity: newQty < 1 ? 1 : newQty }; // មិនឱ្យតូចជាង ១ ឡើយ
        }
        return item;
      }),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // គណនាតម្លៃសរុបដោយប្រើប្រាស់ .reduce()
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "15px",
      }}
    >
      <h3>6. Bonus: Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>គ្មានទំនិញក្នុងកន្ត្រកទេ</p>
      ) : (
        <div>
          <table
            style={{ width: "100%", textAlign: "left", marginBottom: "15px" }}
          >
            <thead>
              <tr>
                <th>ទំនិញ</th>
                <th>តម្លៃ</th>
                <th>ចំនួន</th>
                <th>សកម្មភាព</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      style={{ marginRight: "5px" }}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      style={{ marginLeft: "5px" }}
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{ color: "red" }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4
            style={{
              textAlign: "right",
              borderTop: "1px solid #eee",
              paddingTop: "10px",
            }}
          >
            តម្លៃសរុប (Total):{" "}
            <span style={{ color: "green" }}>${totalPrice}</span>
          </h4>
        </div>
      )}
    </div>
  );
}
