const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");

// ---------- palette ----------
const DARK = "20232A";   // React dark
const DARK2 = "282C34";
const CYAN = "61DAFB";   // React accent
const CYAN_DK = "0E7C99";// readable cyan on light
const INK = "1A202C";
const MUTED = "5B6675";
const LIGHT = "FFFFFF";
const TINT = "EAF8FD";   // light cyan card
const TINT2 = "F4F6F8";  // neutral card
const GREEN = "1E7F4F";
const RED = "C0392B";
const GOLD = "E8A33D";
const CODEBG = "1E222A";
const CODEFG = "E6EDF3";

const KH = "Noto Sans Khmer";
const MONO = "Courier New";

const W = 10, H = 5.625;

let pres = new pptxgen();
pres.defineLayout({ name: "W", width: W, height: H });
pres.layout = "W";
pres.author = "AI Engineer Course";
pres.title = "Lesson 15: React មូលដ្ឋាន";

const shadow = () => ({ type: "outer", color: "000000", blur: 7, offset: 3, angle: 90, opacity: 0.12 });

// ---------- icon cache ----------
async function icon(Comp, color, size = 256) {
  const svg = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Comp, { color, size: String(size) })
  );
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + png.toString("base64");
}

// ---------- reusable helpers ----------
function contentBg(slide) {
  slide.background = { color: LIGHT };
}
function header(slide, kicker, title, atomData) {
  // small react atom in cyan circle top-left
  slide.addShape(pres.shapes.OVAL, { x: 0.5, y: 0.4, w: 0.62, h: 0.62, fill: { color: DARK } });
  slide.addImage({ data: atomData, x: 0.58, y: 0.48, w: 0.46, h: 0.46 });
  slide.addText(kicker.toUpperCase(), { x: 1.3, y: 0.4, w: 8.2, h: 0.28, fontFace: KH, fontSize: 11, bold: true, color: CYAN_DK, charSpacing: 2, margin: 0 });
  slide.addText(title, { x: 1.3, y: 0.64, w: 8.2, h: 0.62, fontFace: KH, fontSize: 26, bold: true, color: INK, margin: 0 });
}
function codeBox(slide, x, y, w, h, lines, fs = 11.5) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: CODEBG }, rectRadius: 0.06, shadow: shadow() });
  slide.addText(lines.map((l, i) => ({
    text: l.t,
    options: { color: l.c || CODEFG, breakLine: i < lines.length - 1, bold: !!l.b }
  })), { x: x + 0.18, y: y + 0.12, w: w - 0.36, h: h - 0.24, fontFace: MONO, fontSize: fs, align: "left", valign: "top", lineSpacingMultiple: 1.06, margin: 0 });
}

const slides = [];
function add(fn) { slides.push(fn); }

