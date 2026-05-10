# Lesson 12: JavaScript ES6+ (Part 2)

> **Part:** 2 — Frontend Development
> **រយៈពេល:** 3-4 ម៉ោង
> **កម្រិត:** បានរៀន Lesson 11 រួច (Prerequisites: Arrow Functions, Destructuring, Spread/Rest)

---

## 🎯 គោលបំណង (Learning Objectives)

បន្ទាប់ពីរៀន Lesson នេះចប់ សិស្សនឹងអាច៖
1. ប្រើ **Higher-Order Array Methods** (`map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`)
2. ប្រើ **Method Chaining** ដើម្បី Manipulate Data ច្រើនជំហានក្នុងពេលតែមួយ
3. យល់ដឹងពី **Asynchronous JavaScript** និងភាពខុសគ្នារវាង Sync vs Async
4. បង្កើត និងប្រើ **Promises** (`then`, `catch`, `finally`, `Promise.all`)
5. សរសេរ Async Code ស្អាតៗដោយប្រើ **`async` / `await`**
6. បែងចែក Code ទៅក្នុង **Modules** ដោយប្រើ `import` / `export`
7. ប្រើ **`try / catch / finally`** សម្រាប់ Handle Errors

---

## 📖 ភាគមួយ (Part A) — Array Methods

ក្នុង JavaScript ទំនើប យើងកម្រប្រើ `for` Loop សុទ្ធដើម្បីធ្វើការជាមួយ Array។ ផ្ទុយទៅវិញ យើងប្រើ **Higher-Order Functions** ដែលងាយអាន និងងាយ Maintain។

> **💡 Higher-Order Function ជាអ្វី?** — Function ដែលទទួល Function ផ្សេងទៀតជា Argument ឬ Return Function។

---

### 1. `map()` — បំលែង Element នីមួយៗ

`map()` ដំណើរការ Function ទៅលើ Element នីមួយៗ ហើយ Return **Array ថ្មី** ដែលមានទំហំដូចគ្នា។

```js
const numbers = [1, 2, 3, 4, 5];

// ❌ បែបចាស់ — for loop
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// ✅ បែបថ្មី — map
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] — មិនប្រែ
```

#### ជាមួយ Object Array

```js
const products = [
  { name: "Book", price: 10 },
  { name: "Pen", price: 2 },
  { name: "Bag", price: 25 },
];

// ទាញតែ Names
const names = products.map(p => p.name);
console.log(names); // ["Book", "Pen", "Bag"]

// បន្ថែម Tax 10%
const withTax = products.map(p => ({
  ...p,
  priceWithTax: p.price * 1.1,
}));
```

> **⚠️ ចំណាំ:** `map()` តែងតែ Return Array ដែលមាន **ទំហំដូច Original**។ បើអ្នកមិនចង់ Return តម្លៃ ប្រើ `forEach()` វិញ។

---

### 2. `filter()` — ច្រោះ Elements

`filter()` Return **Array ថ្មី** ដែលមានតែ Elements ឆ្លងលក្ខខណ្ឌ។

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// តែលេខគូ
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8]

// តែលេខធំជាង 3
const big = numbers.filter(n => n > 3);
console.log(big); // [4, 5, 6, 7, 8]
```

#### Use Case ជាក់ស្តែង

```js
const students = [
  { name: "វិចិត្រ", score: 85 },
  { name: "សុភា", score: 45 },
  { name: "ដារា", score: 72 },
  { name: "រតនា", score: 90 },
];

// តែសិស្សជាប់ (score >= 50)
const passed = students.filter(s => s.score >= 50);
console.log(passed.length); // 3
```

---

### 3. `reduce()` — បង្រួម Array ទៅជា Value តែមួយ

`reduce()` ជា Method ដ៏មានឥទ្ធិពលបំផុត — អាច Sum, Group, Flatten និងផ្សេងៗទៀត។

```js
arr.reduce((accumulator, current) => newAccumulator, initialValue);
```

#### ឧទាហរណ៍ — Sum

```js
const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((sum, n) => sum + n, 0);
console.log(total); // 15
```

ដំណើរការ៖
| Step | accumulator | current | result |
|------|-------------|---------|--------|
| Start | 0 | — | — |
| 1 | 0 | 1 | 1 |
| 2 | 1 | 2 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 6 | 4 | 10 |
| 5 | 10 | 5 | 15 |

#### Use Case — Total Price

```js
const cart = [
  { name: "Book", price: 10, qty: 2 },
  { name: "Pen", price: 2, qty: 5 },
  { name: "Bag", price: 25, qty: 1 },
];

