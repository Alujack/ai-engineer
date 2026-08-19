import { useState } from "react";

// Controlled Input — value ភ្ជាប់ជាមួយ State + onChange
const TodoForm = ({ onAdd }) => {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // កុំឲ្យ Form Reload Page
        if (!text.trim()) return;
        onAdd(text.trim());
        setText(""); // Clear Input ក្រោយ Add
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
            <input
                style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
                type="text"
                placeholder="ត្រូវធ្វើអ្វី?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {/* Character Counter — Live តាម State */}
            <span style={{ alignSelf: "center", color: text.length > 40 ? "crimson" : "#666" }}>
                {text.length}/40
            </span>
            {/* Conditional: Disable ពេល Input ទទេ */}
            <button type="submit" disabled={!text.trim()}>Add</button>
        </form>
    )
}

export default TodoForm;
