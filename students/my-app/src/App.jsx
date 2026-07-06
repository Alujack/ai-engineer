import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Studentlist from "./components/Studentlist";
import ReusableButton from "./components/ReusableButton";
import Recipebook from "./components/Recipebook";
import { KhmerTokenizer, splitKcc, normalize, isKhmer } from "kh-tokenizer";

export default function App() {
  // console.log("KhmerTokenizer:", KhmerTokenizer);
  const tk = new KhmerTokenizer(); // embedded 59k-word dictionary, forward max-match
  const segments = tk.segment(`💻 5 Skills ដែល Programmer គួរតែមាន

1️⃣ Problem Solving
រៀនគិតជាដំណាក់កាល និងដោះស្រាយបញ្ហាដោយមានតក្កវិជ្ជា។

2️⃣ 💻 Programming Fundamentals
ចេះមូលដ្ឋាន HTML, CSS, JavaScript និងយល់ពី Logic ក្នុងការសរសេរ Code។

3️⃣ Communication & Teamwork
អាចធ្វើការជាមួយក្រុមការងារ និងទំនាក់ទំនងបានច្បាស់លាស់។

4️⃣ AI Tools & Productivity
ចេះប្រើ ChatGPT, Claude, Gemini និង AI Coding Assistant ដើម្បីសរសេរ Code និង Debug កាន់តែលឿន។

5️⃣ Continuous Learning
បច្ចេកវិទ្យាផ្លាស់ប្តូរជានិច្ច ដូច្នេះ Programmer ត្រូវបន្តរៀន និងអភិវឌ្ឍជំនាញថ្មីៗជានិច្ច។`);
  console.log("Segments:", segments);
  console.log("iskhmer", isKhmer("💻 5 Skills ដែល Programmer គួរតែមាន"));
  console.log("normalize", normalize("ប៊ូតុងចម្បង"));
  console.log("splitKcc", splitKcc("ប៊ូតុងចម្បង"));

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      {/* លំហាត់ទី ២: Header */}
      <Header title="លំហាត់ការអនុវត្ត React (Exercises)" />

      {/* លំហាត់ទី ៤: បញ្ជីឈ្មោះសិស្ស */}
      <Card>
        <Studentlist />
      </Card>

      {/* លំហាត់ទី ៥: Reusable Button */}
      <Card>
        <h2
          style={{
            color: "#2c3e50",
            borderBottom: "2px solid #e74c3c",
            paddingBottom: "5px",
          }}
        >
          ប៊ូតុងដែលអាចប្រើឡើងវិញបាន (Reusable Button)
        </h2>
        <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
          <ReusableButton
            variant="primary"
            size="large"
            onClick={() => alert("អ្នកបានចុចប៊ូតុងចម្បង!")}
          >
            ប៊ូតុងចម្បង (Large)
          </ReusableButton>

          <ReusableButton
            variant="danger"
            size="small"
            onClick={() => alert("អ្នកបានចុចប៊ូតុងលុប!")}
          >
            លុបទិន្នន័យ (Small)
          </ReusableButton>

          <ReusableButton
            variant="success"
            size="small"
            onClick={() => alert("រក្សាទុកជោគជ័យ!")}
          >
            រក្សាទុក
          </ReusableButton>
        </div>
      </Card>

      {/* លំហាត់ទី ៦: Recipe Book App */}
      <Card>
        <Recipebook />
      </Card>

      {/* លំហាត់ទី ២: Footer */}
      <Footer />
    </div>
  );
}