const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(total); // 55
```

#### Use Case — Group By

```js
const students = [
  { name: "វិចិត្រ", grade: "A" },
  { name: "សុភា", grade: "B" },
  { name: "ដារា", grade: "A" },
  { name: "រតនា", grade: "C" },
];

const grouped = students.reduce((acc, s) => {
  acc[s.grade] = acc[s.grade] || [];
  acc[s.grade].push(s.name);
  return acc;
}, {});

console.log(grouped);
// { A: ["វិចិត្រ", "ដារា"], B: ["សុភា"], C: ["រតនា"] }
```

---

### 4. `find()` & `findIndex()` — រកតែ Element ដំបូង

```js
const users = [
  { id: 1, name: "វិចិត្រ" },
  { id: 2, name: "សុភា" },
  { id: 3, name: "ដារា" },
];

// រក Element ដំបូងដែលត្រូវនឹងលក្ខខណ្ឌ
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "សុភា" }

// រក Index
const index = users.findIndex(u => u.id === 2);
console.log(index); // 1

// មិនរកឃើញ
const nope = users.find(u => u.id === 99);
console.log(nope); // undefined
```

> **💡 Filter vs Find:**
> - `filter()` → Return **Array** ទាំងអស់ដែលត្រូវ
> - `find()` → Return **Element តែ 1** ដំបូងគេ (ឬ `undefined`)

---

### 5. `some()` & `every()` — ពិនិត្យលក្ខខណ្ឌ

```js
const numbers = [1, 2, 3, 4, 5];

// some — យ៉ាងហោចណាស់ 1 ត្រូវ?
console.log(numbers.some(n => n > 3));  // true
console.log(numbers.some(n => n > 10)); // false

// every — ទាំងអស់ត្រូវ?
console.log(numbers.every(n => n > 0)); // true
console.log(numbers.every(n => n > 3)); // false
```

#### Use Case

```js
const cart = [
  { name: "Book", inStock: true },
  { name: "Pen", inStock: false },
];

const canCheckout = cart.every(item => item.inStock);
console.log(canCheckout); // false

const hasOutOfStock = cart.some(item => !item.inStock);
console.log(hasOutOfStock); // true
```

---

### 6. `sort()` — តម្រៀប

`sort()` តម្រៀប Array (ផ្លាស់ប្ដូរ Array ដើម!) ដោយ Default វាប្រៀបធៀបជា **String**។

```js
// ⚠️ Default — String comparison
const nums = [10, 1, 21, 2, 3];
nums.sort();
console.log(nums); // [1, 10, 2, 21, 3] ❌ មិនត្រឹមត្រូវ

// ✅ ត្រូវផ្ដល់ Compare Function
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 3, 10, 21]

// Descending
nums.sort((a, b) => b - a);
console.log(nums); // [21, 10, 3, 2, 1]
```

#### Sort Object Array

```js
const students = [
  { name: "វិចិត្រ", score: 85 },
  { name: "សុភា", score: 45 },
  { name: "ដារា", score: 72 },
];

// Sort by score (descending)
students.sort((a, b) => b.score - a.score);

// Sort by name (alphabetical)
students.sort((a, b) => a.name.localeCompare(b.name));
```

> **⚠️ ប្រយ័ត្ន:** `sort()` ផ្លាស់ប្ដូរ Array ដើម! បើមិនចង់ផ្លាស់ប្ដូរ ត្រូវ Copy មុន៖
> ```js
> const sorted = [...students].sort((a, b) => b.score - a.score);
> ```

---

### 7. Method Chaining — ភ្ជាប់ Methods

ពីព្រោះ `map`, `filter`, `sort` ទាំងអស់ Return Array យើងអាចភ្ជាប់ពួកវាបានដោយផ្ទាល់។

```js
const products = [
  { name: "Book", price: 10, category: "Education" },
  { name: "Pen", price: 2, category: "Education" },
  { name: "Bag", price: 25, category: "Fashion" },
  { name: "Shirt", price: 15, category: "Fashion" },
  { name: "Hat", price: 8, category: "Fashion" },
];

