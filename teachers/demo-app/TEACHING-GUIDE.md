# Teaching Guide — Lessons 16 · 18 · 19

Demo app សម្រាប់បង្រៀន ៣ មេរៀន៖ **React State & Events (L16)**, **React Router (L18)**, **API Integration (L19)**។

## Setup (មុនចាប់ផ្ដើមថ្នាក់)

```bash
cd teachers/demo-app
npm install          # រួចរាល់ហើយ (react-router-dom + axios)
cp .env.example .env # រួចរាល់ហើយ
npm run dev          # → http://localhost:5173
```

`.env` មាន `VITE_API_URL=https://jsonplaceholder.typicode.com` — គ្មាន API Key, ប្រើបានភ្លាម។
ប្ដូរ `.env` រួច ត្រូវ **Restart Dev Server**។

## Route Map

| Route | File | មេរៀន / Concept |
|---|---|---|
| `/` | [pages/Home.jsx](src/pages/Home.jsx) | Index នៃ Demo ទាំងអស់ |
| `/counter` | [CounterAppPage.jsx](src/CounterAppPage.jsx) | L16 · `useState` + `onClick` |
| `/todos` | [pages/Todos.jsx](src/pages/Todos.jsx) | L16 · Array State · `.map()` · `key` · Conditional |
| `/register` | [ResgisterForm.jsx](src/ResgisterForm.jsx) | L16 · Controlled Inputs · Show/Hide · Loading |
| `/products` | [pages/Products.jsx](src/pages/Products.jsx) | L18 · `Link` + Dynamic URL |
| `/products/:id` | [pages/ProductDetail.jsx](src/pages/ProductDetail.jsx) | L18 · `useParams()` · `useNavigate(-1)` |
| `/login` → `/dashboard` | [pages/Login.jsx](src/pages/Login.jsx) · [pages/Dashboard.jsx](src/pages/Dashboard.jsx) | L18 · `useNavigate()` · Protected Route |
| `/users` | [pages/Users.jsx](src/pages/Users.jsx) | L19 · `fetch` + 3 States + Retry |
| `/users/:id` | [pages/UserDetail.jsx](src/pages/UserDetail.jsx) | L19 · `useFetch` Custom Hook |
| `/create-post` | [pages/CreatePost.jsx](src/pages/CreatePost.jsx) | L19 · POST/DELETE · `fetch` ⟷ `axios` |
| ផ្សេងទៀត | [pages/NotFound.jsx](src/pages/NotFound.jsx) | L18 · `path="*"` |

Structure: [components/Layout.jsx](src/components/Layout.jsx) (Navbar + `<Outlet />` + Footer) · [components/ProtectedRoute.jsx](src/components/ProtectedRoute.jsx) · [hooks/useFetch.js](src/hooks/useFetch.js) · [auth.js](src/auth.js)

## Lesson 16 — State & Events

**លំដាប់បង្ហាញ**
1. `/counter` — `useState(0)` → បង្ហាញ Re-render។ ដាក់ `console.log(counter)` ក្រោម `setCounter(...)` ភ្លាមៗ → នៅឃើញ **Value ចាស់** (Slide 6)។
2. ប្ដូរ `setCounter(counter + 1)` → `setCounter(p => p + 1)` ហើយចុចលឿនៗ → ពន្យល់ Previous-based Update (Slide 10)។
3. `/todos` — Array State ៣ Pattern: Add `[...todos, x]` · Toggle `.map()` · Delete `.filter()`។
4. **Live-code Demo:** លុប `key={todo.id}` ក្នុង [TodoList.jsx](src/components/TodoList.jsx) → បង្ហាញ Warning ក្នុង Console។
5. `/register` — Controlled Input, `e.target.value`, `e.preventDefault()`, Conditional (`showPassword ? "text" : "password"`)។

**Live-code ចេតនាធ្វើឲ្យខុស (Common Mistakes)**
- `onClick={setCounter(counter+1)}` (គ្មាន Arrow) → Infinite Re-render។
- `todos.push(x)` ជំនួស Spread → UI មិន Update។
- `<input value={x} />` គ្មាន `onChange` → Input Readonly + React Warning។

## Lesson 18 — React Router

