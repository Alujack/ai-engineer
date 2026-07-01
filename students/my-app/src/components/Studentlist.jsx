import React from "react";
import StudentCard from "./StudentCard";

export default function Studentlist() {
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
    {
      id: 4,
      name: "លីណា វណ្ណ",
      age: 16,
      grade: 10,
      subjects: ["ភាសាអង់គ្លេស", "ព័ត៌មានវិទ្យា"],
    },
  ];

  // Bonus: តម្រៀបសិស្សតាមថ្នាក់ (Sort by Grade) ពីធំទៅតូច
  const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);

  return (
    <div>
      <h2
        style={{
          color: "#2c3e50",
          borderBottom: "2px solid #3498db",
          paddingBottom: "5px",
        }}
      >
        បញ្ជីឈ្មោះសិស្ស (Student List)
      </h2>
      {sortedStudents.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          grade={student.grade}
          subjects={student.subjects}
        />
      ))}
    </div>
  );
}
