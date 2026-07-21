import { Link } from "react-router-dom";

// Render ពេលគ្មាន Route ណា Match — path="*"
const NotFound = () => {
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <h1>404</h1>
            <p>Page ដែលអ្នករកមិនមានទេ។</p>
            <Link to="/" style={{ fontWeight: "bold", color: "#0e7c99" }}>
                ← ត្រឡប់ទៅ Home
            </Link>
        </div>
    )
}

export default NotFound;
