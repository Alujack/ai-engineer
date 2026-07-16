import { useState } from "react";
import CounterApp from "./components/CounterApp";
import LoginForm from "./components/LoginForm";
import ConditionalUI from "./components/ConditionalUI";

export default function App() {
  const [activeTab, setActiveTab] = useState("counter");

  const tabStyle = (tab) => ({
    flex: 1,
    padding: "12px",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    fontWeight: "bold",
    backgroundColor: activeTab === tab ? "#2563eb" : "#f1f5f9",
    color: activeTab === tab ? "#fff" : "#333",
    transition: "0.3s",
  });

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>🚀 My React Exercises</h1>

      {/* Tabs */}
      <div
        style={{  
          display: "flex",
          gap: "10px",
          margin: "20px 0",
        }}
      >
        <button
          style={tabStyle("counter")}
          onClick={() => setActiveTab("counter")}
        >
          🔢 Counter
        </button>

        <button style={tabStyle("login")} onClick={() => setActiveTab("login")}>
          🔐 Login
        </button>

        <button
          style={tabStyle("conditional")}
          onClick={() => setActiveTab("conditional")}
        >
          🎨 Conditional UI
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,.1)",
        }}
      >
        {activeTab === "counter" && <CounterApp />}

        {activeTab === "login" && <LoginForm />}

        {activeTab === "conditional" && <ConditionalUI />}
      </div>
    </div>
  );
}
