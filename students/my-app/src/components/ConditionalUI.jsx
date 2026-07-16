import { useState } from "react";

export default function ConditionalUI() {
  const [activeTab, setActiveTab] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,.15)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg,#4f46e5,#2563eb)",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h2 style={{ margin: 0 }}>Conditional UI</h2>
          <p style={{ margin: "8px 0 0" }}>React useState Example</p>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            background: "#f3f4f6",
            padding: "8px",
          }}
        >
          <button
            onClick={() => setActiveTab("password")}
            style={{
              flex: 1,
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              background: activeTab === "password" ? "#2563eb" : "transparent",
              color: activeTab === "password" ? "#fff" : "#555",
            }}
          >
            🔒 Password
          </button>

          <button
            onClick={() => setActiveTab("loading")}
            style={{
              flex: 1,
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
              background: activeTab === "loading" ? "#10b981" : "transparent",
              color: activeTab === "loading" ? "#fff" : "#555",
            }}
          >
            ⏳ Loading
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "25px" }}>
          {activeTab === "password" && (
            <>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                defaultValue="mySecretPassword123"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  marginBottom: "20px",
                  fontSize: "16px",
                  boxSizing: "border-box",
                }}
              />

              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#2563eb",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "🙈 Hide Password" : "👁 Show Password"}
              </button>
            </>
          )}

          {activeTab === "loading" && (
            <>
              <button
                onClick={handleLoading}
                disabled={isLoading}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#10b981",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {isLoading ? "Processing..." : "Trigger Loading"}
              </button>

              {isLoading && (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "25px",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      border: "6px solid #ddd",
                      borderTop: "6px solid #2563eb",
                      borderRadius: "50%",
                      margin: "0 auto",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>

                  <p
                    style={{
                      marginTop: "15px",
                      color: "#2563eb",
                      fontWeight: "bold",
                    }}
                  >
                    Loading...
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <style>
        {`
        @keyframes spin{
          0%{transform:rotate(0deg);}
          100%{transform:rotate(360deg);}
        }

        button:hover{
          opacity:.9;
        }
      `}
      </style>
    </div>
  );
}
