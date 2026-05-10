# Lesson 13: DOM Manipulation

> **Part:** 2 — Frontend Development
> **រយៈពេល:** 3-4 ម៉ោង
> **កម្រិត:** បានរៀន Lesson 11 & 12 រួច (Prerequisites: ES6+, Array Methods, Async/Await)

---

## 🎯 គោលបំណង (Learning Objectives)

បន្ទាប់ពីរៀន Lesson នេះចប់ សិស្សនឹងអាច៖
1. យល់ និងពន្យល់ពី **DOM (Document Object Model)** ជាអ្វី
2. ប្រើ **Selectors** ដើម្បីរក HTML Elements ក្នុង Page
3. **Modify** Element Content, Attributes, និង Styles ដោយ JavaScript
4. **Create**, **Append**, និង **Remove** Elements ដោយ Dynamic
5. ប្រើ **Events** ដើម្បី Handle User Interactions
6. រក្សាទុក Data ក្នុង **LocalStorage** និង Read ត្រឡប់មកវិញ
7. បង្កើត Interactive Web App ដូចជា Todo List, Counter, Theme Toggle

---

## 📖 DOM ជាអ្វី?

**DOM** = **D**ocument **O**bject **M**odel

ពេល Browser ផ្ទុក HTML File វាបង្កើត **Tree Structure** នៃ Objects ដែលតំណាងឱ្យ Elements ទាំងអស់ក្នុង Page។ Tree នេះហៅថា **DOM Tree**។

```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── h1
        ├── div
        │   ├── p
        │   └── button
        └── footer
```

JavaScript អាចប្រើ DOM ដើម្បី៖
- **អាន** Content និង Attributes
- **ផ្លាស់ប្ដូរ** Text, HTML, Style
- **បង្កើត** Element ថ្មី
- **លុប** Element ចេញ
- **ស្ដាប់** Events (Click, Input, Submit...)

> **💡 Document Object** គឺជា Entry Point — យើងតែងតែចាប់ផ្ដើមពី `document` ដើម្បី Access DOM។

---

## 📚 មាតិកាលម្អិត (Detailed Content)

---

### 1. Selecting Elements — ការរើស Elements

មុនពេលផ្លាស់ប្ដូរ Element យើងត្រូវ **រក** វាសិន។ JavaScript ផ្ដល់ Methods ច្រើនសម្រាប់ការនេះ។

#### `getElementById()` — រកដោយ ID

```html
<h1 id="title">Welcome</h1>
```

```js
const title = document.getElementById("title");
console.log(title); // <h1 id="title">Welcome</h1>
console.log(title.textContent); // "Welcome"
```

> **ចំណាំ:** `getElementById` យក String ID **ដោយគ្មាន `#`**។

#### `querySelector()` — រកដោយ CSS Selector (Element ដំបូង)

ងាយស្រួល និងអាចប្រើ Selector ដូច CSS៖

```html
<h1 class="heading">Title 1</h1>
<h2 class="heading">Title 2</h2>
<p class="text">Paragraph</p>
```

```js
// រកដោយ Class
const heading = document.querySelector(".heading");
console.log(heading.textContent); // "Title 1" (តែ Element ដំបូង!)

// រកដោយ Tag
const para = document.querySelector("p");

// រកដោយ ID
const title = document.querySelector("#title");

// Selector ស្មុគស្មាញ
const nav = document.querySelector("header > nav");
const firstLi = document.querySelector("ul li:first-child");
```

#### `querySelectorAll()` — រកទាំងអស់ (NodeList)

```js
// រក Elements ទាំងអស់ដែលមាន class="heading"
const headings = document.querySelectorAll(".heading");

console.log(headings.length); // 2

// Loop តាមរយៈ NodeList
headings.forEach((h) => {
  console.log(h.textContent);
});

// បង្វែរ NodeList ទៅ Array
const arr = [...headings];
arr.map((h) => h.textContent);
```

#### តារាងសង្ខេប

| Method | Return | Use Case |
|--------|--------|----------|
| `getElementById("id")` | Element តែ 1 | រកតាម ID លឿនបំផុត |
| `querySelector("...")` | Element ដំបូង | រកតាម CSS Selector |
| `querySelectorAll("...")` | NodeList ទាំងអស់ | រក Elements ច្រើន |

> **💡 Recommendation:** ប្រើ `querySelector` / `querySelectorAll` ឱ្យបានច្រើនព្រោះវា Flexible ជាង។

---

