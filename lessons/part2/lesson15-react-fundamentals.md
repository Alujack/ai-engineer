# Lesson 15: React មូលដ្ឋាន

> **Part:** 2 — Frontend Development
> **រយៈពេល:** 3-4 ម៉ោង
> **កម្រិត:** បានរៀន Lesson 11–14 រួច (Prerequisites: ES6+, DOM, Git)

---

## 🎯 គោលបំណង (Learning Objectives)

បន្ទាប់ពីរៀន Lesson នេះចប់ សិស្សនឹងអាច៖
1. ពន្យល់បានថា **React ជាអ្វី** និងហេតុអ្វីបានជា Developer ច្រើនជ្រើសរើសវា
2. យល់ពី **Component-Based Architecture** និង **Virtual DOM**
3. **Setup** React Project ដោយប្រើ **Vite** ហើយរត់ Dev Server
4. សរសេរ **JSX** បានត្រឹមត្រូវ (Rules, Expressions, `className`...)
5. បង្កើត **Functional Components** និងតម្រៀបពួកវាជា Component Tree
6. បញ្ជូន Data ពី Parent ទៅ Child តាមរយៈ **Props** (រួមទាំង `children` និង Destructuring)
7. **Render List** នៃ Components ដោយប្រើ `.map()` ហើយយល់ពី `key` Prop

---

## 📖 React ជាអ្វី?

**React** គឺជា **JavaScript Library** ដែលបង្កើតដោយ **Meta (Facebook)** សម្រាប់ស្ថាបនា **User Interface** — ជាពិសេសសម្រាប់ **Single Page Applications (SPA)**។

ជំនួសការសរសេរ DOM Manipulation ដោយផ្ទាល់ (ដូចក្នុង [Lesson 13](./lesson13-dom-manipulation.md)) — React អនុញ្ញាតឱ្យយើង **រៀបរាប់** UI ថា "គួរមើលទៅយ៉ាងណា" ហើយវាគ្រប់គ្រង DOM Update ឱ្យដោយខ្លួនឯង។

```
DOM ដោយផ្ទាល់ (Imperative):              React (Declarative):
─────────────────────────────         ─────────────────────────────
1. Select element                      1. ប្រាប់ React ថា State ផ្លាស់ប្ដូរ
2. Change textContent                  2. React Re-render Component
3. Toggle class                        3. React Update DOM ដោយខ្លួនវាខ្លួនឯង
4. Update attribute                       (តាមរយៈ Virtual DOM Diff)
5. ... (repeat for every change)
```

### ហេតុអ្វីប្រើ React?

1. **Component-Based** — បំបែក UI ជាបំណែកតូចៗ (Reusable)
2. **Declarative** — សរសេរ UI តាមរបៀបងាយយល់
3. **Virtual DOM** — លឿន ដោយ Update តែផ្នែកដែលផ្លាស់ប្ដូរ
4. **Huge Ecosystem** — Library, Tool, Community ច្រើនណាស់
5. **Job Market** — ត្រូវការ React Developer ច្រើនបំផុតក្នុង Frontend

### SPA (Single Page Application)

**Traditional Web** = រាល់ Click → Server ផ្ញើ HTML ថ្មីមកវិញ → Reload Page ទាំងមូល

**SPA** = HTML ទាញតែម្ដង → JavaScript គ្រប់គ្រងការផ្លាស់ប្ដូរ Page ដោយមិន Reload → **រហ័ស និងរលូន**

> **💡 ឧទាហរណ៍ SPA:** Facebook, Twitter, Gmail, Notion, Figma

### Virtual DOM — តើដំណើរការយ៉ាងម៉េច?

```
1. Component រៀបរាប់ UI    →  React បង្កើត Virtual DOM (Tree នៅក្នុង Memory)
2. State ផ្លាស់ប្ដូរ          →  Virtual DOM ថ្មីត្រូវបង្កើត
3. React ប្រៀបធៀប Old ⟷ New (Diffing Algorithm)
4. React Update តែ Node ដែលផ្លាស់ប្ដូរ ទៅ Real DOM
```

> **💡 ហេតុអ្វីវាលឿន:** Real DOM Update មាន Cost ខ្ពស់ — Virtual DOM ធ្វើការងារនោះក្នុង Memory មុន ហើយ Apply Change តិចបំផុតទៅ Real DOM។

---

## 📚 មាតិកាលម្អិត (Detailed Content)

