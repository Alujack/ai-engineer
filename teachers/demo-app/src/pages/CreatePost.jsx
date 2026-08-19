import { useState } from "react";
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";

const API_URL = import.meta.env.VITE_API_URL;

// Lesson 19 · POST — ប្រៀបធៀប fetch ⟷ axios
const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [client, setClient] = useState("fetch"); // fetch ឬ axios
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            if (client === "fetch") {
                // fetch — ត្រូវប្រាប់ method, headers និង body (JSON String)
                const res = await fetch(`${API_URL}/posts`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title, body, userId: 1 }),
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                setResult(await res.json());
            } else {
                // axios — ខ្លីជាង: មិនត្រូវ JSON.stringify, មិនត្រូវ .json()
                const { data } = await axios.post(`${API_URL}/posts`, { title, body, userId: 1 });
                setResult(data);
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete() {
        setLoading(true);
        setError(null);
        try {
            // DELETE — JSONPlaceholder ធ្វើត្រាប់តាមប៉ុណ្ណោះ (Data មិនបាត់ពិត)
            await axios.delete(`${API_URL}/posts/1`);
            setResult({ deleted: "posts/1 — DELETE ជោគជ័យ (200)" });
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "600px" }}>
            <h1>Create Post (POST)</h1>

            <div style={{ display: "flex", gap: "15px" }}>
                <label><input type="radio" checked={client === "fetch"} onChange={() => setClient("fetch")} /> fetch</label>
                <label><input type="radio" checked={client === "axios"} onChange={() => setClient("axios")} /> axios</label>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                    style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                    rows={4}
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit" disabled={loading || !title.trim()}>
                        {loading ? "កំពុងផ្ញើ..." : `POST ដោយ ${client}`}
                    </button>
                    <button type="button" onClick={handleDelete} disabled={loading}>DELETE /posts/1</button>
                </div>
            </form>

            {error && <ErrorMessage message={error} />}

            {result && (
                <div style={{ padding: "12px", backgroundColor: "#e6ffed", borderRadius: "5px" }}>
                    <strong>✅ Response (201 Created)</strong>
                    <pre style={{ margin: "8px 0 0", whiteSpace: "pre-wrap" }}>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}

export default CreatePost;