**លំដាប់បង្ហាញ**
1. បើក [main.jsx](src/main.jsx) — `<BrowserRouter>` ដាក់តែម្ដងគត់ នៅ Root។
2. [App.jsx](src/App.jsx) — `<Routes>` / `<Route>`, Nested Route ក្រោម `<Route path="/" element={<Layout />}>`, `index`, `:id`, `*`។
3. [Layout.jsx](src/components/Layout.jsx) — `<Outlet />` ជាកន្លែង Child Render។ Navbar/Footer សរសេរតែម្ដង។
4. `/products` → ចុច Item → `/products/1` — បង្ហាញ **Network Tab: គ្មាន Request ថ្មី** (SPA, Slide 4)។
5. **Live-code Demo:** ប្ដូរ `<Link to="/products">` ក្នុង Home ទៅជា `<a href="/products">` → បង្ហាញ Page Flash + Reload។ រួច Undo។
6. `/products/:id` — `useParams()` ជា **String**, ត្រូវ `Number(id)`។ សាកបើក `/products/999` → បង្ហាញ Not Found។
7. `useNavigate()` — ប៊ូតុង Back ក្នុង ProductDetail (`navigate(-1)`), និង Login (`navigate('/dashboard')`)។
8. ចុច **Dashboard 🔒** ពេលមិនទាន់ Login → Redirect ទៅ `/login` (`<Navigate replace />`)។ Login រួច → ចូលបាន។
9. វាយ URL ខុស (`/xyz`) → 404 Page។

## Lesson 19 — API Integration

**លំដាប់បង្ហាញ**
1. បើក `https://jsonplaceholder.typicode.com/users` ក្នុង Browser មុន → បង្ហាញ JSON ឆៅ (Slide 15 Tip)។
2. `/users` — [Users.jsx](src/pages/Users.jsx) ជា Pattern ស្តង់ដារ: `useState` ×3 + `useEffect(..., [])` + `try/catch/finally`។
3. **Network Throttling (Slow 3G)** ក្នុង DevTools → បង្ហាញ Loading State ពិតប្រាកដ។
4. **Live-code Demo — Error State:** ប្ដូរ `${API_URL}/users` → `${API_URL}/userz` → បង្ហាញថា `fetch` **មិន** throw លើ 404 (បើគ្មាន `res.ok`) → ចង្អុល `if (!res.ok) throw` → ចុច **Retry**។
5. **Empty State:** ប្ដូរ `setUsers(data)` → `setUsers([])` → Empty ≠ Error។
6. `/users/1` — [UserDetail.jsx](src/pages/UserDetail.jsx) ប្រើ `useFetch` — Logic ដូចគ្នា សរសេរម្ដងប្រើឡើងវិញ។ ចង្អុល Dependency `[url]` → ប្ដូរ URL ទៅ `/users/2` → Fetch ឡើងវិញ។
7. `/create-post` — POST ដោយ `fetch` (ត្រូវ `headers` + `JSON.stringify`) រួច Switch Radio ទៅ `axios` (ខ្លីជាង, គ្មាន `.json()`)។ បង្ហាញ Network Tab: Status **201 Created**។ ចុច DELETE → 200។
8. `.env` — ចង្អុល `import.meta.env.VITE_API_URL`, Prefix `VITE_` ចាំបាច់, `.env` នៅក្នុង `.gitignore`, Secret ពិត ត្រូវទុក Backend។

**ចំណុចត្រូវសង្កត់**
- `useEffect(async () => ...)` ខុស — សរសេរ `async function` ខាងក្នុងរួចហៅវា។
- `finally` ជាកន្លែងបិទ Loading ជានិច្ច (ទោះ Error ក៏បិទ)។
- `useFetch` មាន `AbortController` — Cancel Request ចាស់ពេល `url` ប្ដូរ។
- ក្នុង Network Tab នឹងឃើញ Request **ពីរដង** — ព្រោះ `<StrictMode>` រត់ Effect ២ដងក្នុង Dev ប៉ុណ្ណោះ (Production មិនដូច្នេះទេ)។

## Exercises (ចែកសិស្ស)

- **L16:** Character Counter · Shopping Cart (Add/Remove + `reduce` Total)
- **L18:** បន្ថែម `/about` និង `/contact` · NavLink Active Style ខ្លួនឯង
- **L19:** Posts List (`/posts`) ដោយ `useFetch` · Weather App (OpenWeatherMap + API Key ក្នុង `.env`)

## Troubleshooting

| បញ្ហា | ដំណោះស្រាយ |
|---|---|
| `import.meta.env.VITE_API_URL` = `undefined` | `.env` នៅ Root នៃ Project · Prefix `VITE_` · Restart `npm run dev` |
| Port 5173 ជាប់ | `npm run dev -- --port 5174` |
| `useNavigate` Error | Component ត្រូវនៅខាងក្នុង `<BrowserRouter>` |
| API ដាច់ Internet | បង្ហាញ Error State ជា Demo មែនទែន 😄 ឬប្រើ `src/data/products.js` ជា Data ក្នុង Local |