---

### 1. Setup React Project ជាមួយ Vite

**Vite** (បានន័យថា "លឿន" ជាភាសាបារាំង) គឺជា **Build Tool** ដែលលឿនជាង Create React App ច្រើនដង។ វាជា Standard សម្រាប់ React Project ថ្មីៗ។

#### Prerequisites — តម្រូវការមុន

- **Node.js** v18+ (Check: `node --version`)
- **npm** (មកជាមួយ Node)
- Code Editor (VS Code រងចាំ Setup)

#### បង្កើត Project ថ្មី

```bash
# 1. បង្កើត Project
npm create vite@latest my-app -- --template react

# 2. ចូលក្នុង Folder
cd my-app

# 3. ដំឡើង Dependencies
npm install

# 4. រត់ Dev Server
npm run dev
```

បើកក្នុង Browser៖ **http://localhost:5173**

#### Available Scripts

```bash
npm run dev       # Dev Server (Hot Reload)
npm run build     # Build Production
npm run preview   # Preview Production Build
npm run lint      # Check Code Style
```

---

### 2. Project Structure — រចនាសម្ព័ន្ធ Project

```
my-app/
├── node_modules/        # Dependencies (កុំ Edit)
├── public/              # Static Files (Image, Favicon...)
│   └── vite.svg
├── src/                 # 👈 Code របស់យើងនៅទីនេះ!
│   ├── assets/          # Images, Fonts ដែល Import ក្នុង Code
│   ├── App.jsx          # Root Component
│   ├── App.css          # Styles សម្រាប់ App
│   ├── main.jsx         # Entry Point (ConnectReact ទៅ DOM)
│   └── index.css        # Global Styles
├── index.html           # HTML Template (មាន <div id="root">)
├── package.json         # Dependencies + Scripts
├── vite.config.js       # Vite Configuration
└── .gitignore
```

#### `index.html` — Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

> **💡 ចំណាំ:** មាន `<div id="root">` តែមួយ — React Render UI ទាំងមូលនៅក្នុងនេះ។

#### `main.jsx` — Entry Point

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

#### `App.jsx` — Root Component

```jsx
function App() {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  )
}

export default App
```

---

### 3. JSX — JavaScript XML

**JSX** គឺជា **Syntax Extension** នៃ JavaScript ដែលអនុញ្ញាតឱ្យយើងសរសេរ HTML-like Code ក្នុង JS។

```jsx
// JSX — មើលទៅដូច HTML
const element = <h1>Hello, world!</h1>

// តាមពិត Compile ទៅជា Function Call
const element = React.createElement('h1', null, 'Hello, world!')
```

> **💡 មិនមែន HTML ទេ!** JSX មើលទៅដូច HTML ប៉ុន្តែវាគឺជា JS — Browser មិនយល់វាដោយផ្ទាល់ទេ ត្រូវ Compile មុន (Vite ធ្វើឱ្យដោយស្វ័យប្រវត្តិ)។

#### JSX Rules — ច្បាប់សំខាន់

**① Single Root Element** — JSX ត្រូវមាន Element តែ **មួយ** (ឫស)

```jsx
// ❌ Error — Element ច្រើនជា Root
return (
  <h1>Title</h1>
  <p>Paragraph</p>
)

// ✅ ត្រឹមត្រូវ — រុំក្នុង <div>
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
)

// ✅ ឬប្រើ Fragment (មិនមាន Wrapper ក្នុង DOM)
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
)
```

**② Self-Closing Tags** — Tag ដែលគ្មាន Content ត្រូវបិទដោយខ្លួនវាខ្លួនឯង

```jsx
// ❌ Error
<img src="cat.jpg">
<input type="text">
<br>

// ✅ ត្រឹមត្រូវ
<img src="cat.jpg" />
<input type="text" />
<br />
```

**③ `className` ជំនួស `class`** — ព្រោះ `class` ជា Keyword Reserved ក្នុង JS

```jsx
// ❌ HTML Style
<div class="card">...</div>

// ✅ JSX Style
<div className="card">...</div>
```

**④ camelCase Attributes** — HTML Attribute ច្រើនត្រូវសរសេរជា camelCase

| HTML | JSX |
|------|-----|
| `onclick` | `onClick` |
| `onchange` | `onChange` |
| `tabindex` | `tabIndex` |
| `maxlength` | `maxLength` |
| `for` (label) | `htmlFor` |
| `readonly` | `readOnly` |

