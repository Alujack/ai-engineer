import { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "15px",
      }}
    >
      <h3>5. Character Counter</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="វាយអក្សរនៅទីនេះ..."
        style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
      />
      <p>
        ចំនួនតួអក្សរ (Live Count): <strong>{text.length}</strong> តួ
      </p>
    </div>
  );
}