### 2. Modifying Elements — ការផ្លាស់ប្ដូរ

#### Text Content — `textContent` vs `innerHTML`

```html
<div id="box">Hello <b>World</b></div>
```

```js
const box = document.querySelector("#box");

// textContent — យកតែ Text (មិន Parse HTML)
console.log(box.textContent); // "Hello World"

// innerHTML — រួម HTML Tags
console.log(box.innerHTML); // "Hello <b>World</b>"

// កំណត់ Text ថ្មី
box.textContent = "Hi there!";

// កំណត់ HTML ថ្មី
box.innerHTML = "<i>Hello again</i>";
```

> **⚠️ សុវត្ថិភាព:** ប្រើ `textContent` ឱ្យបានច្រើន។ កុំប្រើ `innerHTML` ជាមួយ User Input ព្រោះអាចបង្កើត **XSS Attack**!

#### CSS Classes — `classList`

```html
<div id="card" class="card">Box</div>
```

```js
const card = document.querySelector("#card");

// បន្ថែម Class
card.classList.add("active");
// <div id="card" class="card active">

// លុប Class
card.classList.remove("card");
// <div id="card" class="active">

// Toggle (មានហើយលុប, គ្មានហើយដាក់)
card.classList.toggle("dark");

// ពិនិត្យ
console.log(card.classList.contains("active")); // true

// បន្ថែម / លុប ច្រើនព្រមគ្នា
card.classList.add("big", "blue", "rounded");
```

#### Inline Styles — `style.property`

```js
const box = document.querySelector("#box");

box.style.color = "red";
box.style.backgroundColor = "yellow";  // camelCase!
box.style.fontSize = "20px";
box.style.padding = "10px";
box.style.border = "2px solid black";
```

> **ចំណាំ:** CSS Properties ដែលមាន `-` (ដូច `background-color`) ត្រូវសរសេរជា **camelCase** ក្នុង JS (`backgroundColor`)។

> **💡 Best Practice:** ប្រើ `classList` ជាមួយ CSS Classes ជំនួសការ Style ដោយផ្ទាល់ — Code ស្អាតជាង។

#### Attributes — `setAttribute()`, `getAttribute()`

```html
<img id="photo" src="cat.jpg" alt="Cat">
<a id="link" href="#">Click</a>
```

```js
const img = document.querySelector("#photo");

// Get
console.log(img.getAttribute("src")); // "cat.jpg"
console.log(img.alt);                  // "Cat" (Direct Property)

// Set
img.setAttribute("src", "dog.jpg");
img.alt = "Dog";

// Remove
img.removeAttribute("alt");

// Check
console.log(img.hasAttribute("src")); // true

// Custom data-* attributes
const link = document.querySelector("#link");
link.dataset.userId = "123";  // <a data-user-id="123">
console.log(link.dataset.userId); // "123"
```

#### Form Inputs — `value`

```html
<input id="username" type="text">
<input id="agree" type="checkbox">
```

```js
const input = document.querySelector("#username");

// Read
console.log(input.value);

// Write
input.value = "វិចិត្រ";

// Checkbox
const check = document.querySelector("#agree");
console.log(check.checked); // true / false
check.checked = true;
```

---

### 3. Creating & Removing Elements — បង្កើត / លុប Elements

#### `createElement()` — បង្កើត Element ថ្មី

```js
// បង្កើត <div> ថ្មី
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
newDiv.classList.add("box");
newDiv.id = "newBox";

// បន្ថែមចូល Page
document.body.appendChild(newDiv);
```

#### `appendChild()`, `prepend()`, `append()`

```html
<ul id="list">
  <li>Item 1</li>
</ul>
```

```js
const list = document.querySelector("#list");

// បង្កើត <li> ថ្មី
const newItem = document.createElement("li");
newItem.textContent = "New Item";

// បន្ថែមនៅខាងចុង
list.appendChild(newItem);

// បន្ថែមនៅខាងមុខ
const firstItem = document.createElement("li");
firstItem.textContent = "First!";
list.prepend(firstItem);

// append() — អាចទទួលច្រើន (Modern)
list.append("Plain Text", document.createElement("li"));
```

#### `insertAdjacentHTML()` — បញ្ចូល HTML រហ័ស

```html
<div id="container">
  <p>Original</p>
</div>
```

```js
const container = document.querySelector("#container");

container.insertAdjacentHTML("beforebegin", "<h1>Before Container</h1>");
container.insertAdjacentHTML("afterbegin", "<p>Top of Container</p>");
container.insertAdjacentHTML("beforeend", "<p>Bottom of Container</p>");
container.insertAdjacentHTML("afterend", "<footer>After Container</footer>");
```