```jsx
<button onClick={handleClick} tabIndex={0}>Click</button>
<label htmlFor="name">Name:</label>
<input id="name" maxLength={20} readOnly />
```

#### Expressions ក្នុង JSX — `{ }`

យើងអាចបញ្ចូល **JavaScript Expression** ណាមួយក្នុង JSX ដោយប្រើ Curly Braces `{ }`៖

```jsx
function App() {
  const name = "វិចិត្រ"
  const age = 20
  const skills = ["HTML", "CSS", "JS"]

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>Next year: {age + 1}</p>
      <p>First skill: {skills[0]}</p>
      <p>Today: {new Date().toLocaleDateString()}</p>
      <p>Status: {age >= 18 ? "Adult" : "Minor"}</p>
    </div>
  )
}
```

> **⚠️ ចំណាំ:** `{ }` ទទួល **Expression** ប៉ុណ្ណោះ — មិនអាចសរសេរ `if`, `for` Statement ដោយផ្ទាល់ទេ។
> ត្រូវប្រើ **Ternary** (`condition ? a : b`) ឬ **`.map()`** ជំនួស។

#### Inline Styles — Object មិនមែន String

```jsx
// ❌ HTML Style (String)
<div style="color: red; font-size: 20px">...</div>

// ✅ JSX Style (Object)
<div style={{ color: "red", fontSize: "20px" }}>...</div>
//        ⬆ External: JSX expression
//         ⬆ Internal: JS object
```

> **💡 Best Practice:** ប្រើ CSS File (`className`) ច្រើនជាង Inline Style។

#### Comments ក្នុង JSX

```jsx
return (
  <div>
    {/* នេះជា Comment */}
    <h1>Hello</h1>
    {/*
      Multi-line
      Comment
    */}
  </div>
)
```

---

### 4. Components — បំណែកនៃ UI

**Component** គឺជា **Function ដែល Return JSX**។ វាជាបំណែកនៃ UI ដែលអាចប្រើឡើងវិញ និងផ្សំចូលគ្នាបាន។

#### Functional Component — បែបទំនើប

```jsx
// បង្កើត Component
function Welcome() {
  return <h1>Hello, World!</h1>
}

// ឬជា Arrow Function
const Welcome = () => {
  return <h1>Hello, World!</h1>
}

// ប្រើ Component ដូច HTML Tag
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  )
}
```

#### Naming Convention — PascalCase

```jsx
// ✅ Component — PascalCase
function UserCard() {}
function NavigationBar() {}
function App() {}

// ❌ ខុស — Lowercase
function userCard() {}      // React នឹងគិតថា HTML Tag!
function navigation_bar() {} // មិនមែន Convention
```

> **💡 ហេតុអ្វី PascalCase?** React បែងចែក HTML Tag (`<div>`, `<h1>`) ពី Custom Component (`<UserCard>`) តាមអក្សរដំបូង — អក្សរធំ = Component។

#### Importing & Exporting — ប្រើ Component រួម File

**File: `Header.jsx`**

```jsx
function Header() {
  return (
    <header>
      <h1>My App</h1>
      <nav>Home | About | Contact</nav>
    </header>
  )
}

export default Header
```

**File: `App.jsx`**

```jsx
import Header from './Header'  // Import (មិនត្រូវដាក់ .jsx)

function App() {
  return (
    <div>
      <Header />
      <main>Content here</main>
    </div>
  )
}

export default App
```

#### Default Export vs Named Export

```jsx
// --- Default Export (មួយក្នុង File) ---
export default function Header() {...}

// Import: ដាក់ឈ្មោះអ្វីក៏បាន
import Header from './Header'
import H from './Header'  // ឈ្មោះអាចខុស


// --- Named Export (ច្រើនក្នុង File) ---
export function Button() {...}
export function Card() {...}

// Import: ត្រូវប្រើឈ្មោះដូចគ្នា និងដាក់ { }
import { Button, Card } from './components'
```

#### Component Tree — រចនាសម្ព័ន្ធ

```jsx
// App.jsx
function App() {
  return (
    <div>
      <Header />
      <Main>
        <Sidebar />
        <Content />
      </Main>
      <Footer />
    </div>
  )
}
```

```
App
├── Header
├── Main
│   ├── Sidebar
│   └── Content
└── Footer
```

> **💡 គន្លឹះ:** បំបែក Component តូចៗ → Reusable + Easy to Maintain។

