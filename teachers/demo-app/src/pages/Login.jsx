import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth";

const Login = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate(); // Navigate ដោយ Code

    function handleSubmit(e) {
        e.preventDefault();
        if (!username.trim()) return;
        login(username.trim());
        // ក្រោយ Login ជោគជ័យ → Redirect ទៅ /dashboard
        navigate("/dashboard", { replace: true });
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
            <h1>Login</h1>
            <p style={{ color: "#666", margin: 0 }}>បញ្ចូលឈ្មោះណាមួយក៏បាន — នេះជា Demo។</p>
            <input
                style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit" style={{ width: "fit-content" }}>Login →</button>
        </form>
    )
}

export default Login;