(async () => {
  const atomCyan = await icon(fa.FaReact, "#61DAFB");
  const atomDark = await icon(fa.FaReact, "#20232A");
  const atomWhite = await icon(fa.FaReact, "#FFFFFF");
  const icBolt = await icon(fa.FaBolt, "#FFFFFF");
  const icCubes = await icon(fa.FaCubes, "#FFFFFF");
  const icCode = await icon(fa.FaCode, "#FFFFFF");
  const icGlobe = await icon(fa.FaGlobe, "#FFFFFF");
  const icBriefcase = await icon(fa.FaBriefcase, "#FFFFFF");
  const icCheck = await icon(fa.FaCheckCircle, "#1E7F4F");
  const icTimes = await icon(fa.FaTimesCircle, "#C0392B");
  const icLayer = await icon(fa.FaLayerGroup, "#0E7C99");
  const icList = await icon(fa.FaListUl, "#0E7C99");
  const icShare = await icon(fa.FaShareAlt, "#0E7C99");
  const icKey = await icon(fa.FaKey, "#E8A33D");
  const icPlay = await icon(fa.FaPlayCircle, "#FFFFFF");
  const icBook = await icon(fa.FaBookOpen, "#FFFFFF");

  // ============ 1. TITLE ============
  add(() => {
    const s = pres.addSlide();
    s.background = { color: DARK };
    // faint big atom motif right
    s.addImage({ data: atomCyan, x: 6.55, y: 1.0, w: 3.6, h: 3.6, transparency: 82 });
    s.addText("PART 2 · FRONTEND DEVELOPMENT", { x: 0.7, y: 1.15, w: 7, h: 0.3, fontFace: KH, fontSize: 13, bold: true, color: CYAN, charSpacing: 3, margin: 0 });
    s.addText("Lesson 15", { x: 0.7, y: 1.5, w: 7, h: 0.6, fontFace: KH, fontSize: 30, bold: true, color: LIGHT, margin: 0 });
    s.addText("React មូលដ្ឋាន", { x: 0.7, y: 2.05, w: 8.3, h: 1.0, fontFace: KH, fontSize: 52, bold: true, color: CYAN, margin: 0 });
    s.addText("Components · JSX · Props · Lists — ស្ថាបនា UI តាមរបៀប Declarative", { x: 0.72, y: 3.15, w: 8, h: 0.5, fontFace: KH, fontSize: 15, color: "C9D6DF", margin: 0 });
    // meta chips
    const chips = ["3–4 ម៉ោង", "Prereq: Lesson 11–14", "Vite + JSX"];
    chips.forEach((c, i) => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.72 + i * 2.85, y: 4.25, w: 2.7, h: 0.5, fill: { color: DARK2 }, line: { color: CYAN, width: 0.75 }, rectRadius: 0.25 });
      s.addText(c, { x: 0.77 + i * 2.85, y: 4.25, w: 2.6, h: 0.5, fontFace: KH, fontSize: 11, color: LIGHT, align: "center", valign: "middle", margin: 0 });
    });
  });

  // ============ 2. OBJECTIVES ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "គោលបំណង", "Learning Objectives", atomCyan);
    const obj = [
      "ពន្យល់បានថា React ជាអ្វី និងហេតុអ្វីពេញនិយម",
      "យល់ Component-Based Architecture និង Virtual DOM",
      "Setup React Project ដោយ Vite ហើយរត់ Dev Server",
      "សរសេរ JSX បានត្រឹមត្រូវ (Rules, Expressions, className)",
      "បង្កើត Functional Components ជា Component Tree",
      "បញ្ជូន Data តាម Props (children, Destructuring)",
      "Render List ដោយ .map() និងយល់ key Prop",
    ];
    const colX = [0.55, 5.15], colW = 4.3;
    obj.forEach((t, i) => {
      const col = i < 4 ? 0 : 1;
      const row = i < 4 ? i : i - 4;
      const x = colX[col], y = 1.45 + row * 0.92;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: colW, h: 0.78, fill: { color: i % 2 ? TINT2 : TINT }, rectRadius: 0.06 });
      s.addShape(pres.shapes.OVAL, { x: x + 0.16, y: y + 0.2, w: 0.38, h: 0.38, fill: { color: DARK } });
      s.addText(String(i + 1), { x: x + 0.16, y: y + 0.2, w: 0.38, h: 0.38, fontFace: KH, fontSize: 14, bold: true, color: CYAN, align: "center", valign: "middle", margin: 0 });
      s.addText(t, { x: x + 0.68, y: y, w: colW - 0.8, h: 0.78, fontFace: KH, fontSize: 12.5, color: INK, valign: "middle", margin: 0 });
    });
  });

  // ============ 3. WHAT IS REACT ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, " មាតិកា · ១", "React ជាអ្វី?", atomCyan);
    s.addText([
      { text: "React ", options: { bold: true, color: CYAN_DK } },
      { text: "គឺជា ", options: {} },
      { text: "JavaScript Library", options: { bold: true } },
      { text: " ដែលបង្កើតដោយ ", options: {} },
      { text: "Meta (Facebook)", options: { bold: true } },
      { text: " សម្រាប់ស្ថាបនា User Interface — ជាពិសេស Single Page Applications (SPA)។", options: {} },
    ], { x: 0.55, y: 1.45, w: 9, h: 0.9, fontFace: KH, fontSize: 15, color: INK, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });

    s.addText("ជំនួសការសរសេរ DOM Manipulation ដោយផ្ទាល់ — React ឲ្យយើង “រៀបរាប់” UI ថាគួរមើលទៅយ៉ាងណា ហើយវាគ្រប់គ្រង DOM Update ឲ្យដោយខ្លួនឯង។",
      { x: 0.55, y: 2.35, w: 9, h: 0.7, fontFace: KH, fontSize: 13, color: MUTED, margin: 0, lineSpacingMultiple: 1.12 });

    // two analogy cards
    const cards = [
      { t: "📋  Library មិនមែន Framework", d: "ផ្ដោតលើ View Layer — ផ្សំជាមួយ tools ដទៃបាន" },
      { t: "🧩  Component-Based", d: "បំបែក UI ជាបំណែកតូចៗ ប្រើឡើងវិញបាន" },
      { t: "⚡  Virtual DOM", d: "Update តែផ្នែកដែលផ្លាស់ប្ដូរ → លឿន" },
    ];
    cards.forEach((c, i) => {
      const x = 0.55 + i * 3.04;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 3.35, w: 2.85, h: 1.55, fill: { color: TINT }, rectRadius: 0.08, shadow: shadow() });
      s.addText(c.t, { x: x + 0.18, y: 3.55, w: 2.5, h: 0.55, fontFace: KH, fontSize: 13.5, bold: true, color: INK, valign: "top", margin: 0 });
      s.addText(c.d, { x: x + 0.18, y: 4.1, w: 2.5, h: 0.7, fontFace: KH, fontSize: 11.5, color: MUTED, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    });
  });

  // ============ 4. IMPERATIVE VS DECLARATIVE ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ១", "Imperative ⟷ Declarative", atomCyan);
    // left: imperative
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 1.5, w: 4.3, h: 3.55, fill: { color: TINT2 }, rectRadius: 0.08, shadow: shadow() });
    s.addText("DOM ដោយផ្ទាល់  ·  Imperative", { x: 0.75, y: 1.68, w: 3.95, h: 0.4, fontFace: KH, fontSize: 14, bold: true, color: RED, margin: 0 });
    s.addText([
      { text: "1. Select element", options: { breakLine: true } },
      { text: "2. Change textContent", options: { breakLine: true } },
      { text: "3. Toggle class", options: { breakLine: true } },
      { text: "4. Update attribute", options: { breakLine: true } },
      { text: "5. … repeat for every change", options: {} },
    ], { x: 0.75, y: 2.2, w: 3.95, h: 2.6, fontFace: MONO, fontSize: 13, color: INK, valign: "top", margin: 0, lineSpacingMultiple: 1.45 });
    // right: declarative
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.15, y: 1.5, w: 4.3, h: 3.55, fill: { color: TINT }, rectRadius: 0.08, shadow: shadow() });
    s.addText("React  ·  Declarative", { x: 5.35, y: 1.68, w: 3.95, h: 0.4, fontFace: KH, fontSize: 14, bold: true, color: GREEN, margin: 0 });
    s.addText([
      { text: "1. ប្រាប់ React ថា State ប្ដូរ", options: { breakLine: true } },
      { text: "2. React Re-render Component", options: { breakLine: true } },
      { text: "3. React Update DOM ដោយខ្លួនឯង", options: { breakLine: true } },
      { text: "   (តាមរយៈ Virtual DOM Diff)", options: {} },
    ], { x: 5.35, y: 2.2, w: 3.95, h: 2.6, fontFace: KH, fontSize: 13, color: INK, valign: "top", margin: 0, lineSpacingMultiple: 1.5 });
  });

  // ============ 5. WHY REACT + SPA ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ១", "ហេតុអ្វីប្រើ React?", atomCyan);
    const items = [
      { ic: icCubes, t: "Component-Based", d: "បំបែក UI ជាបំណែក Reusable" },
      { ic: icCode, t: "Declarative", d: "សរសេរ UI ងាយយល់" },
      { ic: icBolt, t: "Virtual DOM", d: "លឿន — update តែផ្នែកប្ដូរ" },
      { ic: icGlobe, t: "Huge Ecosystem", d: "Library, Tool, Community ច្រើន" },
      { ic: icBriefcase, t: "Job Market", d: "ត្រូវការខ្ពស់បំផុតក្នុង Frontend" },
    ];
    items.forEach((it, i) => {
      const x = 0.55 + (i % 3) * 3.04;
      const y = 1.5 + Math.floor(i / 3) * 1.18;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 2.85, h: 1.02, fill: { color: TINT2 }, rectRadius: 0.07 });
      s.addShape(pres.shapes.OVAL, { x: x + 0.18, y: y + 0.27, w: 0.48, h: 0.48, fill: { color: CYAN_DK } });
      s.addImage({ data: it.ic, x: x + 0.29, y: y + 0.38, w: 0.26, h: 0.26 });
      s.addText(it.t, { x: x + 0.78, y: y + 0.14, w: 1.95, h: 0.35, fontFace: KH, fontSize: 13, bold: true, color: INK, margin: 0 });
      s.addText(it.d, { x: x + 0.78, y: y + 0.49, w: 1.98, h: 0.45, fontFace: KH, fontSize: 10.5, color: MUTED, margin: 0, lineSpacingMultiple: 1.05 });
    });
    // SPA callout
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.59, y: 3.88, w: 5.86, h: 1.12, fill: { color: DARK }, rectRadius: 0.08 });
    s.addText([
      { text: "SPA  ", options: { bold: true, color: CYAN, fontSize: 14 } },
      { text: "HTML ទាញតែម្ដង → JS គ្រប់គ្រងការប្ដូរ Page ដោយមិន Reload → រហ័ស រលូន", options: { color: LIGHT, fontSize: 12 } },
    ], { x: 3.78, y: 4.0, w: 5.5, h: 0.5, fontFace: KH, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    s.addText("ឧទាហរណ៍: Facebook · Gmail · Notion · Figma", { x: 3.78, y: 4.55, w: 5.5, h: 0.35, fontFace: KH, fontSize: 10.5, italic: true, color: CYAN, margin: 0 });
    // left small note under grid
    s.addText("⚛  Single Page Application", { x: 0.55, y: 4.2, w: 2.9, h: 0.5, fontFace: KH, fontSize: 12, bold: true, color: CYAN_DK, valign: "middle", margin: 0 });
  });

  // ============ 6. VIRTUAL DOM ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ១", "Virtual DOM — ដំណើរការ", atomCyan);
    const steps = [
      "Component រៀបរាប់ UI → React បង្កើត Virtual DOM (Tree ក្នុង Memory)",
      "State ផ្លាស់ប្ដូរ → Virtual DOM ថ្មីត្រូវបង្កើត",
      "React ប្រៀបធៀប Old ⟷ New (Diffing Algorithm)",
      "React Update តែ Node ដែលផ្លាស់ប្ដូរ ទៅ Real DOM",
    ];
    steps.forEach((t, i) => {
      const y = 1.5 + i * 0.74;
      s.addShape(pres.shapes.OVAL, { x: 0.55, y: y + 0.02, w: 0.5, h: 0.5, fill: { color: DARK } });
      s.addText(String(i + 1), { x: 0.55, y: y + 0.02, w: 0.5, h: 0.5, fontFace: KH, fontSize: 16, bold: true, color: CYAN, align: "center", valign: "middle", margin: 0 });
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 1.25, y, w: 8.2, h: 0.56, fill: { color: i % 2 ? TINT2 : TINT }, rectRadius: 0.06 });
      s.addText(t, { x: 1.45, y, w: 7.85, h: 0.56, fontFace: KH, fontSize: 12.5, color: INK, valign: "middle", margin: 0 });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 4.55, w: 8.9, h: 0.62, fill: { color: DARK }, rectRadius: 0.08 });
    s.addText([
      { text: "ហេតុអ្វីលឿន:  ", options: { bold: true, color: CYAN } },
      { text: "Real DOM Update Cost ខ្ពស់ — Virtual DOM ធ្វើក្នុង Memory មុន ហើយ Apply ការផ្លាស់ប្ដូរតិចបំផុត។", options: { color: LIGHT } },
    ], { x: 0.75, y: 4.55, w: 8.5, h: 0.62, fontFace: KH, fontSize: 11.5, valign: "middle", margin: 0 });
  });

  // ============ 7. VITE SETUP ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ២", "Setup ជាមួយ Vite", atomCyan);
    s.addText([
      { text: "Vite ", options: { bold: true, color: CYAN_DK } },
      { text: "(“លឿន” ជាភាសាបារាំង) = Build Tool ដែលលឿនជាង Create React App ច្រើនដង — Standard សម្រាប់ React Project ថ្មីៗ។", options: {} },
    ], { x: 0.55, y: 1.4, w: 9, h: 0.6, fontFace: KH, fontSize: 13.5, color: INK, valign: "top", margin: 0, lineSpacingMultiple: 1.12 });
    codeBox(s, 0.55, 2.05, 5.6, 2.95, [
      { t: "# 1. បង្កើត Project", c: "6BA89A" },
      { t: "npm create vite@latest my-app -- \\", b: true },
      { t: "      --template react", b: true },
      { t: "" },
      { t: "# 2. ចូល Folder & ដំឡើង", c: "6BA89A" },
      { t: "cd my-app" },
      { t: "npm install" },
      { t: "" },
      { t: "# 3. រត់ Dev Server", c: "6BA89A" },
      { t: "npm run dev", b: true, c: CYAN },
    ], 12.5);
    // right scripts + prereq
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.4, y: 2.05, w: 3.05, h: 1.2, fill: { color: TINT }, rectRadius: 0.08 });
    s.addText("Prerequisites", { x: 6.6, y: 2.16, w: 2.7, h: 0.3, fontFace: KH, fontSize: 12.5, bold: true, color: CYAN_DK, margin: 0 });
    s.addText([
      { text: "Node.js v18+   ", options: { breakLine: true } },
      { text: "npm (មកជាមួយ Node)   ", options: { breakLine: true } },
      { text: "VS Code", options: {} },
    ], { x: 6.6, y: 2.5, w: 2.7, h: 0.7, fontFace: KH, fontSize: 11, color: INK, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.4, y: 3.4, w: 3.05, h: 1.6, fill: { color: TINT2 }, rectRadius: 0.08 });
    s.addText("Available Scripts", { x: 6.6, y: 3.5, w: 2.7, h: 0.3, fontFace: KH, fontSize: 12.5, bold: true, color: INK, margin: 0 });
    s.addText([
      { text: "dev", options: { bold: true, color: CYAN_DK, breakLine: true } },
      { text: "build", options: { bold: true, color: CYAN_DK, breakLine: true } },
      { text: "preview", options: { bold: true, color: CYAN_DK, breakLine: true } },
      { text: "lint", options: { bold: true, color: CYAN_DK } },
    ], { x: 6.6, y: 3.84, w: 1.0, h: 1.1, fontFace: MONO, fontSize: 11, valign: "top", margin: 0, lineSpacingMultiple: 1.35 });
    s.addText([
      { text: "Hot Reload", options: { breakLine: true } },
      { text: "Production", options: { breakLine: true } },
      { text: "Preview build", options: { breakLine: true } },
      { text: "Code style", options: {} },
    ], { x: 7.55, y: 3.84, w: 1.8, h: 1.1, fontFace: KH, fontSize: 10.5, color: MUTED, valign: "top", margin: 0, lineSpacingMultiple: 1.35 });
    s.addText("→ http://localhost:5173", { x: 0.55, y: 5.05, w: 5.6, h: 0.3, fontFace: MONO, fontSize: 11, bold: true, color: CYAN_DK, margin: 0 });
  });

  // ============ 8. PROJECT STRUCTURE ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ២", "Project Structure", atomCyan);
    codeBox(s, 0.55, 1.45, 4.7, 3.6, [
      { t: "my-app/" },
      { t: "├─ node_modules/   # កុំ Edit", c: "6BA89A" },
      { t: "├─ public/         # static", c: "6BA89A" },
      { t: "├─ src/   # <- Code របស់យើង", c: CYAN, b: true },
      { t: "│  ├─ assets/" },
      { t: "│  ├─ App.jsx      # Root", c: "6BA89A" },
      { t: "│  ├─ App.css" },
      { t: "│  ├─ main.jsx     # Entry", c: "6BA89A" },
      { t: "│  └─ index.css" },
      { t: "├─ index.html" },
      { t: "├─ package.json" },
      { t: "└─ vite.config.js" },
    ], 11.5);
    // right: key files
    const notes = [
      { t: "index.html", d: "មាន <div id=\"root\"> តែមួយ — React render UI ទាំងមូលនៅទីនេះ" },
      { t: "main.jsx", d: "Entry Point — createRoot(...).render(<App />)" },
      { t: "App.jsx", d: "Root Component — function ដែល return JSX" },
      { t: "src/", d: "Code របស់យើងទាំងអស់នៅទីនេះ" },
    ];
    notes.forEach((n, i) => {
      const y = 1.45 + i * 0.9;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.5, y, w: 3.95, h: 0.78, fill: { color: TINT }, rectRadius: 0.06 });
      s.addText(n.t, { x: 5.7, y: y + 0.06, w: 3.6, h: 0.3, fontFace: MONO, fontSize: 12.5, bold: true, color: CYAN_DK, margin: 0 });
      s.addText(n.d, { x: 5.7, y: y + 0.36, w: 3.6, h: 0.4, fontFace: KH, fontSize: 10.5, color: MUTED, margin: 0, lineSpacingMultiple: 1.05 });
    });
  });

  // ============ 9. JSX INTRO ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ៣", "JSX — JavaScript XML", atomCyan);
    s.addText([
      { text: "JSX ", options: { bold: true, color: CYAN_DK } },
      { text: "= Syntax Extension នៃ JavaScript ដែលឲ្យយើងសរសេរ HTML-like Code ក្នុង JS។", options: {} },
    ], { x: 0.55, y: 1.4, w: 9, h: 0.5, fontFace: KH, fontSize: 14, color: INK, valign: "top", margin: 0 });
    codeBox(s, 0.55, 2.0, 8.9, 1.55, [
      { t: "// JSX — មើលទៅដូច HTML", c: "6BA89A" },
      { t: "const element = <h1>Hello, world!</h1>" },
      { t: "" },
      { t: "// តាមពិត Compile ទៅជា Function Call", c: "6BA89A" },
      { t: "const element = React.createElement('h1', null, 'Hello, world!')" },
    ], 12.5);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 3.78, w: 8.9, h: 1.2, fill: { color: DARK }, rectRadius: 0.08 });
    s.addImage({ data: atomCyan, x: 0.78, y: 4.05, w: 0.65, h: 0.65 });
    s.addText([
      { text: "មិនមែន HTML ទេ!  ", options: { bold: true, color: CYAN, fontSize: 14 } },
      { text: "JSX មើលទៅដូច HTML ប៉ុន្តែវាជា JS — Browser មិនយល់ដោយផ្ទាល់ ត្រូវ Compile មុន (Vite ធ្វើឲ្យស្វ័យប្រវត្តិ)។", options: { color: LIGHT, fontSize: 12.5 } },
    ], { x: 1.65, y: 3.95, w: 7.6, h: 0.9, fontFace: KH, valign: "middle", margin: 0, lineSpacingMultiple: 1.12 });
  });

  // ============ 10. JSX RULES ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ៣", "JSX Rules — ច្បាប់សំខាន់", atomCyan);
    const rules = [
      { n: "①", t: "Single Root Element", d: "Element តែមួយ (រុំក្នុង <div> ឬ Fragment <>)" },
      { n: "②", t: "Self-Closing Tags", d: "<img /> · <input /> · <br />" },
      { n: "③", t: "className ជំនួស class", d: "class ជា Keyword Reserved ក្នុង JS" },
      { n: "④", t: "camelCase Attributes", d: "onClick · onChange · htmlFor · tabIndex" },
    ];
    rules.forEach((r, i) => {
      const x = 0.55 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 1.0;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 4.35, h: 0.86, fill: { color: TINT }, rectRadius: 0.07, shadow: shadow() });
      s.addText(r.n, { x: x + 0.16, y, w: 0.6, h: 0.86, fontFace: KH, fontSize: 24, bold: true, color: CYAN_DK, align: "center", valign: "middle", margin: 0 });
      s.addText(r.t, { x: x + 0.8, y: y + 0.12, w: 3.4, h: 0.34, fontFace: KH, fontSize: 13.5, bold: true, color: INK, margin: 0 });
      s.addText(r.d, { x: x + 0.8, y: y + 0.46, w: 3.45, h: 0.36, fontFace: KH, fontSize: 10.5, color: MUTED, margin: 0 });
    });
    // mini table camelCase
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 3.65, w: 8.9, h: 1.35, fill: { color: DARK }, rectRadius: 0.08 });
    const pairs = ["onclick → onClick", "onchange → onChange", "for → htmlFor", "tabindex → tabIndex", "maxlength → maxLength", "readonly → readOnly"];
    pairs.forEach((p, i) => {
      const x = 0.8 + (i % 3) * 2.95;
      const y = 3.82 + Math.floor(i / 3) * 0.55;
      s.addText(p, { x, y, w: 2.85, h: 0.5, fontFace: MONO, fontSize: 12.5, color: LIGHT, valign: "middle", margin: 0 });
    });
  });

  // ============ 11. JSX EXPRESSIONS ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ៣", "Expressions ក្នុង JSX  { }", atomCyan);
    s.addText("បញ្ចូល JavaScript Expression ណាមួយ ដោយប្រើ Curly Braces { }", { x: 0.55, y: 1.4, w: 9, h: 0.4, fontFace: KH, fontSize: 13.5, color: INK, margin: 0 });
    codeBox(s, 0.55, 1.85, 5.55, 3.15, [
      { t: "const name = \"វិចិត្រ\"", },
      { t: "const age = 20" },
      { t: "" },
      { t: "<h1>Hello, {name}!</h1>" },
      { t: "<p>Age: {age}</p>" },
      { t: "<p>Next year: {age + 1}</p>" },
      { t: "<p>{age >= 18 ? \"Adult\" : \"Minor\"}</p>" },
      { t: "<p>{new Date()" },
      { t: "      .toLocaleDateString()}</p>" },
    ], 12);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.35, y: 1.85, w: 3.1, h: 1.6, fill: { color: TINT }, rectRadius: 0.08 });
    s.addText("⚠️ ត្រឹម Expression", { x: 6.55, y: 1.97, w: 2.75, h: 0.35, fontFace: KH, fontSize: 13, bold: true, color: RED, margin: 0 });
    s.addText("{ } ទទួល Expression ប៉ុណ្ណោះ — មិនអាចសរសេរ if / for ដោយផ្ទាល់ទេ។ ប្រើ Ternary ឬ .map() ជំនួស។", { x: 6.55, y: 2.35, w: 2.75, h: 1.05, fontFace: KH, fontSize: 11, color: INK, valign: "top", margin: 0, lineSpacingMultiple: 1.12 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.35, y: 3.6, w: 3.1, h: 1.4, fill: { color: TINT2 }, rectRadius: 0.08 });
    s.addText("Inline Style = Object", { x: 6.55, y: 3.72, w: 2.75, h: 0.32, fontFace: KH, fontSize: 12.5, bold: true, color: INK, margin: 0 });
    s.addText([
      { text: "style={{ color: \"red\",", options: { breakLine: true } },
      { text: "  fontSize: \"20px\" }}", options: {} },
    ], { x: 6.55, y: 4.08, w: 2.75, h: 0.6, fontFace: MONO, fontSize: 10.5, color: CYAN_DK, valign: "top", margin: 0, lineSpacingMultiple: 1.1 });
    s.addText("Best Practice: ប្រើ className ច្រើនជាង", { x: 6.55, y: 4.62, w: 2.75, h: 0.32, fontFace: KH, fontSize: 9.5, italic: true, color: MUTED, margin: 0 });
  });

  // ============ 12. COMPONENTS ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ៤", "Components — បំណែក UI", atomCyan);
    s.addText([
      { text: "Component ", options: { bold: true, color: CYAN_DK } },
      { text: "= Function ដែល Return JSX — បំណែក UI ដែលប្រើឡើងវិញ និងផ្សំចូលគ្នាបាន។", options: {} },
    ], { x: 0.55, y: 1.4, w: 9, h: 0.45, fontFace: KH, fontSize: 14, color: INK, margin: 0 });
    codeBox(s, 0.55, 1.95, 5.55, 3.05, [
      { t: "// Functional Component", c: "6BA89A" },
      { t: "function Welcome() {" },
      { t: "  return <h1>Hello, World!</h1>" },
      { t: "}" },
      { t: "" },
      { t: "// ប្រើដូច HTML Tag", c: "6BA89A" },
      { t: "function App() {" },
      { t: "  return (" },
      { t: "    <div>" },
      { t: "      <Welcome />" },
      { t: "      <Welcome />" },
      { t: "    </div> )" },
      { t: "}" },
    ], 11);
    // PascalCase note
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.35, y: 1.95, w: 3.1, h: 1.65, fill: { color: TINT }, rectRadius: 0.08 });
    s.addText("Naming: PascalCase", { x: 6.55, y: 2.07, w: 2.75, h: 0.32, fontFace: KH, fontSize: 13, bold: true, color: CYAN_DK, margin: 0 });
    s.addText([
      { text: "✅ UserCard, NavBar, App", options: { color: GREEN, breakLine: true } },
      { text: "❌ userCard (=HTML tag!)", options: { color: RED } },
    ], { x: 6.55, y: 2.45, w: 2.75, h: 0.7, fontFace: MONO, fontSize: 10.5, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    s.addText("អក្សរធំ = Component", { x: 6.55, y: 3.18, w: 2.75, h: 0.3, fontFace: KH, fontSize: 10, italic: true, color: MUTED, margin: 0 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.35, y: 3.75, w: 3.1, h: 1.25, fill: { color: DARK }, rectRadius: 0.08 });
    s.addText("Export / Import", { x: 6.55, y: 3.85, w: 2.75, h: 0.3, fontFace: KH, fontSize: 12, bold: true, color: CYAN, margin: 0 });
    s.addText([
      { text: "export default Header", options: { breakLine: true } },
      { text: "import Header from", options: { breakLine: true } },
      { text: "  './Header'", options: {} },
    ], { x: 6.55, y: 4.18, w: 2.75, h: 0.75, fontFace: MONO, fontSize: 9.5, color: LIGHT, valign: "top", margin: 0, lineSpacingMultiple: 1.12 });
  });

  // ============ 13. COMPONENT TREE ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ៤", "Component Tree", atomCyan);
    codeBox(s, 0.55, 1.5, 4.9, 3.5, [
      { t: "function App() {" },
      { t: "  return (" },
      { t: "    <div>" },
      { t: "      <Header />" },
      { t: "      <Main>" },
      { t: "        <Sidebar />" },
      { t: "        <Content />" },
      { t: "      </Main>" },
      { t: "      <Footer />" },
      { t: "    </div>" },
      { t: "  )" },
      { t: "}" },
    ], 12.5);
    // tree on right
    const tree = [
      { t: "App", lvl: 0 },
      { t: "├─ Header", lvl: 1 },
      { t: "├─ Main", lvl: 1 },
      { t: "│   ├─ Sidebar", lvl: 2 },
      { t: "│   └─ Content", lvl: 2 },
      { t: "└─ Footer", lvl: 1 },
    ];
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.7, y: 1.5, w: 3.75, h: 2.55, fill: { color: TINT }, rectRadius: 0.08, shadow: shadow() });
    s.addText(tree.map((n, i) => ({ text: n.t, options: { breakLine: i < tree.length - 1, bold: n.lvl === 0, color: n.lvl === 0 ? CYAN_DK : INK } })),
      { x: 5.95, y: 1.7, w: 3.4, h: 2.2, fontFace: MONO, fontSize: 14, valign: "top", margin: 0, lineSpacingMultiple: 1.3 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.7, y: 4.2, w: 3.75, h: 0.8, fill: { color: DARK }, rectRadius: 0.08 });
    s.addText("បំបែក Component តូចៗ → Reusable + ងាយ Maintain", { x: 5.9, y: 4.2, w: 3.4, h: 0.8, fontFace: KH, fontSize: 11.5, color: LIGHT, valign: "middle", margin: 0, lineSpacingMultiple: 1.1 });
  });

  // ============ 14. PROPS ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ៥", "Props — បញ្ជូន Data", atomCyan);
    s.addText([
      { text: "Props ", options: { bold: true, color: CYAN_DK } },
      { text: "(Properties) = វិធីបញ្ជូន Data ពី Parent → Child។ ដូច Function Parameters។", options: {} },
    ], { x: 0.55, y: 1.4, w: 9, h: 0.45, fontFace: KH, fontSize: 14, color: INK, margin: 0 });
    codeBox(s, 0.55, 1.95, 4.55, 3.05, [
      { t: "// Parent ផ្ញើ prop", c: "6BA89A" },
      { t: "<Greeting name=\"វិចិត្រ\" />" },
      { t: "" },
      { t: "// Child ទទួល (Destructuring)", c: "6BA89A" },
      { t: "function Greeting({ name }) {" },
      { t: "  return <h1>Hello,", b: true },
      { t: "      {name}!</h1>", b: true },
      { t: "}" },
    ], 12);
    // right: props types
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 1.95, w: 4.15, h: 3.05, fill: { color: TINT }, rectRadius: 0.08, shadow: shadow() });
    s.addText("Props Types — អ្វីៗក៏ Pass បាន", { x: 5.5, y: 2.08, w: 3.8, h: 0.32, fontFace: KH, fontSize: 12.5, bold: true, color: INK, margin: 0 });
    const types = [
      ["text=\"Hello\"", "String"], ["count={42}", "Number"], ["isActive={true}", "Boolean"],
      ["items={[1,2,3]}", "Array"], ["user={{...}}", "Object"], ["onClick={fn}", "Function"], ["icon={<Star/>}", "JSX"],
    ];
    types.forEach((t, i) => {
      const y = 2.45 + i * 0.35;
      s.addText(t[0], { x: 5.5, y, w: 2.5, h: 0.32, fontFace: MONO, fontSize: 11, color: CYAN_DK, valign: "middle", margin: 0 });
      s.addText(t[1], { x: 8.1, y, w: 1.25, h: 0.32, fontFace: KH, fontSize: 10.5, color: MUTED, valign: "middle", margin: 0 });
    });
    s.addText("⚠️ String ប្រើ \"...\" · ប្រភេទផ្សេង ប្រើ { }", { x: 5.5, y: 4.95, w: 3.8, h: 0.0, fontFace: KH, fontSize: 9, italic: true, color: MUTED, margin: 0 });
  });

  // ============ 15. children + read-only ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ៥", "children Prop & Default", atomCyan);
    // default props
    codeBox(s, 0.55, 1.5, 4.55, 1.7, [
      { t: "// Default Props", c: "6BA89A" },
      { t: "function Button({" },
      { t: "  text = \"Click\"," , c: CYAN },
      { t: "  color = \"blue\" }) {", c: CYAN },
      { t: "  return <button>{text}</button>" },
      { t: "}" },
    ], 11.5);
    // children
    codeBox(s, 0.55, 3.35, 4.55, 1.65, [
      { t: "// children = content រវាង tags", c: "6BA89A" },
      { t: "function Card({ children }) {" },
      { t: "  return <div className=\"card\">" },
      { t: "    {children}", b: true, c: CYAN },
      { t: "  </div>" },
      { t: "}" },
    ], 11);
    // right notes
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 1.5, w: 4.15, h: 1.7, fill: { color: TINT }, rectRadius: 0.08 });
    s.addText("Destructuring Props", { x: 5.5, y: 1.6, w: 3.8, h: 0.3, fontFace: KH, fontSize: 12.5, bold: true, color: CYAN_DK, margin: 0 });
    s.addText([
      { text: "✅ function Card({ name, age })", options: { color: GREEN, breakLine: true } },
      { text: "❌ function Card(props) → props.name", options: { color: RED } },
    ], { x: 5.5, y: 1.95, w: 3.8, h: 0.75, fontFace: MONO, fontSize: 10, valign: "top", margin: 0, lineSpacingMultiple: 1.25 });
    s.addText("ធ្វើឲ្យ Code ស្អាត ខ្លី", { x: 5.5, y: 2.75, w: 3.8, h: 0.3, fontFace: KH, fontSize: 10.5, italic: true, color: MUTED, margin: 0 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.3, y: 3.35, w: 4.15, h: 1.65, fill: { color: DARK }, rectRadius: 0.08 });
    s.addText("Props គឺ Read-Only", { x: 5.5, y: 3.5, w: 3.8, h: 0.32, fontFace: KH, fontSize: 13, bold: true, color: CYAN, margin: 0 });
    s.addText("Component មិនត្រូវផ្លាស់ប្ដូរ Props ទេ — បើចង់ Modify ត្រូវប្រើ State (Lesson 16)។", { x: 5.5, y: 3.9, w: 3.8, h: 1.0, fontFace: KH, fontSize: 11, color: LIGHT, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
  });

  // ============ 16. RENDERING LISTS ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "មាតិកា · ៦", "Rendering Lists — .map()", atomCyan);
    codeBox(s, 0.55, 1.45, 5.3, 3.55, [
      { t: "const students = [" },
      { t: "  { id:1, name:\"វិចិត្រ\" }," },
      { t: "  { id:2, name:\"សុភ័ក្ត្រ\" }," },
      { t: "]" },
      { t: "" },
      { t: "{students.map((s) => (" },
      { t: "  <StudentCard" },
      { t: "    key={s.id}", b: true, c: CYAN },
      { t: "    name={s.name}" },
      { t: "  />" },
      { t: "))}" },
    ], 12);
    // key prop importance
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.1, y: 1.45, w: 3.35, h: 1.85, fill: { color: TINT }, rectRadius: 0.08, shadow: shadow() });
    s.addShape(pres.shapes.OVAL, { x: 6.3, y: 1.6, w: 0.5, h: 0.5, fill: { color: GOLD } });
    s.addImage({ data: icKey, x: 6.42, y: 1.72, w: 0.26, h: 0.26 });
    s.addText("key Prop — សំខាន់ណាស់!", { x: 6.95, y: 1.62, w: 2.45, h: 0.5, fontFace: KH, fontSize: 12.5, bold: true, color: INK, valign: "middle", margin: 0 });
    s.addText("រាល់ Element ក្នុង List ត្រូវមាន key Unique — React ប្រើវាដើម្បីដឹងថា Element ណាប្ដូរ/បន្ថែម/លុប → Diffing លឿន។", { x: 6.3, y: 2.25, w: 3.0, h: 1.0, fontFace: KH, fontSize: 11, color: INK, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
    // spread props
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.1, y: 3.45, w: 3.35, h: 1.55, fill: { color: DARK }, rectRadius: 0.08 });
    s.addText("Spread Props", { x: 6.3, y: 3.55, w: 3.0, h: 0.3, fontFace: KH, fontSize: 12.5, bold: true, color: CYAN, margin: 0 });
    s.addText([
      { text: "// បញ្ជូន Object ទាំងមូល", options: { color: "6BA89A", breakLine: true } },
      { text: "<StudentCard {...student} />", options: { color: LIGHT } },
    ], { x: 6.3, y: 3.9, w: 3.0, h: 0.7, fontFace: MONO, fontSize: 10.5, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });
    s.addText("ស្មើនឹង name={..} age={..} grade={..}", { x: 6.3, y: 4.58, w: 3.0, h: 0.3, fontFace: KH, fontSize: 9, italic: true, color: CYAN, margin: 0 });
  });

  // ============ 17. DEMO APP ============
  add(() => {
    const s = pres.addSlide(); s.background = { color: DARK };
    s.addShape(pres.shapes.OVAL, { x: 0.5, y: 0.45, w: 0.62, h: 0.62, fill: { color: DARK2 } });
    s.addImage({ data: atomCyan, x: 0.58, y: 0.53, w: 0.46, h: 0.46 });
    s.addText("DEMO", { x: 1.3, y: 0.45, w: 6, h: 0.28, fontFace: KH, fontSize: 11, bold: true, color: CYAN, charSpacing: 2, margin: 0 });
    s.addText("Profile Card App", { x: 1.3, y: 0.69, w: 7, h: 0.55, fontFace: KH, fontSize: 26, bold: true, color: LIGHT, margin: 0 });
    // file structure chips
    const files = ["main.jsx", "App.jsx", "components/Header.jsx", "components/ProfileCard.jsx", "components/Footer.jsx", "App.css"];
    files.forEach((f, i) => {
      const x = 0.55 + (i % 3) * 3.05;
      const y = 1.55 + Math.floor(i / 3) * 0.62;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 2.9, h: 0.5, fill: { color: DARK2 }, line: { color: CYAN, width: 0.5 }, rectRadius: 0.06 });
      s.addText(f, { x: x + 0.15, y, w: 2.6, h: 0.5, fontFace: MONO, fontSize: 11, color: LIGHT, valign: "middle", margin: 0 });
    });
    codeBox(s, 0.55, 2.95, 8.9, 2.45, [
      { t: "const team = [ { id, name, role, avatar, skills:[...] }, ... ]", c: "6BA89A" },
      { t: "" },
      { t: "function App() {" },
      { t: "  return (<div>" },
      { t: "    <Header title=\"ក្រុមការងាររបស់យើង\" />" },
      { t: "    <main className=\"grid\">" },
      { t: "      {team.map((m) => <ProfileCard key={m.id} {...m} />)}", c: CYAN, b: true },
      { t: "    </main>" },
      { t: "    <Footer><p>© 2026 — React ⚛️</p></Footer>" },
      { t: "  </div>)", },
    ], 11.5);
  });

  // ============ 18. EXERCISES ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "អនុវត្ត", "លំហាត់ (Exercises)", atomCyan);
    const ex = [
      { n: "1", t: "Setup React App ដំបូង", d: "Vite project · កែ App.jsx · Inline style" },
      { n: "2", t: "Header / Footer / Card", d: "File ដាច់ៗ · title prop · children" },
      { n: "3", t: "StudentCard ជាមួយ Props", d: "name, age, grade, subjects · Default props" },
      { n: "4", t: "Render List of Students", d: ".map() · key prop · Bonus: sort by grade" },
      { n: "5", t: "Reusable Button", d: "variant · size · Default props · CSS class" },
      { n: "6", t: "Bonus: Recipe Book App", d: "Grid · count · Conditional “Quick Meal” badge" },
    ];
    ex.forEach((e, i) => {
      const x = 0.55 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 1.13;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 4.35, h: 0.98, fill: { color: i % 2 ? TINT2 : TINT }, rectRadius: 0.07 });
      s.addShape(pres.shapes.OVAL, { x: x + 0.18, y: y + 0.28, w: 0.45, h: 0.45, fill: { color: DARK } });
      s.addText(e.n, { x: x + 0.18, y: y + 0.28, w: 0.45, h: 0.45, fontFace: KH, fontSize: 15, bold: true, color: CYAN, align: "center", valign: "middle", margin: 0 });
      s.addText(e.t, { x: x + 0.78, y: y + 0.13, w: 3.45, h: 0.36, fontFace: KH, fontSize: 13, bold: true, color: INK, margin: 0 });
      s.addText(e.d, { x: x + 0.78, y: y + 0.5, w: 3.5, h: 0.42, fontFace: KH, fontSize: 10.5, color: MUTED, margin: 0, lineSpacingMultiple: 1.05 });
    });
  });

  // ============ 19. KEY TAKEAWAYS ============
  add(() => {
    const s = pres.addSlide(); s.background = { color: DARK };
    s.addShape(pres.shapes.OVAL, { x: 0.5, y: 0.45, w: 0.62, h: 0.62, fill: { color: DARK2 } });
    s.addImage({ data: atomCyan, x: 0.58, y: 0.53, w: 0.46, h: 0.46 });
    s.addText("ចំណុចសំខាន់", { x: 1.3, y: 0.45, w: 6, h: 0.28, fontFace: KH, fontSize: 11, bold: true, color: CYAN, charSpacing: 2, margin: 0 });
    s.addText("Key Takeaways", { x: 1.3, y: 0.69, w: 7, h: 0.55, fontFace: KH, fontSize: 26, bold: true, color: LIGHT, margin: 0 });
    const tk = [
      "React = Library ស្ថាបនា UI បែប Declarative & Component-Based",
      "Virtual DOM ធ្វើ React លឿន — Update តែផ្នែកដែលប្ដូរ",
      "Vite = Build Tool ទំនើប — npm create vite@latest",
      "JSX = HTML-like ក្នុង JS — Single Root, className, camelCase, { }",
      "Component = Function return JSX — ឈ្មោះ PascalCase",
      "Props = បញ្ជូន Data Parent→Child (Read-Only!) · Destructuring",
      "children = content រវាង tags · សម្រាប់ Wrapper Component",
      ".map() + key = Pattern ស្ដង់ដារ Render List",
    ];
    tk.forEach((t, i) => {
      const x = 0.55 + (i % 2) * 4.55;
      const y = 1.55 + Math.floor(i / 2) * 0.92;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 4.35, h: 0.78, fill: { color: DARK2 }, rectRadius: 0.07 });
      s.addImage({ data: atomCyan, x: x + 0.16, y: y + 0.23, w: 0.32, h: 0.32 });
      s.addText(t, { x: x + 0.62, y, w: 3.6, h: 0.78, fontFace: KH, fontSize: 11, color: LIGHT, valign: "middle", margin: 0, lineSpacingMultiple: 1.05 });
    });
  });

  // ============ 20. RESOURCES / NEXT ============
  add(() => {
    const s = pres.addSlide(); contentBg(s);
    header(s, "ធនធាន", "Resources & បន្ទាប់", atomCyan);
    const res = [
      ["React Official Docs", "react.dev"],
      ["React Quick Start", "react.dev/learn"],
      ["Vite Guide", "vitejs.dev/guide"],
      ["Writing Markup with JSX", "react.dev/learn"],
      ["Passing Props", "react.dev/learn/passing-props"],
      ["Rendering Lists", "react.dev/learn/rendering-lists"],
    ];
    res.forEach((r, i) => {
      const x = 0.55 + (i % 2) * 4.55;
      const y = 1.5 + Math.floor(i / 2) * 0.78;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 4.35, h: 0.66, fill: { color: TINT }, rectRadius: 0.06 });
      s.addImage({ data: icLayer, x: x + 0.18, y: y + 0.2, w: 0.27, h: 0.27 });
      s.addText(r[0], { x: x + 0.6, y: y + 0.08, w: 3.6, h: 0.3, fontFace: KH, fontSize: 12, bold: true, color: INK, margin: 0 });
      s.addText(r[1], { x: x + 0.6, y: y + 0.36, w: 3.6, h: 0.26, fontFace: MONO, fontSize: 9.5, color: CYAN_DK, margin: 0 });
    });
    // next lesson banner
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.55, y: 4.2, w: 8.9, h: 0.92, fill: { color: DARK }, rectRadius: 0.08, shadow: shadow() });
    s.addImage({ data: atomCyan, x: 0.78, y: 4.42, w: 0.48, h: 0.48 });
    s.addText([
      { text: "Lesson បន្ទាប់  ·  ", options: { bold: true, color: CYAN } },
      { text: "Lesson 16 — React State & Events: useState, Event Handling, Forms, Conditional Rendering", options: { color: LIGHT } },
    ], { x: 1.45, y: 4.2, w: 7.85, h: 0.92, fontFace: KH, fontSize: 12.5, valign: "middle", margin: 0, lineSpacingMultiple: 1.1 });
  });

  slides.forEach(fn => fn());
  await pres.writeFile({ fileName: "/sessions/affectionate-festive-pascal/mnt/outputs/lesson15-react-fundamentals.pptx" });
  console.log("DECK WRITTEN — slides:", slides.length);
})();
