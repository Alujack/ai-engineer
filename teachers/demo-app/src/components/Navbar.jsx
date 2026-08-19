import { NavLink } from "react-router-dom";

// NavLink ដឹងថា Link ណា Active — ប្រើ isActive ដើម្បី Highlight Menu
const linkStyle = ({ isActive }) => ({
    padding: "6px 12px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
    color: isActive ? "#20232a" : "#61dafb",
    backgroundColor: isActive ? "#61dafb" : "transparent",
});

const groupStyle = { display: "flex", gap: "6px", alignItems: "center" };
const labelStyle = { color: "#7a8290", fontSize: "12px", fontWeight: "bold" };

const Navbar = () => {
    return (
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "18px", padding: "12px 20px", backgroundColor: "#20232a", alignItems: "center" }}>
            <NavLink to="/" style={linkStyle} end>🏠 Home</NavLink>

            <div style={groupStyle}>
                <span style={labelStyle}>L16 State</span>
                <NavLink to="/counter" style={linkStyle}>Counter</NavLink>
                <NavLink to="/todos" style={linkStyle}>Todos</NavLink>
                <NavLink to="/register" style={linkStyle}>Register</NavLink>
            </div>

            <div style={groupStyle}>
                <span style={labelStyle}>L18 Router</span>
                <NavLink to="/products" style={linkStyle}>Products</NavLink>
                <NavLink to="/dashboard" style={linkStyle}>Dashboard 🔒</NavLink>
            </div>

            <div style={groupStyle}>
                <span style={labelStyle}>L19 API</span>
                <NavLink to="/users" style={linkStyle}>Users</NavLink>
                <NavLink to="/create-post" style={linkStyle}>Create Post</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
