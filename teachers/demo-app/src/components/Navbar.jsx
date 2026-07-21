import { NavLink } from "react-router-dom";

// NavLink ដឹងថា Link ណា Active — ប្រើ isActive ដើម្បី Highlight Menu
const linkStyle = ({ isActive }) => ({
    padding: "8px 14px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    color: isActive ? "#20232a" : "#61dafb",
    backgroundColor: isActive ? "#61dafb" : "transparent",
});

const Navbar = () => {
    return (
        <nav style={{ display: "flex", gap: "10px", padding: "10px 20px", backgroundColor: "#20232a" }}>
            <NavLink to="/" style={linkStyle} end>Home</NavLink>
            <NavLink to="/products" style={linkStyle}>Products</NavLink>
            <NavLink to="/counter" style={linkStyle}>Counter</NavLink>
            <NavLink to="/register" style={linkStyle}>Register</NavLink>
        </nav>
    )
}

export default Navbar;
