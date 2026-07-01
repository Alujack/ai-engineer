import React from "react";

export default function StudentCard({ name, age, grade, subjects }) {
  return (
    <div
      style={{
        padding: "12px",
        margin: "10px 0",
        backgroundColor: "#f1f2f6",
        borderRadius: "6px",
        borderLeft: "5px solid #3498db",
      }}
    >
      <h3 style={{ margin: "0 0 5px 0", color: "#2c3e50" }}>ឈ្មោះ៖ {name}</h3>
      <p style={{ margin: "3px 0" }}>
        <strong>អាយុ៖</strong> {age} ឆ្នាំ | <strong>ថ្នាក់ទី៖</strong> {grade}
      </p>
      <p style={{ margin: "3px 0", color: "#555" }}>
        <strong>មុខវិជ្ជា៖</strong> {subjects.join(", ")}
      </p>
    </div>
  );
}

// កំណត់ Default props ក្នុងករណីមិនមានទិន្នន័យបញ្ជូនមក
StudentCard.defaultProps = {
  name: "មិនស្គាល់ឈ្មោះ",
  age: "N/A",
  grade: "N/A",
  subjects: ["មិនទាន់ជ្រើសរើស"],
};
