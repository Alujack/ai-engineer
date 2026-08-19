import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// Shared Layout — Navbar & Footer មានគ្រប់ Page, <Outlet /> ប្ដូរតាម URL
const Layout = () => {
    return (
        <div>
            <Navbar />
            <main style={{ padding: "20px", minHeight: "70vh" }}>
                <Outlet />
            </main>
            <footer style={{ padding: "10px 20px", backgroundColor: "#f0f0f0", textAlign: "center" }}>
                <p>© 2026 AI Engineer Class — Lessons 16 · 18 · 19</p>
            </footer>
        </div>
    )
}

export default Layout;
