import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
    // Conditional Rendering — Ternary សម្រាប់ A/B Choice
    if (todos.length === 0) {
        return <p style={{ color: "#888" }}>គ្មាន Todo ទេ — សូមបញ្ចូលមួយ។</p>
    }

    return (
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {/* key Prop ចាំបាច់ — React ប្រើវាដើម្បីដឹងថា Item ណាប្ដូរ/លុប */}
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    )
}

export default TodoList;
