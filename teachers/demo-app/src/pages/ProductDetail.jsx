import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductDetail = () => {
    // useParams() អានតម្លៃ :id ពី URL — តម្លៃជា String ជានិច្ច!
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === Number(id));

    if (!product) {
        return (
            <div>
                <h1>រកមិនឃើញ Product 😢</h1>
                <Link to="/products">← ត្រឡប់ទៅ Products</Link>
            </div>
        )
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>{product.name}</h1>
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#0e7c99" }}>${product.price}</p>
            <p>{product.description}</p>
            {/* useNavigate() — Navigate ដោយ Code */}
            <button onClick={() => navigate(-1)} style={{ width: "fit-content" }}>
                ← Back
            </button>
        </div>
    )
}

export default ProductDetail;