**Position Diagram:**
```
beforebegin → <div>
afterbegin →   ...
                ...content...
beforeend →    ...
              </div>
afterend  →
```

#### `remove()` — លុប Element

```js
const box = document.querySelector("#box");
box.remove(); // លុបខ្លួនវាចេញ

// ឬប្រើ Parent
const parent = document.querySelector("#list");
const child = parent.querySelector("li");
parent.removeChild(child);
```

#### `cloneNode()` — Clone Element

```js
const original = document.querySelector("#card");
const clone = original.cloneNode(true); // true = ជាមួយ Children

clone.id = "card-clone";
document.body.appendChild(clone);
```

---

### 4. Events — User Interactions

**Event** គឺជា **សកម្មភាព** ដែល User ឬ Browser ធ្វើ — Click, Type, Scroll, Load។ យើងសរសេរ **Event Handler** ដើម្បី Respond ទៅសកម្មភាពនោះ។

#### `addEventListener()`

```html
<button id="btn">Click Me</button>
```

```js
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});

// ឬ Function ដាច់ឡែក
function handleClick() {
  alert("Hello!");
}
btn.addEventListener("click", handleClick);
```

#### Common Events

| Event | Trigger ពេល |
|-------|-------------|
| `click` | User ចុច Element |
| `dblclick` | Double Click |
| `mouseover` / `mouseout` | Mouse Enter/Leave |
| `keydown` / `keyup` | ចុច / លែង Keyboard Key |
| `input` | Input Value ផ្លាស់ប្ដូរ (រាល់តួអក្សរ) |
| `change` | Input Value ផ្លាស់ប្ដូរ និង Lose Focus |
| `submit` | Form Submit |
| `focus` / `blur` | Element Focus / Lose Focus |
| `load` | Page ឬ Image ផ្ទុករួច |
| `scroll` | User Scroll |

#### Event Object — `e`

រាល់ Event Handler ទទួល **Event Object** (តែង Name `e` ឬ `event`)។

```js
btn.addEventListener("click", (e) => {
  console.log(e.target);     // Element ដែលត្រូវ Click
  console.log(e.type);       // "click"
  console.log(e.clientX, e.clientY); // Mouse Position
});
```

#### `e.preventDefault()` — បង្ខំឱ្យឈប់ Default Behavior

```html
<form id="form">
  <input type="text" name="name">
  <button type="submit">Send</button>
</form>
```

```js
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // ឈប់ Reload Page!

  const formData = new FormData(form);
  console.log(formData.get("name"));
});
```

#### Keyboard Events

```js
document.addEventListener("keydown", (e) => {
  console.log(e.key);     // "Enter", "a", "ArrowUp"...
  console.log(e.code);    // "Enter", "KeyA", "ArrowUp"
  console.log(e.ctrlKey); // true ពេល Ctrl ត្រូវចុចព្រមគ្នា

  if (e.key === "Enter") {
    console.log("Enter pressed!");
  }

  // Shortcut: Ctrl+S
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    console.log("Save!");
  }
});
```

#### Input Events

```html
<input id="search" placeholder="Type to search...">
<p id="output"></p>
```

```js
const input = document.querySelector("#search");
const output = document.querySelector("#output");

input.addEventListener("input", (e) => {
  output.textContent = `You typed: ${e.target.value}`;
});
```

#### Event Delegation — Performance Tip

ជំនួសការដាក់ Listener លើ Element និមួយៗ យើងដាក់លើ **Parent** តែមួយ ហើយប្រើ `e.target`៖

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```js
const list = document.querySelector("#list");

// ❌ បែបធម្មតា — ដាក់ Listener លើ <li> និមួយៗ
document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => console.log(li.textContent));
});

// ✅ Event Delegation — ដាក់តែមួយលើ <ul>
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

> **💡 ប្រយោជន៍:** ប្រើ Memory តិច + Works សម្រាប់ Element ដែលបន្ថែមថ្មីៗបន្ទាប់!

#### `removeEventListener()`

```js
function handleClick() {
  console.log("Clicked!");
}

btn.addEventListener("click", handleClick);

