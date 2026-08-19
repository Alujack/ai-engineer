// Component តូច — ទទួល Data តាម Props (Read-Only) ហើយហៅ Callback ឡើងទៅ Parent
const TodoItem = ({ todo, onToggle, onDelete }) => {
    return (
        <li style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
            <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
            <span style={{ flex: 1, textDecoration: todo.done ? "line-through" : "none", color: todo.done ? "#888" : "#20232a" }}>
                {todo.text}
            </span>
            {/* Passing Arguments — ត្រូវ Wrap ក្នុង Arrow Function */}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;
