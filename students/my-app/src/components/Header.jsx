import React from "react";

export default function Header({ title }) {
  return (
    <header
      style={{
        backgroundColor: "#282c34",
        padding: "20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>{title || "React App របស់ខ្ញុំ"}</h1>
    </header>
  );
}
