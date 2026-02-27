# 🟡 Part 2: Frontend Development

> **រយៈពេល:** 10 Lessons (~5 weeks)
> **តម្រូវការមុន:** Part 1 (HTML, CSS, JS មូលដ្ឋាន)
> **លទ្ធផល:** បង្កើត Web App មាន Interaction
> **Mini Project:** Interactive Web App with API

---

## Lesson 11: JavaScript ES6+ (Part 1)

### គោលបំណង (Objectives)
- យល់ដឹងពី Modern JavaScript Syntax
- អាចសរសេរ Code ស្អាត និង ខ្លី

### មាតិកា (Topics)
- **Arrow Functions**
  ```js
  const add = (a, b) => a + b;
  const greet = name => `Hello ${name}`;
  ```
- **Template Literals**
  ```js
  const message = `Hello ${name}, you are ${age} years old`;
  ```
- **Destructuring**
  ```js
  const { name, age } = student;
  const [first, second] = numbers;
  ```
- **Spread Operator**
  ```js
  const newArr = [...oldArr, newItem];
  const newObj = { ...oldObj, key: value };
  ```
- **Rest Parameters**
  ```js
  const sum = (...numbers) => numbers.reduce((a, b) => a + b);
  ```
- **Short-circuit Evaluation** (`&&`, `||`, `??`)
- **Optional Chaining** (`?.`)
- **Ternary Operator** (`condition ? true : false`)

### លំហាត់ (Exercise)
- Refactor Lesson 10 code ទៅជា ES6+ syntax
- សរសេរ 5 Functions ដោយប្រើ Arrow Functions
- ប្រើ Destructuring ដើម្បីទាញ Data ពី Objects & Arrays

---

## Lesson 12: JavaScript ES6+ (Part 2)

### គោលបំណង (Objectives)
- យល់ដឹងពី Asynchronous JavaScript
- អាចប្រើ Array Methods សម្រាប់ Data Manipulation

### មាតិកា (Topics)
- **Array Methods (Higher-Order Functions)**
  - `map()` — Transform each item
  - `filter()` — Filter items by condition
  - `reduce()` — Reduce to single value
  - `find()` — Find first match
  - `some()` / `every()` — Check conditions
  - `sort()` — Sort items
  - Chaining methods together
- **Promises**
  ```js
  const promise = new Promise((resolve, reject) => { ... });
  promise.then(result => ...).catch(error => ...);
  ```
- **Async / Await**
  ```js
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  ```
- **Modules (import / export)**
  ```js
  export const helper = () => { ... };
  import { helper } from './utils.js';
  ```
- **Error Handling** (`try`, `catch`, `finally`)

### លំហាត់ (Exercise)
- បង្កើត Array of Products ហើយប្រើ map, filter, reduce ដើម្បី:
  - បង្ហាញ Product Names ទាំងអស់
  - Filter Products ដែល Price > $50
  - គណនា Total Price
- សរសេរ Async Function ដែល Simulate API Call ដោយប្រើ setTimeout + Promise
- បង្កើត Module File ហើយ Import/Export Functions

---

## Lesson 13: DOM Manipulation

### គោលបំណង (Objectives)
- អាចប្រើ JavaScript ដើម្បីផ្លាស់ប្តូរ HTML/CSS
- យល់ដឹងពី Event Handling

### មាតិកា (Topics)
- **Selecting Elements**
  - `document.getElementById()`
  - `document.querySelector()` / `querySelectorAll()`
- **Modifying Elements**
  - `textContent`, `innerHTML`
  - `classList.add()`, `classList.remove()`, `classList.toggle()`
  - `style.property`
  - `setAttribute()`, `getAttribute()`
- **Creating & Removing Elements**
  - `document.createElement()`
  - `appendChild()`, `prepend()`, `remove()`
  - `insertAdjacentHTML()`
- **Events**
  - `addEventListener()`
  - Common Events: `click`, `submit`, `input`, `keydown`, `mouseover`
  - Event Object (`e.target`, `e.preventDefault()`)
  - Event Delegation
- **Local Storage**
  - `localStorage.setItem()`, `getItem()`, `removeItem()`
  - JSON.stringify() / JSON.parse()

### លំហាត់ (Exercise)
- បង្កើត Todo List (Add, Delete, Mark Complete)
- បង្កើត Dark/Light Mode Toggle
- បង្កើត Counter App (Increment, Decrement, Reset)
- រក្សាទុក Todo Data ក្នុង LocalStorage