---

### 5. Props — បញ្ជូន Data ទៅ Component

**Props** (ខ្លីសម្រាប់ "Properties") គឺជាវិធីបញ្ជូន Data ពី **Parent** ទៅ **Child** Component។ វាដូចជា **Function Parameters**។

#### Basic Props

```jsx
// Parent
function App() {
  return (
    <div>
      <Greeting name="វិចិត្រ" />
      <Greeting name="សុភ័ក្ត្រ" />
      <Greeting name="ស្រីលក្ខណ៍" />
    </div>
  )
}

// Child — ទទួល Props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>
}
```

**Output:**
```
Hello, វិចិត្រ!
Hello, សុភ័ក្ត្រ!
Hello, ស្រីលក្ខណ៍!
```

#### Props Destructuring — បែបស្អាត

```jsx
// ❌ បែបធម្មតា
function StudentCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Grade: {props.grade}</p>
    </div>
  )
}

// ✅ Destructuring (ច្រើនប្រើ)
function StudentCard({ name, age, grade }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  )
}
```

#### Props Types — អ្វីៗក៏ Pass បានដែរ

```jsx
<Component
  text="Hello"              // String
  count={42}                // Number
  isActive={true}           // Boolean
  items={[1, 2, 3]}         // Array
  user={{ name: "វិចិត្រ" }}  // Object
  onClick={handleClick}     // Function
  icon={<Star />}           // JSX/Component
/>
```

> **⚠️ ចំណាំ:** String អាចសរសេរដោយ `"..."` ប៉ុណ្ណោះ។ ប្រភេទផ្សេងៗ ត្រូវប្រើ `{ }`។

#### Default Props — តម្លៃ Default

```jsx
function Button({ text = "Click", color = "blue", size = "medium" }) {
  return (
    <button className={`btn btn-${color} btn-${size}`}>
      {text}
    </button>
  )
}

// Usage
<Button />                              // "Click", "blue", "medium"
<Button text="Submit" />                // "Submit", "blue", "medium"
<Button text="Cancel" color="red" />    // "Cancel", "red", "medium"
```

#### Children Prop — Content រវាង Tags

```jsx
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  )
}

// Usage
function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Description here</p>
      <button>OK</button>
    </Card>
  )
}
```

> **💡 ប្រយោជន៍:** `children` Prop ធ្វើឱ្យ Component Flexible ខ្លាំង — ប្រើជា Wrapper, Layout, Modal...។

#### Props គឺ Read-Only — មិនអាច Modify

```jsx
function Greeting({ name }) {
  // ❌ ខុស — កុំ Mutate Props!
  name = "Changed"
  return <h1>{name}</h1>
}
```

> **💡 Rule:** Component **មិនត្រូវ** ផ្លាស់ប្ដូរ Props របស់វាទេ។ បើចង់ Modify ត្រូវប្រើ **State** (រៀននៅ Lesson 16)។

---

### 6. Rendering Lists — បង្ហាញ Array

ប្រើ JavaScript Method `.map()` ដើម្បីបង្វែរ Array ទៅជា Array នៃ JSX Elements៖

```jsx
function StudentList() {
  const students = [
    { id: 1, name: "វិចិត្រ", age: 20, grade: "A" },
    { id: 2, name: "សុភ័ក្ត្រ", age: 21, grade: "B+" },
    { id: 3, name: "ស្រីលក្ខណ៍", age: 19, grade: "A-" },
  ]

  return (
    <div>
      <h1>Student List</h1>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          age={student.age}
          grade={student.grade}
        />
      ))}
    </div>
  )
}
```

#### Key Prop — សំខាន់ណាស់!

រាល់ Element ក្នុង List ត្រូវមាន **`key` Prop** ដែល **Unique**៖

```jsx
// ❌ មិនមាន key
{students.map((s) => <StudentCard name={s.name} />)}
// Warning: Each child in a list should have a unique "key" prop

// ✅ មាន key (ID Unique)
{students.map((s) => <StudentCard key={s.id} name={s.name} />)}

// ⚠️ Index ជា Fallback (មិនល្អបើ Array ផ្លាស់ប្ដូរ Order)
{students.map((s, index) => <StudentCard key={index} name={s.name} />)}
```

