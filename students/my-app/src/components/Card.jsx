import React from "react";

export default function Card({ children }) {
  return (
    <divj
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "20px",
        margin: "15px 0",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
        backgroundColor: "#ffffff",
      }}
    >
      {children}
    </divj>
  );
}
