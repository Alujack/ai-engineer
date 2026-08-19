import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

// URL មកពី .env — កុំសរសេរដោយផ្ទាល់ក្នុង Code (ត្រូវមាន Prefix VITE_)
const API_URL = import.meta.env.VITE_API_URL;

// Lesson 19 — Pattern ស្តង់ដារ: 3 States (data · loading · error)
const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0); // ប្ដូរ → useEffect រត់ឡើងវិញ (Retry)

    useEffect(() => {
        // ⚠️ កុំដាក់ async លើ useEffect — សរសេរ async Function ខាងក្នុងរួចហៅវា
        async function loadUsers() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(`${API_URL}/users`);
                // fetch មិន throw លើ 404/500 — ត្រូវពិនិត្យ res.ok ដោយខ្លួនឯង
                if (!res.ok) throw new Error(`ទាញ Data មិនបាន (HTTP ${res.status})`);
                const data = await res.json();
                setUsers(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false); // finally រត់ជានិច្ច — បិទ Loading
            }
        }

        loadUsers();
    }, [reloadKey]);

    // Early Return Pattern — Loading → Error → Empty → Success
    if (loading) return <Spinner />;
    if (error) return <ErrorMessage message={error} onRetry={() => setReloadKey((k) => k + 1)} />;
    if (users.length === 0) return <p>គ្មាន User ទេ។</p>; // Empty ≠ Error

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <h1 style={{ margin: 0 }}>User Directory</h1>
                <button onClick={() => setReloadKey((k) => k + 1)}>Refresh</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
                {users.map((u) => (
                    <Link
                        key={u.id}
                        to={`/users/${u.id}`}
                        style={{ padding: "14px", backgroundColor: "#f0f0f0", borderRadius: "5px", textDecoration: "none", color: "#20232a" }}
                    >
                        <strong>{u.name}</strong>
                        <p style={{ margin: "6px 0 0", color: "#555" }}>{u.email}</p>
                        <p style={{ margin: "2px 0 0", color: "#888" }}>{u.company?.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Users;