---

## Lesson 14: Git & GitHub

### គោលបំណង (Objectives)
- អាចប្រើ Git សម្រាប់ Version Control
- អាចប្រើ GitHub សម្រាប់ រក្សាទុក Code Online

### មាតិកា (Topics)
- **Git ជាអ្វី? ហេតុអ្វីត្រូវប្រើ?**
- **Git មូលដ្ឋាន**
  - `git init` — ចាប់ផ្តើម Repository
  - `git status` — ពិនិត្យ Status
  - `git add .` — Stage Changes
  - `git commit -m "message"` — Commit Changes
  - `git log` — មើល History
- **Branches**
  - `git branch branch-name` — បង្កើត Branch
  - `git checkout branch-name` / `git switch branch-name`
  - `git merge branch-name` — Merge Branch
  - `git branch -d branch-name` — Delete Branch
- **GitHub**
  - បង្កើត GitHub Account
  - `git remote add origin URL`
  - `git push -u origin main`
  - `git pull origin main`
  - `git clone URL`
- **.gitignore** — Files ដែលមិនចង់ Track
- **README.md** — Project Documentation

### លំហាត់ (Exercise)
- ដាក់ Mini Project ពី Part 1 ឡើង GitHub
- បង្កើត Branch ថ្មី, ផ្លាស់ប្តូរ Code, Merge ត្រឡប់ main
- Clone Repository របស់គេម្នាក់ហើយ Explore

---

## Lesson 15: React មូលដ្ឋាន

### គោលបំណង (Objectives)
- យល់ដឹងពី React និង Component-Based Architecture
- អាចបង្កើត React App ដំបូង

### មាតិកា (Topics)
- **React ជាអ្វី? ហេតុអ្វីប្រើ React?**
  - SPA (Single Page Application)
  - Component-Based Architecture
  - Virtual DOM
- **Setup Project ជាមួយ Vite**
  ```bash
  npm create vite@latest my-app -- --template react
  cd my-app && npm install && npm run dev
  ```
- **Project Structure** (src, public, package.json)
- **JSX — JavaScript XML**
  - JSX Rules (single root, className, camelCase)
  - Expressions in JSX `{variable}`
- **Components**
  - Functional Components
  - Component Naming Convention (PascalCase)
  - Importing & Exporting Components
- **Props**
  - Passing Props to Components
  - Props Destructuring
  - Children Props
  - Default Props

### លំហាត់ (Exercise)
- បង្កើត React App ដំបូងជាមួយ Vite
- បង្កើត Components: Header, Footer, Card
- បង្កើត StudentCard Component ដែលទទួល Props (name, age, grade)
- Render List of Students ដោយប្រើ `.map()`

---

## Lesson 16: React State & Events

### គោលបំណង (Objectives)
- យល់ដឹងពី State Management ក្នុង React
- អាច Handle User Events

### មាតិកា (Topics)
- **useState Hook**
  ```jsx
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  ```
- **Updating State**
  - Simple updates: `setCount(5)`
  - Based on previous: `setCount(prev => prev + 1)`
  - Arrays: `setItems([...items, newItem])`
  - Objects: `setState({ ...state, key: value })`
- **Event Handling**
  - `onClick`, `onChange`, `onSubmit`
  - Event Handler Functions
- **Conditional Rendering**
  - `{condition && <Component />}`
  - `{condition ? <A /> : <B />}`
- **Lists & Keys**
  - Rendering lists with `.map()`
  - Key prop importance
- **Controlled Components** (Form inputs with state)

### លំហាត់ (Exercise)
- បង្កើត Counter App (Increment, Decrement, Reset)
- បង្កើត Todo App (Add, Delete, Toggle Complete)
- បង្កើត Login Form (Controlled Components)

---

## Lesson 17: React Hooks កម្រិតខ្ពស់

### គោលបំណង (Objectives)
- អាចប្រើ useEffect សម្រាប់ Side Effects
- យល់ដឹងពី Hooks ផ្សេងៗ

### មាតិកា (Topics)
- **useEffect**
  ```jsx
  // Run on every render
  useEffect(() => { ... });

  // Run once on mount
  useEffect(() => { ... }, []);

  // Run when dependency changes
  useEffect(() => { ... }, [value]);

  // Cleanup
  useEffect(() => {
    return () => { /* cleanup */ };
  }, []);
  ```