> **💡 ហេតុអ្វី:** React ប្រើ `key` ដើម្បីដឹងថា Element ណាខ្លះផ្លាស់ប្ដូរ, បន្ថែម, ឬ លុបក្នុង Re-render — បង្កើនប្រសិទ្ធភាព Diffing។

#### Spread Props — បញ្ជូន Object ទាំងមូល

```jsx
const student = { name: "វិចិត្រ", age: 20, grade: "A" }

// ❌ បែបវែង
<StudentCard name={student.name} age={student.age} grade={student.grade} />

// ✅ Spread Props
<StudentCard {...student} />
```

#### ឧទាហរណ៍ពេញលេញ

```jsx
// StudentCard.jsx
function StudentCard({ name, age, grade }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  )
}

export default StudentCard

// App.jsx
import StudentCard from './StudentCard'

const students = [
  { id: 1, name: "វិចិត្រ", age: 20, grade: "A" },
  { id: 2, name: "សុភ័ក្ត្រ", age: 21, grade: "B+" },
  { id: 3, name: "ស្រីលក្ខណ៍", age: 19, grade: "A-" },
]

function App() {
  return (
    <div>
      <h1>📚 ថ្នាក់រៀន</h1>
      {students.map((s) => (
        <StudentCard key={s.id} {...s} />
      ))}
    </div>
  )
}

export default App
```

---

## 💻 Code សំរាប់ Demo — Profile Card App

**File Structure:**
```
src/
├── App.jsx
├── App.css
├── components/
│   ├── Header.jsx
│   ├── ProfileCard.jsx
│   └── Footer.jsx
└── main.jsx
```

**`Header.jsx`**
```jsx
function Header({ title }) {
  return (
    <header style={{ padding: "1rem", background: "#4f46e5", color: "white" }}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
```

**`ProfileCard.jsx`**
```jsx
function ProfileCard({ name, role, avatar, skills = [] }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} width="80" />
      <h2>{name}</h2>
      <p><em>{role}</em></p>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileCard
```

**`Footer.jsx`**
```jsx
function Footer({ children }) {
  return (
    <footer style={{ padding: "1rem", textAlign: "center", color: "#666" }}>
      {children}
    </footer>
  )
}

export default Footer
```

**`App.jsx`**
```jsx
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import Footer from './components/Footer'
import './App.css'

const team = [
  {
    id: 1,
    name: "វិចិត្រ ប៊ុនធឿន",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/80?img=1",
    skills: ["React", "CSS", "TypeScript"],
  },
  {
    id: 2,
    name: "សុភ័ក្ត្រ លី",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/80?img=2",
    skills: ["Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 3,
    name: "ស្រីលក្ខណ៍ ឆាយ",
    role: "AI Engineer",
    avatar: "https://i.pravatar.cc/80?img=3",
    skills: ["Python", "LangChain", "Claude API"],
  },
]

function App() {
  return (
    <div>
      <Header title="🚀 ក្រុមការងាររបស់យើង" />

      <main className="grid">
        {team.map((member) => (
          <ProfileCard key={member.id} {...member} />
        ))}
      </main>

      <Footer>
        <p>© 2026 — បង្កើតដោយប្រើ React ⚛️</p>
      </Footer>
    </div>
  )
}

export default App
```

**`App.css`**
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.card img {
  border-radius: 50%;
}

.card ul {
  list-style: none;
  padding: 0;
}

.card li {
  display: inline-block;
  background: #eef2ff;
  color: #4f46e5;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 4px;
  font-size: 0.85rem;
}
```

---

## 🏋️ លំហាត់ (Exercise)

### លំហាត់ 1: Setup React App ដំបូង

- [ ] បង្កើត Project ថ្មីដោយ Vite (`my-first-react`)
- [ ] រត់ `npm run dev` និងបើក Browser
- [ ] កែ `App.jsx` ឱ្យបង្ហាញឈ្មោះរបស់អ្នក និងថ្ងៃខែឆ្នាំកំណើត
- [ ] បន្ថែម Inline Style ផ្ដល់ Background Color

### លំហាត់ 2: បង្កើត Header, Footer, Card Components

- [ ] បង្កើត File ដាច់ៗ៖ `Header.jsx`, `Footer.jsx`, `Card.jsx`
- [ ] Import និងប្រើពួកវាក្នុង `App.jsx`
- [ ] `Header` ទទួល Prop `title`
- [ ] `Footer` ប្រើ `children` Prop
- [ ] `Card` ទទួល Props `title`, `description`, `image`

### លំហាត់ 3: StudentCard ជាមួយ Props

បង្កើត `StudentCard` Component ដែលទទួល៖
- [ ] `name` (String)
- [ ] `age` (Number)
- [ ] `grade` (String)
- [ ] `subjects` (Array)
- [ ] Render Subjects ជា List ដោយ `.map()`
- [ ] បន្ថែម Default Props សម្រាប់ `grade = "Not Graded"`

```jsx
<StudentCard
  name="វិចិត្រ"
  age={20}
  grade="A"
  subjects={["Math", "Physics", "Coding"]}
