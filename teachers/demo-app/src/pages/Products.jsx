import { Link } from "react-router-dom";
import { products } from "../data/products";

const Products = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>Products</h1>
            {/* Dynamic URL — /products/1, /products/2, ... តាម p.id */}
            {products.map((p) => (
                <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    style={{ padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "5px", textDecoration: "none", color: "#20232a" }}
                >
                    <strong>{p.name}</strong> — ${p.price}
                </Link>
            ))}
        </div>
    )
}

export default Products;