// រក Fashion Items តម្លៃ > $10 តម្រៀបពីច្រើនទៅតិច បង្ហាញតែ Names
const result = products
  .filter(p => p.category === "Fashion")
  .filter(p => p.price > 10)
  .sort((a, b) => b.price - a.price)
  .map(p => p.name);

console.log(result); // ["Bag", "Shirt"]
```

---

## 📖 ភាគទីពីរ (Part B) — Asynchronous JavaScript

### 8. Sync vs Async

**Synchronous Code** ដំណើរការមួយជំហានម្ដងៗ — Block រហូតបញ្ចប់។

```js
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3
```

**Asynchronous Code** អាចដំណើរការ "ខាងក្រោយ" ដោយមិន Block Code ផ្សេង។

```js
console.log("1");
setTimeout(() => console.log("2"), 1000); // 1 វិនាទីក្រោយ
console.log("3");
// Output: 1, 3, 2 (ព្រោះ 2 រង់ចាំ)
```

> **🔥 ហេតុអ្វីត្រូវការ Async?**
> - Fetch Data ពី API (បណ្ដាញយឺត)
> - Read/Write File
> - Database Queries
> - Animation, Timer
>
> បើ Block UI នឹងបាក់ — User មិនអាច Click អ្វីបានឡើយ!

---

### 9. Promises — សន្យាថា Data នឹងមកដល់

**Promise** គឺជា Object ដែលតំណាងឱ្យលទ្ធផលនៃប្រតិបត្តិការ Async។

Promise មាន 3 States៖
- **Pending** — កំពុងរង់ចាំ
- **Fulfilled** — ជោគជ័យ (`resolve`)
- **Rejected** — បរាជ័យ (`reject`)

#### បង្កើត Promise

```js
const fetchUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve({ name: "វិចិត្រ", age: 20 });
    } else {
      reject(new Error("បរាជ័យ!"));
    }
  }, 1000);
});
```

#### ប្រើ Promise — `.then()` / `.catch()` / `.finally()`

```js
fetchUser
  .then(user => {
    console.log("ជោគជ័យ:", user);
  })
  .catch(error => {
    console.error("បរាជ័យ:", error.message);
  })
  .finally(() => {
    console.log("Done (ដំណើរការទាំងពីរករណី)");
  });
```

#### Chaining Promises

```js
fetchUser
  .then(user => {
    console.log(user.name);
    return user.age; // Pass ទៅ then បន្ទាប់
  })
  .then(age => {
    console.log(`Age: ${age}`);
  })
  .catch(err => console.error(err));
```

---

### 10. `Promise.all()` — រង់ចាំច្រើនដំណាលគ្នា

ពេលអ្នកចង់ Run Promises ច្រើនដំណាលគ្នា ហើយរង់ចាំទាំងអស់ឱ្យចប់៖

```js
const p1 = fetch("/api/users");
const p2 = fetch("/api/products");
const p3 = fetch("/api/orders");

Promise.all([p1, p2, p3])
  .then(([users, products, orders]) => {
    console.log("ទាំងអស់ Done!");
  })
  .catch(err => console.error("មួយក្នុងចំណោមនេះបរាជ័យ:", err));
