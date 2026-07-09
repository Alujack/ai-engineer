import { useState } from "react";

export default function ConditionalUI() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingToggle = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // ធ្វើពុតជា loading រយៈពេល ២ វិនាទី
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "15px",
      }}
    >
      <h3>4. Conditional UI</h3>

      {/* Show/Hide Password */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type={showPassword ? "text" : "password"}
          defaultValue="mySecretPassword123"
          style={{ padding: "8px", marginRight: "5px" }}
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
      </div>

      {/* Loading Spinner */}
      <div>
        <button onClick={handleLoadingToggle} disabled={isLoading}>
          {isLoading ? "កំពុងដំណើរការ..." : "ទាញយកទិន្នន័យ (Trigger Loading)"}
        </button>
        {isLoading && (
          <span style={{ marginLeft: "10px", color: "blue" }}>
            🔄 Loading...
          </span>
        )}
      </div>
    </div>
  );
}
