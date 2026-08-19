import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../auth";

// Page នេះ Render បានតែពេល Login រួច (សូមមើល ProtectedRoute ក្នុង App.jsx)
const Dashboard = () => {
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login", { replace: true });
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1>Dashboard 🔒</h1>
            <p>សូមស្វាគមន៍, <strong>{getUser()}</strong>! Page នេះការពារដោយ ProtectedRoute។</p>
            <button onClick={handleLogout} style={{ width: "fit-content" }}>Logout</button>
        </div>
    )
}

export default Dashboard;