```

> **💡 ទាក់ទង:**
> - `Promise.all()` — រង់ចាំ **ទាំងអស់** (Fail Fast)
> - `Promise.allSettled()` — រង់ចាំទាំងអស់ មិនថា Success ឬ Fail
> - `Promise.race()` — យកលទ្ធផល **ដំបូងគេ** (មិនថា Resolve ឬ Reject)

---

### 11. `async` / `await` — សរសេរ Async ដូច Sync

`async/await` គឺជា "Syntactic Sugar" លើ Promises — ងាយអានជាង។

#### Syntax

```js
// បែប Promise
function getUser() {
  return fetch("/api/user")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// បែប async/await — អានដូច Sync!
async function getUser() {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

#### ច្បាប់សំខាន់

1. `await` ត្រូវប្រើ **ក្នុង `async` Function** ប៉ុណ្ណោះ
2. `async` Function តែងតែ Return **Promise**
3. ប្រើ `try/catch` សម្រាប់ Handle Error

```js
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return null;
  }
};

// ប្រើ
fetchData().then(data => console.log(data));

// ឬ
const data = await fetchData(); // ក្នុង async function ផ្សេងទៀត
```

#### Sequential vs Parallel

```js
// ❌ យឺត — រង់ចាំម្ដងមួយ
const user = await fetchUser();
const posts = await fetchPosts();
const comments = await fetchComments();
// Total time: t1 + t2 + t3

// ✅ លឿន — Run Parallel
const [user, posts, comments] = await Promise.all([
  fetchUser(),
  fetchPosts(),
  fetchComments(),
]);
// Total time: max(t1, t2, t3)
```

---

### 12. Error Handling — `try / catch / finally`

```js
try {
  // Code ដែលអាចមានបញ្ហា
  const data = JSON.parse(invalidJson);
} catch (error) {
  // ដំណើរការពេលមាន Error
  console.error("Parse failed:", error.message);
} finally {
  // ដំណើរការទាំងពីរករណី (ពេញចិត្ត ឬមិនពេញចិត្ត)
  console.log("Cleanup done");
}
```

#### Custom Error

```js
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("មិនអាចចែកនឹងលេខ 0!");
  }
  return a / b;
};

try {
  console.log(divide(10, 0));
} catch (err) {
  console.error(err.message); // មិនអាចចែកនឹងលេខ 0!
}
```

---

## 📖 ភាគទីបី (Part C) — Modules

### 13. ES Modules — `import` / `export`

ពេល Project ធំ យើងត្រូវបែងចែក Code ទៅក្នុង File ផ្សេងៗ។ **ES Modules** អនុញ្ញាតឱ្យយើង Share Code រវាង File។

#### Named Export

```js
// 📄 utils.js
export const PI = 3.14159;

export const add = (a, b) => a + b;

export function multiply(a, b) {
  return a * b;
}
```

```js
// 📄 main.js
import { PI, add, multiply } from "./utils.js";

console.log(PI);          // 3.14159
console.log(add(2, 3));   // 5
console.log(multiply(4, 5)); // 20
```

#### Rename ពេល Import

```js
import { add as sum, multiply as mul } from "./utils.js";

console.log(sum(2, 3));   // 5
console.log(mul(4, 5));   // 20
```

#### Import All

```js
import * as utils from "./utils.js";

console.log(utils.PI);
console.log(utils.add(2, 3));
```

#### Default Export

ម្នាក់ឯងក្នុង 1 File ប៉ុណ្ណោះ — សម្រាប់ Export "ចំបង"។

```js
// 📄 User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

// ឬ
export default function greet(name) {
  return `Hello ${name}`;
}
```

```js
// 📄 main.js
import User from "./User.js";        // គ្មាន {} សម្រាប់ default
import greet from "./greet.js";

// អាចដាក់ឈ្មោះអ្វីក៏បាន
import MyUser from "./User.js";
```

#### លាយ Default និង Named

```js
// 📄 api.js
export const BASE_URL = "https://api.example.com";

export const fetchUser = (id) => fetch(`${BASE_URL}/users/${id}`);

export default class ApiClient {
  // ...
}
```

```js
// 📄 main.js
import ApiClient, { BASE_URL, fetchUser } from "./api.js";
```

> **📝 ត្រូវចាំ:**
> - HTML ត្រូវដាក់ `type="module"`៖ `<script type="module" src="main.js"></script>`
> - File Path ត្រូវមាន `.js` Extension ច្បាស់
> - Modules ដំណើរការក្នុង **Strict Mode** ដោយ Default

---

## 💻 Code សំរាប់ Demo

```js
// =================================
// Lesson 12 Demo: Product Store API
// =================================

// --- 1. Mock Data ---
const products = [
  { id: 1, name: "Book",   price: 10, category: "Education", inStock: true  },
  { id: 2, name: "Pen",    price: 2,  category: "Education", inStock: true  },
  { id: 3, name: "Bag",    price: 25, category: "Fashion",   inStock: false },
  { id: 4, name: "Shirt",  price: 15, category: "Fashion",   inStock: true  },
  { id: 5, name: "Laptop", price: 800,category: "Electronic",inStock: true  },
];

// --- 2. Array Methods ---

// Map — ទាញតែឈ្មោះ
const names = products.map(p => p.name);
console.log("Names:", names);

// Filter — តែ Items ដែលមានស្តុក
const available = products.filter(p => p.inStock);
console.log("Available:", available.length);

// Reduce — សរុបតម្លៃ
const totalValue = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total Value:", totalValue);

// Find — រកតាម ID
const found = products.find(p => p.id === 3);
console.log("Found:", found?.name);

// Some / Every
console.log("មាន Out of Stock?", products.some(p => !p.inStock));
console.log("ទាំងអស់ < $1000?", products.every(p => p.price < 1000));

// --- 3. Method Chaining ---
const fashionPicks = products
  .filter(p => p.category === "Fashion")
  .filter(p => p.inStock)
  .sort((a, b) => b.price - a.price)
  .map(p => `${p.name} - $${p.price}`);

console.log("Fashion Picks:", fashionPicks);

// --- 4. Simulated API with Promise ---
const fetchProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      product ? resolve(product) : reject(new Error("Not found"));
    }, 500);
  });
};

// --- 5. Async / Await ---
const showProduct = async (id) => {
  try {
    console.log("កំពុងទាញ Product...");
    const product = await fetchProduct(id);
    console.log("បានទទួល:", product.name);
    return product;
  } catch (err) {
    console.error("បរាជ័យ:", err.message);
  } finally {
    console.log("Done");
  }
};

showProduct(1);
showProduct(99);

// --- 6. Promise.all — Parallel Fetch ---
const fetchMultiple = async (ids) => {
  try {
    const results = await Promise.all(ids.map(id => fetchProduct(id)));
    console.log("ទាំងអស់៖", results.map(r => r.name));
  } catch (err) {
    console.error("មួយណាមួយបរាជ័យ:", err.message);
  }
};

fetchMultiple([1, 2, 4]);

// --- 7. Reduce — Group by Category ---
const grouped = products.reduce((acc, p) => {
  acc[p.category] = acc[p.category] || [];
  acc[p.category].push(p.name);
  return acc;
}, {});

console.log("Grouped:", grouped);

// --- 8. Statistics with Reduce ---
const stats = products.reduce(
  (acc, p) => ({
    total: acc.total + p.price,
    count: acc.count + 1,
    max: Math.max(acc.max, p.price),
    min: Math.min(acc.min, p.price),
  }),
  { total: 0, count: 0, max: -Infinity, min: Infinity }
);

console.log("Stats:", {
  ...stats,
  average: stats.total / stats.count,
});
```

---

## 🏋️ លំហាត់ (Exercise)

### លំហាត់ 1: Array Methods Basics

ប្រើ Array ខាងក្រោម៖

```js
const products = [
  { name: "Book",   price: 10, qty: 3 },
  { name: "Pen",    price: 2,  qty: 10 },
  { name: "Laptop", price: 800,qty: 1 },
  { name: "Bag",    price: 25, qty: 2 },
  { name: "Shirt",  price: 15, qty: 5 },
];
```

ដោះស្រាយ៖
- [ ] បង្ហាញ Names ទាំងអស់ដោយប្រើ `map()`
- [ ] Filter Products ដែល `price > $50`
- [ ] គណនា Total Price ទាំងអស់ (price × qty) ដោយប្រើ `reduce()`
- [ ] រក Product ដែលមាន qty តិចបំផុត
- [ ] តម្រៀប Products តាម price ពីច្រើនទៅតិច

### លំហាត់ 2: Method Chaining

មាន Array សិស្ស៖

```js
const students = [
  { name: "វិចិត្រ", score: 85, active: true  },
  { name: "សុភា",   score: 45, active: true  },
  { name: "ដារា",   score: 72, active: false },
  { name: "រតនា",   score: 90, active: true  },
  { name: "សុខា",   score: 60, active: true  },
];
```

ដោយប្រើ Chaining៖
- [ ] យកសិស្ស **active** ដែលមាន score >= 60
- [ ] តម្រៀបពីច្រើនទៅតិច
- [ ] បង្ហាញជា String Array ទម្រង់ `"វិចិត្រ - 85"`

### លំហាត់ 3: Simulated API Call

បង្កើត Function `fetchUser(id)` ដែល៖
- [ ] Return Promise
- [ ] បន្ទាប់ពី 1 វិនាទី — Resolve ជាមួយ User Object បើ `id` ស្ថិតក្នុង Array
- [ ] Reject បើគ្មាន

```js
const users = [
  { id: 1, name: "វិចិត្រ" },
  { id: 2, name: "សុភា" },
];

// Test:
fetchUser(1).then(u => console.log(u.name)); // វិចិត្រ
fetchUser(99).catch(e => console.error(e.message));
```

### លំហាត់ 4: Async / Await

Convert Code ខាងក្រោមទៅជា `async/await` Syntax៖

```js
function getData() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      console.log(users.length);
      return users[0];
    })
    .then(user => fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`))
    .then(res => res.json())
    .then(user => console.log(user.name))
    .catch(err => console.error(err));
}
```

### លំហាត់ 5: Promise.all Practice

បង្កើត Function `fetchAllUsers(ids)` ដែល៖
- [ ] ទទួល Array of IDs
- [ ] Fetch ទាំងអស់ដំណាលគ្នា
- [ ] Return Array of Users
- [ ] Handle Error បើ ID ណាមួយបរាជ័យ

### លំហាត់ 6: Modules

បែងចែក Code ទៅក្នុង Files ផ្សេងគ្នា៖

**📄 math.js**
- Export `add`, `subtract`, `multiply`, `divide`

**📄 stringUtils.js**
- Export `capitalize(str)` — អក្សរធំដំបូង
- Export `reverse(str)`
- Default Export `slugify(str)` — `"Hello World"` → `"hello-world"`

**📄 main.js**
- Import ទាំងអស់និងប្រើវា

### លំហាត់ 7: Bonus — Mini Library System

បង្កើត **Library System** ដែលមាន៖

```js
const books = [
  { id: 1, title: "JS Basics",  author: "John", available: true  },
  { id: 2, title: "React Pro",  author: "Jane", available: false },
  { id: 3, title: "Node Magic", author: "John", available: true  },
];
```

- [ ] `findById(id)` — ប្រើ `find`
- [ ] `searchByAuthor(name)` — ប្រើ `filter`
- [ ] `borrowBook(id)` — Async Function (Simulated 1s) ដែល Update `available` ទៅ `false`
- [ ] `returnBook(id)` — Async Function ដែល Update `available` ទៅ `true`
- [ ] `getAvailable()` — Return Array of Available Books តម្រៀបតាម Title
- [ ] Error Handling ពេលមិនមាន Book

---

## 🧠 ចំណុចសំខាន់ (Key Takeaways)

1. **`map()`** — បំលែង Element នីមួយៗ → Array ទំហំដូចគ្នា
2. **`filter()`** — រក្សាតែ Elements ដែលឆ្លងលក្ខខណ្ឌ
3. **`reduce()`** — បង្រួម Array ទៅ Value តែ 1 (Sum, Group, etc.)
4. **`find()` vs `filter()`** — Find = តែ 1, Filter = ច្រើន
5. **Method Chaining** — ភ្ជាប់ Methods គ្នាដើម្បី Manipulate Data ច្រើនជំហាន
6. **Promises** — តំណាងលទ្ធផល Async (Pending → Fulfilled/Rejected)
7. **`async / await`** — ងាយអានជាង `.then()` Chaining — ត្រូវប្រើ `try/catch`
8. **`Promise.all()`** — Run Promises ច្រើនដំណាលគ្នាដើម្បីលឿនជាង
9. **`import / export`** — បែងចែក Code ក្នុង File តូចៗ — ងាយ Maintain
10. **Always Handle Errors** — `try/catch` ជាមួយ Async, `.catch()` ជាមួយ Promises

---

## 🔗 ធនធានបន្ថែម (Resources)

- [MDN — Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN — async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN — JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info — Promises, async/await](https://javascript.info/async)
- [JSONPlaceholder — Fake REST API](https://jsonplaceholder.typicode.com/) — សម្រាប់ Practice
- [PokeAPI](https://pokeapi.co/) — Public API ល្អៗ

---

> **Lesson បន្ទាប់:** Lesson 13 — DOM Manipulation: Selecting Elements, Events, LocalStorage