- **Common useEffect Patterns**
  - Fetching data on mount
  - Updating document title
  - Setting up event listeners
- **useRef**
  - Accessing DOM elements
  - Persisting values without re-render
- **useContext**
  - createContext, Provider, useContext
  - Avoiding Prop Drilling
- **Custom Hooks**
  - Why and when to create custom hooks
  - Example: `useLocalStorage`, `useToggle`

### លំហាត់ (Exercise)
- បង្កើត App ដែល Fetch Data ពី API ដោយប្រើ useEffect
- បង្កើត Theme Context (Dark/Light Mode) ដោយប្រើ useContext
- បង្កើត Custom Hook `useLocalStorage`

---

## Lesson 18: React Router

### គោលបំណង (Objectives)
- អាចបង្កើត Multi-Page Navigation ក្នុង React
- យល់ដឹងពី Client-Side Routing

### មាតិកា (Topics)
- **Install React Router**
  ```bash
  npm install react-router-dom
  ```
- **Basic Routing**
  ```jsx
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  ```
- **Navigation**
  - `<Link to="/path">` & `<NavLink>`
  - `useNavigate()` hook
- **Dynamic Routes & URL Parameters**
  - `<Route path="/users/:id" element={<UserDetail />} />`
  - `useParams()` hook
- **Nested Routes & Layout**
  - `<Outlet />` component
  - Shared Layout Pattern
- **Protected Routes** (concept intro)
  - Redirecting unauthenticated users

### លំហាត់ (Exercise)
- បង្កើត Multi-Page App (Home, About, Products, Contact)
- បង្កើត Product Detail Page ដោយប្រើ Dynamic Route (`/products/:id`)
- បង្កើត Layout ជាមួយ Navbar & Footer ដែលប្រើ Nested Routes

---

## Lesson 19: API Integration

### គោលបំណង (Objectives)
- អាចភ្ជាប់ React App ជាមួយ REST API
- Handle Loading, Error, and Success States

### មាតិកា (Topics)
- **Fetch API (Review)**
  ```js
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  ```
- **Axios** (Alternative)
  ```js
  import axios from 'axios';
  const { data } = await axios.get('/api/data');
  ```
- **API Integration Patterns in React**
  - Fetching on Component Mount
  - Loading State (`isLoading`)
  - Error Handling (`error`)
  - Displaying Data
- **HTTP Methods in Practice**
  - GET — Read data
  - POST — Create data
  - PUT/PATCH — Update data
  - DELETE — Delete data
- **Environment Variables**
  - `.env` file for API URLs
  - `import.meta.env.VITE_API_URL`
- **Public APIs សម្រាប់ Practice**
  - JSONPlaceholder
  - PokeAPI
  - OpenWeatherMap
  - TMDB (Movies)

### លំហាត់ (Exercise)
- បង្កើត Weather App (ស្វែងរក Weather តាម City Name)
- បង្កើត Movie Search App (ប្រើ TMDB API)
- បង្កើត User Directory (Fetch Users & Display Cards)

---

## Lesson 20: Frontend Project Workshop

### គោលបំណង (Objectives)
- បង្កើត Project ពេញលេញមួយដោយប្រើ Skills ទាំងអស់ពី Part 2
- Practice Project Planning & Execution

### មាតិកា (Topics)
- **Project Planning**
  - Wireframe / Sketch
  - Component Tree Planning
  - API Selection & Testing (Postman)
- **Build Session**
  - Setup Project (Vite + React + Tailwind)
  - Component Structure
  - Routing Setup
  - API Integration
  - State Management
- **Code Review & Refactoring**
  - Clean Code Practices
  - Component Reusability
  - File Organization

### Project Options (ជ្រើសរើស 1)
1. **Movie Explorer** — Search, Browse, Favorites (TMDB API)
2. **Recipe Finder** — Search Recipes, View Details (MealDB API)
3. **GitHub Profile Viewer** — Search Users, View Repos (GitHub API)
4. **News Reader** — Browse News by Category (NewsAPI)

### វាយតម្លៃ (Evaluation)
- [ ] React Components ច្បាស់លាស់ (Reusable)
- [ ] State Management ត្រឹមត្រូវ
- [ ] API Integration ដំណើរការល្អ
- [ ] Loading & Error States handled
- [ ] Routing ដំណើរការ (Multi-page)
- [ ] Responsive Design
- [ ] Code pushed to GitHub