// លុប Listener
btn.removeEventListener("click", handleClick);
```

> **⚠️ ចំណាំ:** ត្រូវប្រើ Function Reference ដូចគ្នា — Inline Arrow Function លុបមិនបាន។

---

### 5. LocalStorage — រក្សាទុក Data ក្នុង Browser

**LocalStorage** អនុញ្ញាតឱ្យយើងរក្សាទុក Data **ដោយមិនបាត់** ពេល User បិទ Browser។

#### មូលដ្ឋាន

```js
// Save
localStorage.setItem("username", "វិចិត្រ");

// Read
const name = localStorage.getItem("username");
console.log(name); // "វិចិត្រ"

// Remove
localStorage.removeItem("username");

// Clear All
localStorage.clear();
```

> **⚠️ Limitation:** LocalStorage រក្សាបាន **String ប៉ុណ្ណោះ** — មិនអាចរក្សា Object ឬ Array ដោយផ្ទាល់ទេ។

#### រក្សា Object / Array — JSON

```js
const user = {
  name: "វិចិត្រ",
  age: 20,
  skills: ["HTML", "CSS"]
};

// Save — បង្វែរទៅ String មុន
localStorage.setItem("user", JSON.stringify(user));

// Read — Parse ត្រឡប់ទៅ Object
const stored = JSON.parse(localStorage.getItem("user"));
console.log(stored.name); // "វិចិត្រ"
```

#### Helper Functions

```js
const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const loadData = (key, defaultValue = null) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

// Usage
saveData("todos", [{ text: "Learn JS", done: false }]);
const todos = loadData("todos", []);
```

#### LocalStorage vs SessionStorage

| | LocalStorage | SessionStorage |
|-|--------------|----------------|
| Persistence | រហូតលុប | រហូតបិទ Tab |
| Scope | Domain ទាំងមូល | Tab ប៉ុណ្ណោះ |
| Size Limit | ~5-10 MB | ~5-10 MB |
| Use Case | User Preferences, Cache | Temporary Data |

> **⚠️ Security:** កុំរក្សា Password, Token សំខាន់ៗក្នុង LocalStorage ព្រោះវាអាចត្រូវ JS Read បាន (XSS Risk)។

---

## 💻 Code សំរាប់ Demo — Mini Todo App

```html
<!DOCTYPE html>
<html>
<head>
  <title>Todo App</title>
  <style>
    body { font-family: sans-serif; max-width: 500px; margin: 2rem auto; padding: 1rem; }
    .todo { display: flex; align-items: center; padding: 0.5rem; border-bottom: 1px solid #eee; }
    .todo.done span { text-decoration: line-through; color: #999; }
    .todo button { margin-left: auto; }
    input[type="text"] { padding: 0.5rem; width: 70%; }
  </style>
</head>
<body>
  <h1>📝 My Todos</h1>

  <form id="todoForm">
    <input type="text" id="todoInput" placeholder="Add new todo..." required>
    <button type="submit">Add</button>
  </form>

  <ul id="todoList"></ul>
  <p id="counter"></p>

  <script>
    // --- 1. Selectors ---
    const form = document.querySelector("#todoForm");
    const input = document.querySelector("#todoInput");
    const list = document.querySelector("#todoList");
    const counter = document.querySelector("#counter");

    // --- 2. State ---
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // --- 3. Render Function ---
    const render = () => {
      list.innerHTML = ""; // Clear

      todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.className = `todo ${todo.done ? "done" : ""}`;
        li.innerHTML = `
          <input type="checkbox" ${todo.done ? "checked" : ""} data-index="${index}">
          <span>${todo.text}</span>
          <button data-index="${index}">❌</button>
        `;
        list.appendChild(li);
      });

      // Counter
      const remaining = todos.filter(t => !t.done).length;
      counter.textContent = `${remaining} todo(s) remaining`;

      // Save
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    // --- 4. Add Todo (Form Submit) ---
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      todos.push({ text, done: false });
      input.value = "";
      render();
    });

    // --- 5. Event Delegation: Toggle / Delete ---
    list.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      if (index === undefined) return;

      if (e.target.tagName === "BUTTON") {
        // Delete
        todos.splice(index, 1);
      } else if (e.target.type === "checkbox") {
        // Toggle
        todos[index].done = e.target.checked;
      }
      render();
    });

    // --- 6. Initial Render ---
    render();
  </script>
