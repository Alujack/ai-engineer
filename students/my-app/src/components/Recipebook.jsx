import React from "react";

export default function Recipebook() {
  const recipes = [
    { id: 1, title: "បាយឆាម្រះព្រៅ", time: 15 },
    { id: 2, title: "ស៊ុបការីមាន់", time: 45 },
    { id: 3, title: "ពងទាចៀន", time: 5 },
    { id: 4, title: "ខសាច់ជ្រូកពងទា", time: 60 },
  ];

  return (
    <div>
      <h2
        style={{
          color: "#2c3e50",
          borderBottom: "2px solid #2ecc71",
          paddingBottom: "5px",
        }}
      >
        សៀវភៅរូបមន្តម្ហូប (Recipe Book App)
      </h2>

      {/* ប្រើប្រាស់ CSS Grid Layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          marginTop: "15px",
        }}
      >
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "6px",
              position: "relative",
              backgroundColor: "#fafafa",
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>{recipe.title}</h3>
            <p style={{ margin: 0, color: "#777" }}>
              រយៈពេលចម្អិន៖ {recipe.time} នាទី
            </p>

            {/* បង្ហាញ Conditional "Quick Meal" Badge បើរយៈពេលតិចជាង ឬស្មើ ២០នាទី */}
            {recipe.time <= 20 && (
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "#2ecc71",
                  color: "white",
                  padding: "3px 8px",
                  fontSize: "11px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                Quick Meal
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
