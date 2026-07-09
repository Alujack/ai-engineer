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
    <div style={{ padding: "20px" }}>
      <h1>My React Exercises</h1>
      <hr />

      {/* បើកដំណើរការលំហាត់ម្តងមួយៗដើម្បីតេស្ត */}
      <CounterApp />
      <CharacterCounter />
      <LoginForm />
      <ConditionalUI />
      <TodoApp />
      <ShoppingCart />
    </div>
  );
}
