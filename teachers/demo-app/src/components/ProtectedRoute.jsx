import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth";

// បើមិនទាន់ Login → <Navigate /> Redirect ភ្លាមពេល Render
// replace = មិនរក្សា Page នេះក្នុង History (Back មិនត្រឡប់មកវិញ)
const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn()) {
        return <Navigate to="/login" replace />
    }
    return children;
}

export default ProtectedRoute;
