import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

// Lesson 16 — State ជា Array + Event Handling + .map()
const Todos = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "រៀន useState", done: true },
        { id: 2, text: "រៀន Event Handling", done: false },
    ]);
    const [showDone, setShowDone] = useState(true);

    // ③ Array — បង្កើត Array ថ្មី ដោយ Spread (កុំ push!)
    function addTodo(text) {
        setTodos([...todos, { id: Date.now(), text, done: false }]);
    }

    // Update Item — .map() Return Object ថ្មីសម្រាប់ Item ដែលត្រូវគ្នា
    function toggleTodo(id) {
        setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    }

    // Remove Item — .filter()
    function deleteTodo(id) {
        setTodos(todos.filter((t) => t.id !== id));
    }

    const visible = showDone ? todos : todos.filter((t) => !t.done);
    const remaining = todos.filter((t) => !t.done).length;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "600px" }}>
            <h1>Todo App</h1>
            <TodoForm onAdd={addTodo} />

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {/* Previous-based Update — សុវត្ថិភាពជាង */}
                <button onClick={() => setShowDone((prev) => !prev)}>
                    {showDone ? "Hide Done" : "Show All"}
                </button>
                <button onClick={() => setTodos([])} disabled={todos.length === 0}>Clear All</button>
                <span style={{ color: "#666" }}>នៅសល់ {remaining} / {todos.length}</span>
            </div>

            <TodoList todos={visible} onToggle={toggleTodo} onDelete={deleteTodo} />

            {/* && សម្រាប់ Show/Hide */}
            {remaining === 0 && todos.length > 0 && (
                <p style={{ color: "green", fontWeight: "bold" }}>🎉 រួចរាល់ទាំងអស់!</p>
            )}
        </div>
    )
}

export default Todos;
