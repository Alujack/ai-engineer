import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import StudentCard from "./components/StudentCard";
import Button from "./components/Button";
import RecipeBook from "./components/RecipeBook";

export default function App() {
  // ទិន្នន័យសិស្សសម្រាប់លំហាត់ទី ៤
  const students = [
    {
      id: 1,
      name: "សុខ ជា",
      age: 18,
      grade: 12,
      subjects: ["គណិតវិទ្យា", "រូបវិទ្យា"],
    },
    {
      id: 2,
      name: "ចាន់ ធី",
      age: 17,
      grade: 11,
      subjects: ["គីមីវិទ្យា", "ជីវវិទ្យា"],
    },
    {
      id: 3,
      name: "ម៉ៅ បូរី",
      age: 19,
      grade: 12,
      subjects: ["អក្សរសាស្ត្រខ្មែរ", "ប្រវត្តិវិទ្យា"],
    },
  ];

  // បទប្បញ្ញត្តិ Bonus: តម្រៀបសិស្សតាមថ្នាក់ (Sort by Grade) ពីធំទៅតូច
  const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "10px",
      }}
    >
      {/* ១. Header */}
      <Header title="លំហាត់ React ដំបូងរបស់ខ្ញុំ" />

      <main style={{ marginTop: "20px" }}>
        {/* ២. Card Component */}
        <Card>
          <h2>បញ្ជីឈ្មោះសិស្ស (Render List of Students)</h2>
          {/* ៤. ប្រើប្រាស់ .map() និង key prop */}
          {sortedStudents.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              age={student.age}
              grade={student.grade}
              subjects={student.subjects}
            />
          ))}
        </Card>

        {/* ៥. Reusable Button */}
        <Card>
          <h2>ប៊ូតុងដែលអាចប្រើឡើងវិញបាន (Reusable Buttons)</h2>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Button
              variant="primary"
              size="large"
              onClick={() => alert("អ្នកបានចុចប៊ូតុងខៀវ!")}
            >
              ប៊ូតុងចម្បង (Large)
            </Button>
            <Button
              variant="danger"
              size="small"
              onClick={() => alert("អ្នកបានចុចប៊ូតុងក្រហម!")}
            >
              លុបទិន្នន័យ (Small)
            </Button>
          </div>
        </Card>

        {/* ៦. Recipe Book App */}
        <Card>
          <RecipeBook />
        </Card>
      </main>

      {/* ៣. Footer */}
      <Footer />
    </div>
  );
}