</body>
</html>
```

---

## 🏋️ លំហាត់ (Exercise)

### លំហាត់ 1: Counter App

បង្កើត Counter App ដែលមាន៖
- [ ] Display Number (ចាប់ផ្ដើមពី 0)
- [ ] Button **Increment** (+1)
- [ ] Button **Decrement** (-1)
- [ ] Button **Reset** (បង្វិលទៅ 0)
- [ ] បង្ហាញពណ៌ខៀវពេលលេខវិជ្ជមាន, ក្រហមពេលអវិជ្ជមាន

### លំហាត់ 2: Dark/Light Mode Toggle

បង្កើត Page ដែលមាន៖
- [ ] Button "Toggle Theme"
- [ ] ពេលចុច ផ្លាស់ប្ដូរ Background និង Text Color
- [ ] **Bonus:** រក្សា Theme Choice ក្នុង LocalStorage (User បិទ Browser រួចបើកវិញ Theme នៅដដែល)

```css
.dark { background: #222; color: white; }
.light { background: white; color: black; }
```

### លំហាត់ 3: Live Character Counter

បង្កើត Textarea ដែល៖
- [ ] បង្ហាញចំនួន Characters ដែលបាន Type ខាងក្រោម
- [ ] ប្ដូរពណ៌ក្រហមពេលលើស 100 Characters

```html
<textarea id="text" rows="5" cols="40"></textarea>
<p id="count">0 / 100</p>
```

### លំហាត់ 4: Todo List ពេញលេញ

បង្ហើយ Todo App ខាងលើ បន្ថែម Features៖
- [ ] **Edit Todo** (ចុច Double-click ដើម្បី Edit)
- [ ] **Filter:** All / Active / Completed
- [ ] **Clear Completed** Button
- [ ] **Drag & Drop** ដើម្បី Reorder (Bonus 🌟)

### លំហាត់ 5: Image Gallery

បង្កើត Gallery ដែលមាន៖
- [ ] បង្ហាញ Images 6+ ជា Grid
- [ ] ពេលចុច Image — ពង្រីកជា Modal
- [ ] Button **Close** ឬចុចខាងក្រៅដើម្បីបិទ Modal
- [ ] Buttons **Prev** / **Next** ដើម្បីប្ដូរ Image ក្នុង Modal

### លំហាត់ 6: Bonus — Quiz App

បង្កើត Quiz App ដោយមាន៖
- [ ] Array of Questions (មាន 5+ សំណួរ)
- [ ] បង្ហាញ Question និង Multiple Choice Options
- [ ] User ជ្រើសរើស → ពិនិត្យត្រឹមត្រូវ → ផ្លាស់ទៅសំណួរបន្ទាប់
- [ ] បង្ហាញ Score នៅខាងចុង
- [ ] រក្សា High Score ក្នុង LocalStorage

```js
const questions = [
  {
    q: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Manager", "Display Order Method"],
    answer: 0
  },
  // ...
];
```

---

## 🧠 ចំណុចសំខាន់ (Key Takeaways)

1. **DOM** គឺជា Tree នៃ Objects ដែល Browser បង្កើតពី HTML — JS អាច Read/Write វាបាន
2. **Selectors** ប្រើ `querySelector` (ដំបូង) និង `querySelectorAll` (ទាំងអស់) ជាមួយ CSS Syntax
3. **`textContent`** សុវត្ថិភាពជាង **`innerHTML`** — `innerHTML` មាន XSS Risk
4. **`classList`** គឺជាវិធីល្អបំផុតដើម្បីប្ដូរ CSS — ប្រើ Methods `add`, `remove`, `toggle`
5. **`createElement()` + `appendChild()`** — Pattern មូលដ្ឋានសម្រាប់បង្កើត Element ថ្មី
6. **Events** ប្រើ `addEventListener(type, handler)` — Handler ទទួល Event Object
7. **`e.preventDefault()`** ឈប់ Default Behavior (Form Submit, Link Click)
8. **Event Delegation** ដាក់ Listener លើ Parent ជំនួស Children — Performance + Dynamic Elements
9. **LocalStorage** ប្រើ `setItem` / `getItem` — រក្សា Object ត្រូវ `JSON.stringify`/`JSON.parse`
10. ត្រូវ **Render** ឡើងវិញ ពេល Data ផ្លាស់ប្ដូរ — នេះជាគំនិតមូលដ្ឋានដែលនាំទៅ React!

---

## 🔗 ធនធានបន្ថែម (Resources)

- [MDN — Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN — querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN — addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN — Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [JavaScript.info — DOM](https://javascript.info/document)
- [JavaScript.info — Events](https://javascript.info/events)

---

> **Lesson បន្ទាប់:** Lesson 14 — Git & GitHub: Version Control, Branches, GitHub Workflow
