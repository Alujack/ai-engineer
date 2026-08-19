// Error State — បង្ហាញ Message + Retry Button
const ErrorMessage = ({ message, onRetry }) => (
    <div style={{ padding: "12px", backgroundColor: "#ffe6e6", borderRadius: "5px", display: "flex", gap: "10px", alignItems: "center" }}>
        <span style={{ color: "crimson", flex: 1 }}>⚠️ {message}</span>
        {/* && — បង្ហាញ Retry តែពេលមាន onRetry */}
        {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
);

export default ErrorMessage;