/>
```

### លំហាត់ 4: Render List of Students

- [ ] បង្កើត Array of 5+ Students (មាន `id`, `name`, `age`, `grade`, `subjects`)
- [ ] ប្រើ `.map()` ដើម្បី Render `StudentCard` Component
- [ ] ដាក់ `key` Prop ឱ្យបានត្រឹមត្រូវ
- [ ] **Bonus:** Sort Students តាម Grade មុន Render

### លំហាត់ 5: Reusable Button Component

បង្កើត `Button` Component ដែលទទួល៖
- [ ] `text` (String) — Label
- [ ] `variant` (String) — `"primary" | "secondary" | "danger"`
- [ ] `size` (String) — `"small" | "medium" | "large"`
- [ ] Default Props សម្រាប់ទាំងអស់
- [ ] Render Button ផ្សេងៗគ្នាដោយ CSS Class `btn-${variant}` និង `btn-${size}`

```jsx
<Button text="Save" variant="primary" size="large" />
<Button text="Cancel" variant="secondary" />
<Button text="Delete" variant="danger" size="small" />
```

### លំហាត់ 6: Bonus — Recipe Book App

បង្កើត Recipe Book App ដែលមាន៖
- [ ] Array of 6+ Recipes (មាន `id`, `title`, `image`, `time`, `ingredients` Array)
- [ ] `RecipeCard` Component បង្ហាញ Recipe មួយ
- [ ] `RecipeList` Component Render Recipes ទាំងអស់ជា Grid
- [ ] `Header` Component បង្ហាញ Title + Recipe Count
- [ ] **Bonus:** ប្រើ Conditional Rendering ដើម្បីបង្ហាញ "Quick Meal" Badge ពេល `time < 30`

---

## 🧠 ចំណុចសំខាន់ (Key Takeaways)

1. **React** = JavaScript Library សម្រាប់ស្ថាបនា UI តាមរបៀប **Declarative** និង **Component-Based**
2. **Virtual DOM** ធ្វើឱ្យ React លឿន — វាប្រៀបធៀប Old/New ហើយ Update តែផ្នែកដែលផ្លាស់ប្ដូរ
3. **Vite** គឺជា Build Tool ទំនើបបំផុត — បង្កើត Project ដោយ `npm create vite@latest`
4. **JSX** = HTML-like Syntax ក្នុង JS — ត្រូវ Compile មុន Browser យល់
5. **JSX Rules:** Single Root, Self-Closing, `className`, camelCase, `{ }` សម្រាប់ Expression
6. **Component** = Function ដែល Return JSX — ឈ្មោះត្រូវជា **PascalCase**
7. **Props** = Function Parameters — បញ្ជូន Data ពី Parent ទៅ Child (Read-Only!)
8. **Destructuring Props** ធ្វើឱ្យ Code ស្អាត — `function Card({ name, age }) {...}`
9. **`children` Prop** = Content រវាង Component Tags — សម្រាប់ Wrapper Component
10. **`.map()` + `key`** = Pattern ស្ដង់ដារសម្រាប់ Render List of Components

---

## 🔗 ធនធានបន្ថែម (Resources)

- [React Official Docs (New)](https://react.dev/) — Tutorial ផ្លូវការ
- [React Quick Start](https://react.dev/learn) — រៀនរហ័ស
- [Vite Guide](https://vitejs.dev/guide/) — Documentation របស់ Vite
- [JSX In Depth](https://react.dev/learn/writing-markup-with-jsx) — JSX លម្អិត
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component) — Props
- [Rendering Lists](https://react.dev/learn/rendering-lists) — `.map()` + `key`
- [React Cheatsheet](https://devhints.io/react) — Cheatsheet សង្ខេប

---

> **Lesson បន្ទាប់:** Lesson 16 — React State & Events: `useState`, Event Handling, Forms, Conditional Rendering
