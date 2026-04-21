# Lesson 11: JavaScript ES6+ (Part 1)

> **Part:** 2 — Frontend Development
> **រយៈពេល:** 2-3 ម៉ោង
> **កម្រិត:** បានរៀន Lesson 10 រួច (Prerequisites: Functions, Arrays, Objects)

---

## 🎯 គោលបំណង (Learning Objectives)

បន្ទាប់ពីរៀន Lesson នេះចប់ សិស្សនឹងអាច៖
1. យល់ និងប្រើ **Arrow Functions** ជំនួស Function Declaration
2. ប្រើ **Template Literals** សម្រាប់ផ្សំ String ងាយស្រួល
3. ប្រើ **Destructuring** ដើម្បីទាញ Data ពី Objects និង Arrays
4. ប្រើ **Spread** និង **Rest** Operators សម្រាប់ Array/Object
5. ប្រើ **Short-circuit**, **Optional Chaining**, និង **Ternary** សម្រាប់សរសេរ Code ខ្លី

---

## 📖 ES6+ ជាអ្វី?

**ES6** (ECMAScript 2015) គឺជា Version ធំមួយនៃ JavaScript ដែលបាននាំយកមក Syntax ថ្មីៗច្រើន ដើម្បី៖
- សរសេរ Code **ខ្លី** និង **ច្បាស់** ជាង
- កាត់បន្ថយ Bug ដែលកើតចេញពី Syntax ចាស់
- គាំទ្រ Modern Features (Modules, Promises, Classes...)

> **💡 ES6+ = ES2015 + Version ថ្មីៗបន្ទាប់** (ES2016, ES2017, ... ES2024)
> Browsers ទំនើបទាំងអស់ គាំទ្រ ES6+ ហើយ។

---

## 📚 មាតិកាលម្អិត (Detailed Content)

---

### 1. Arrow Functions — មុខងារកាច់ព្រួញ

**Arrow Function** គឺជារបៀបថ្មីក្នុងការសរសេរ Function ដែលខ្លីជាង និងមានលក្ខណៈពិសេសខ្លះៗ។

#### Syntax មូលដ្ឋាន

```js
// ❌ បែបចាស់ — Function Declaration
function add(a, b) {
  return a + b;
}

// ✅ បែបថ្មី — Arrow Function
const add = (a, b) => {
  return a + b;
};
```

#### Shorthand — ពេល Return តែ 1 Line

```js
// Version ពេញ
const add = (a, b) => {
  return a + b;
};

// Shorthand — ដក {} និង return ចេញ
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
```

#### Parameter ត្រឹមតែ 1 — ដក Parentheses បាន

```js
// មាន Parameter តែ 1
const greet = name => `សួស្ដី ${name}!`;

// គ្មាន Parameter — តម្រូវឱ្យមាន ()
const sayHello = () => "Hello!";

// មាន Parameter ច្រើន — តម្រូវឱ្យមាន ()
const multiply = (a, b) => a * b;

console.log(greet("វិចិត្រ")); // សួស្ដី វិចិត្រ!
console.log(sayHello());       // Hello!
console.log(multiply(4, 5));   // 20
```

#### Return Object — ត្រូវដាក់ ក្នុង ()

```js
// ❌ ខុស — {} នឹងត្រូវបានបកស្រាយជា Function Body
const createUser = (name, age) => { name: name, age: age };

// ✅ ត្រឹមត្រូវ — ដាក់ Object ក្នុង ()
const createUser = (name, age) => ({ name: name, age: age });

console.log(createUser("វិចិត្រ", 20));
// { name: "វិចិត្រ", age: 20 }
```

#### តារាងសង្ខេប

| Case | Syntax |
|------|--------|
| 0 Parameters | `() => expression` |
| 1 Parameter | `x => expression` |
| ច្រើន Parameters | `(a, b) => expression` |
| Multi-line | `(a, b) => { ... return ...; }` |
| Return Object | `() => ({ key: value })` |

> **⚠️ ខុសគ្នាពី Regular Function:** Arrow Function **មិនមាន `this` ផ្ទាល់ខ្លួន** — វាយក `this` ពី Scope ខាងក្រៅ។ នេះនឹងរៀនលម្អិតនៅ Part 3 (React)។

---

### 2. Template Literals — ការផ្សំ String បែបថ្មី

ជំនួសឱ្យការប្រើ `+` ដើម្បីផ្សំ String យើងអាចប្រើ **Backticks** (`` ` ``) និង `${}`។

#### ការផ្សំ String

```js
let name = "វិចិត្រ";
let age = 20;

// ❌ បែបចាស់ — ប្រើ +
let message = "សួស្ដី " + name + "! អ្នកអាយុ " + age + " ឆ្នាំ។";

// ✅ បែបថ្មី — Template Literal
let message = `សួស្ដី ${name}! អ្នកអាយុ ${age} ឆ្នាំ។`;

console.log(message);
// សួស្ដី វិចិត្រ! អ្នកអាយុ 20 ឆ្នាំ។
```

#### Expression ក្នុង `${}`

ក្នុង `${}` អ្នកអាចដាក់ **Expression ណាមួយ** បានទេ មិនមែនត្រឹមតែ Variable!

```js
let a = 5;
let b = 3;

console.log(`${a} + ${b} = ${a + b}`);
// 5 + 3 = 8

let price = 100;
let tax = 0.1;
console.log(`Total: $${price * (1 + tax)}`);
// Total: $110

let user = { name: "វិចិត្រ", age: 20 };
console.log(`User: ${user.name} (${user.age})`);
// User: វិចិត្រ (20)
```

#### Multi-line String

```js
// ❌ បែបចាស់ — ត្រូវប្រើ \n
let html = "<div>\n  <h1>Hello</h1>\n  <p>World</p>\n</div>";

// ✅ បែបថ្មី — សរសេរ Multi-line ដោយផ្ទាល់
let html = `
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>
`;

console.log(html);
```

> **💡 Use Case:** Template Literals ត្រូវបានប្រើញឹកញាប់បំផុតសម្រាប់៖
> - បង្កើត HTML ដោយ Dynamic Data
> - សរសេរ Log Messages
> - បង្កើត URL ឬ Query Strings

```js
// Example: Dynamic HTML
let product = { name: "iPhone", price: 999 };
let card = `
  <div class="card">
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
  </div>
`;
```

---

### 3. Destructuring — ការទាញ Data

**Destructuring** អនុញ្ញាតឱ្យយើងទាញ Values ពី Objects ឬ Arrays ដាក់ចូល Variables ដោយផ្ទាល់។

#### Object Destructuring

```js
let student = {
  name: "វិចិត្រ",
  age: 20,
  city: "ភ្នំពេញ",
  email: "vichit@example.com"
};

// ❌ បែបចាស់
let name = student.name;
let age = student.age;
let city = student.city;

// ✅ បែបថ្មី — Destructuring
let { name, age, city } = student;

console.log(name); // វិចិត្រ
console.log(age);  // 20
console.log(city); // ភ្នំពេញ
```

#### Rename Variable

```js
let student = { name: "វិចិត្រ", age: 20 };

// ប្ដូរឈ្មោះ — name ទៅជា studentName
let { name: studentName, age: studentAge } = student;

console.log(studentName); // វិចិត្រ
console.log(studentAge);  // 20
```

#### Default Values

```js
let student = { name: "វិចិត្រ", age: 20 };

// ផ្ដល់ Default ពេល Property មិនមាន
let { name, age, country = "Cambodia" } = student;

console.log(country); // Cambodia
```

#### Nested Destructuring

```js
let user = {
  name: "វិចិត្រ",
  address: {
    city: "ភ្នំពេញ",
    zip: "12000"
  }
};

let { name, address: { city, zip } } = user;

console.log(name); // វិចិត្រ
console.log(city); // ភ្នំពេញ
console.log(zip);  // 12000
```

#### Destructuring ក្នុង Function Parameters

```js
// ❌ បែបចាស់
function printUser(user) {
  console.log(user.name + " - " + user.age);
}

// ✅ Destructuring ក្នុង Parameter
function printUser({ name, age }) {
  console.log(`${name} - ${age}`);
}

printUser({ name: "វិចិត្រ", age: 20 });
// វិចិត្រ - 20
```

#### Array Destructuring

```js
let colors = ["Red", "Green", "Blue"];

// ❌ បែបចាស់
let first = colors[0];
let second = colors[1];
let third = colors[2];

// ✅ Array Destructuring
let [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue
```

#### Skip Elements

```js
let colors = ["Red", "Green", "Blue", "Yellow"];

// Skip Element ទី 2 និង 4
let [first, , third] = colors;

console.log(first); // Red
console.log(third); // Blue
```

#### Swap Variables (Trick!)

```js
let a = 1;
let b = 2;

// Swap ដោយមិនប្រើ Temporary Variable
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1
```

---

### 4. Spread Operator (`...`)

**Spread** បំបែក Array ឬ Object ទៅជា Elements/Properties និមួយៗ។

#### Spread ជាមួយ Array

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// ❌ បែបចាស់
let combined = arr1.concat(arr2);

// ✅ Spread — ច្បាស់ និងងាយ
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// បន្ថែម Elements ថ្មី
let more = [0, ...arr1, 4, ...arr2];
console.log(more); // [0, 1, 2, 3, 4, 4, 5, 6]
```

#### Copy Array (Clone)

```js
let original = [1, 2, 3];

// ❌ មិនមែន Copy — គ្រាន់តែ Reference ដូចគ្នា
let sameRef = original;
sameRef.push(4);
console.log(original); // [1, 2, 3, 4] ⚠️ ផ្លាស់ប្ដូរដែរ!

// ✅ Copy ពិតៗ ដោយប្រើ Spread
let copy = [...original];
copy.push(5);
console.log(original); // [1, 2, 3, 4]
console.log(copy);     // [1, 2, 3, 4, 5]
```

#### Spread ជាមួយ Object

```js
let user = { name: "វិចិត្រ", age: 20 };

// បន្ថែម Property ថ្មី
let updated = { ...user, city: "ភ្នំពេញ" };
console.log(updated);
// { name: "វិចិត្រ", age: 20, city: "ភ្នំពេញ" }

// Override Property
let modified = { ...user, age: 21 };
console.log(modified);
// { name: "វិចិត្រ", age: 21 }
```

#### Merge Objects

```js
let defaults = { theme: "light", lang: "km", fontSize: 14 };
let userPrefs = { theme: "dark" };

let settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: "dark", lang: "km", fontSize: 14 }
```

> **⚠️ សំខាន់:** Spread ជាមួយ Object ធ្វើការ **Shallow Copy** ប៉ុណ្ណោះ — Nested Object នឹងនៅតែ Reference ដូចគ្នា។

#### Spread ក្នុង Function Arguments

```js
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];

// ❌ បែបចាស់
console.log(sum(numbers[0], numbers[1], numbers[2]));

// ✅ Spread
console.log(sum(...numbers)); // 6
```

---

### 5. Rest Parameters (`...`)

**Rest** គឺជាម្ខាងទៀតនៃ Spread — វាប្រមូល Arguments ច្រើនទៅដាក់ក្នុង Array តែមួយ។

```js
// Rest — ប្រមូល Arguments ទាំងអស់ចូល Array
const sum = (...numbers) => {
  return numbers.reduce((total, n) => total + n, 0);
};

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum());              // 0
```

#### Mix Regular និង Rest Parameters

```js
const introduce = (greeting, ...names) => {
  return `${greeting} ${names.join(", ")}!`;
};

console.log(introduce("សួស្ដី", "វិចិត្រ", "សុភា", "ដារា"));
// សួស្ដី វិចិត្រ, សុភា, ដារា!
```

> **⚠️ ចំណាំ:** Rest ត្រូវតែជា Parameter **ចុងក្រោយ** — មិនអាចដាក់កណ្ដាលបានទេ។
> ```js
> // ❌ Error
> const f = (...args, last) => {};
>
> // ✅ OK
> const f = (first, ...rest) => {};
> ```

#### Rest ក្នុង Destructuring

```js
// Array
let [first, ...others] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(others); // [2, 3, 4, 5]

// Object
let { name, ...details } = {
  name: "វិចិត្រ",
  age: 20,
  city: "ភ្នំពេញ",
  email: "a@b.com"
};
console.log(name);    // វិចិត្រ
console.log(details); // { age: 20, city: "ភ្នំពេញ", email: "a@b.com" }
```

#### Spread vs Rest — ខុសគ្នាយ៉ាងណា?

| | Spread | Rest |
|-|--------|------|
| គោលបំណង | **បំបែក** | **ប្រមូល** |
| ប្រើនៅ | Function **Call**, Array/Object **Literal** | Function **Parameter**, Destructuring |
| Example | `func(...arr)` | `(...args) => {}` |

```js
// Spread — បំបែកចេញ
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3

// Rest — ប្រមូលចូល
const fn = (...args) => console.log(args);
fn(1, 2, 3); // [1, 2, 3]
```

---

### 6. Short-circuit Evaluation (`&&`, `||`, `??`)

#### `&&` (AND) — ទាំងពីរត្រូវតែ true

ពេលដំណើរការ `a && b`៖
- បើ `a` ជា **falsy** → Return `a` (មិនមើល `b`)
- បើ `a` ជា **truthy** → Return `b`

```js
console.log(true && "Hello");   // "Hello"
console.log(false && "Hello");  // false
console.log(0 && "Hello");      // 0
console.log(null && "Hello");   // null
```

**Use Case: Conditional Rendering**

```js
let user = { name: "វិចិត្រ", isAdmin: true };

// បង្ហាញ "Admin Panel" តែពេល isAdmin = true
let menu = user.isAdmin && "Admin Panel";
console.log(menu); // "Admin Panel"
```

#### `||` (OR) — Default Value

ពេលដំណើរការ `a || b`៖
- បើ `a` ជា **truthy** → Return `a`
- បើ `a` ជា **falsy** → Return `b`

```js
let name = "" || "Guest";
console.log(name); // "Guest" (ព្រោះ "" ជា falsy)

let count = 0 || 10;
console.log(count); // 10

let value = null || "Default";
console.log(value); // "Default"
```

**Use Case: Default Value**

```js
function greet(name) {
  let displayName = name || "មិត្ត";
  return `សួស្ដី ${displayName}!`;
}

console.log(greet("វិចិត្រ")); // សួស្ដី វិចិត្រ!
console.log(greet());          // សួស្ដី មិត្ត!
```

#### `??` (Nullish Coalescing) — Default តែពេល null/undefined

`||` មានបញ្ហា៖ វាចាត់ទុក `0`, `""`, `false` ជា Falsy ហើយយក Default។ បើយើងចង់បាន Default **តែពេល null ឬ undefined** ប៉ុណ្ណោះ ប្រើ `??`។

```js
let count = 0;

// ❌ ប្រើ || — យក 10 (ព្រោះ 0 ជា falsy)
console.log(count || 10); // 10

// ✅ ប្រើ ?? — យក 0 (ព្រោះ 0 មិនមែន null/undefined)
console.log(count ?? 10); // 0
```

```js
let user = { name: "វិចិត្រ", age: 0 };

let age1 = user.age || 18;  // 18 ❌ (0 ជា falsy)
let age2 = user.age ?? 18;  // 0  ✅ (ត្រឹមត្រូវ!)
```

#### តារាងសង្ខេប

| Operator | Trigger Default ពេល | Use Case |
|----------|---------------------|----------|
| `\|\|`  | Value ជា falsy (`0`, `""`, `null`, `undefined`, `false`, `NaN`) | Default ទូទៅ |
| `??`    | Value ជា `null` ឬ `undefined` **តែមួយ** | Number/Boolean Defaults |
| `&&`    | Value ជា truthy (មិនមែន Default) | Conditional Rendering |

> **💡 Falsy Values:** `false`, `0`, `""`, `null`, `undefined`, `NaN` — ទាំងអស់ផ្សេងពីនេះគឺ **Truthy**

---

### 7. Optional Chaining (`?.`)

ពេលយើងមាន Nested Object ហើយមួយចំនួនអាច `undefined` បាន យើងត្រូវពិនិត្យរាល់ Level មុនពេល Access — ពិបាក និងវែង!

#### បញ្ហា (បែបចាស់)

```js
let user = { name: "វិចិត្រ" };

// ❌ Error — user.address ជា undefined
console.log(user.address.city);
// TypeError: Cannot read property 'city' of undefined

// ❌ វិធីដោះស្រាយបែបចាស់ — វែង
let city = user && user.address && user.address.city;
```

#### ដំណោះស្រាយ — Optional Chaining

```js
let user = { name: "វិចិត្រ" };

// ✅ Optional Chaining — Return undefined ពេលជួប null/undefined
console.log(user.address?.city); // undefined (គ្មាន Error!)

// ជាមួយ Default
let city = user.address?.city ?? "មិនមាន";
console.log(city); // "មិនមាន"
```

#### Use Cases ច្រើនៗ

```js
let user = {
  name: "វិចិត្រ",
  address: { city: "ភ្នំពេញ" },
  sayHi: () => "Hi!"
};

// Property
console.log(user.address?.city);  // "ភ្នំពេញ"
console.log(user.profile?.bio);   // undefined

// Method Call
console.log(user.sayHi?.());      // "Hi!"
console.log(user.sayBye?.());     // undefined (មិន Error!)

// Array Element
let list = null;
console.log(list?.[0]);           // undefined
```

#### Real-world Example

```js
// API Response មួយចំនួនមិនមាន Data ពេញ
let response = {
  user: {
    name: "វិចិត្រ",
    // address មិនមាន
  }
};

// ❌ Crash
let city = response.user.address.city;

// ✅ Safe
let city = response.user?.address?.city ?? "មិនស្គាល់";
console.log(city); // "មិនស្គាល់"
```

---

### 8. Ternary Operator — `condition ? a : b`

**Ternary** ជា Shortcut ជំនួស `if/else` ពេលត្រូវជ្រើសរើសរវាង 2 Values។

#### Syntax

```js
condition ? valueIfTrue : valueIfFalse;
```

#### Example

```js
let age = 20;

// ❌ បែបចាស់
let status;
if (age >= 18) {
  status = "ពេញវ័យ";
} else {
  status = "មិនទាន់ពេញវ័យ";
}

// ✅ Ternary
let status = age >= 18 ? "ពេញវ័យ" : "មិនទាន់ពេញវ័យ";
console.log(status); // ពេញវ័យ
```

#### ក្នុង Template Literal

```js
let score = 85;

let message = `ពិន្ទុរបស់អ្នក: ${score} — ${score >= 50 ? "ជាប់" : "មិនជាប់"}`;
console.log(message);
// ពិន្ទុរបស់អ្នក: 85 — ជាប់
```

#### Nested Ternary (ប្រយ័ត្ន!)

```js
let score = 85;

let grade = score >= 90 ? "A"
          : score >= 80 ? "B"
          : score >= 70 ? "C"
          : score >= 60 ? "D"
          : "F";

console.log(grade); // B
```

> **⚠️ ចំណាំ:** Nested Ternary ច្រើនពេក អានពិបាក — បើលើសពី 2 Levels គួរប្រើ `if/else` ឬ `switch` ជំនួស។

---

## 💻 Code សំរាប់ Demo

```js
// =================================
// Lesson 11 Demo: Modern Student API
// =================================

// --- 1. Arrow Functions + Template Literals ---
const formatName = (firstName, lastName = "") =>
  `${firstName} ${lastName}`.trim();

const createStudent = (name, age, skills = []) => ({
  name,
  age,
  skills,
  introduce: function() {
    return `សួស្ដី ខ្ញុំឈ្មោះ ${this.name} អាយុ ${this.age} ឆ្នាំ`;
  }
});

// --- 2. បង្កើត Students ---
const students = [
  createStudent("វិចិត្រ", 20, ["HTML", "CSS"]),
  createStudent("សុភា", 22, ["Python"]),
  createStudent("ដារា", 19),
];

// --- 3. Spread — បន្ថែម Student ថ្មី ---
const newStudent = createStudent("រតនា", 21, ["Java"]);
const allStudents = [...students, newStudent];

console.log(`ចំនួនសិស្ស: ${allStudents.length}`); // 4

// --- 4. Destructuring ---
const [first, second, ...rest] = allStudents;
console.log(first.name);    // វិចិត្រ
console.log(rest.length);   // 2

const { name, age, skills } = first;
console.log(`${name} (${age}) — ${skills.join(", ")}`);
// វិចិត្រ (20) — HTML, CSS

// --- 5. Rest Parameters ---
const sumAges = (...studentList) =>
  studentList.reduce((total, s) => total + s.age, 0);

console.log(`សរុបអាយុ: ${sumAges(...allStudents)}`); // 82

// --- 6. Short-circuit + Optional Chaining ---
const findStudent = (list, searchName) =>
  list.find(s => s.name === searchName);

const found = findStudent(allStudents, "សុភា");

// Optional Chaining + Nullish Coalescing
const email = found?.email ?? "គ្មាន Email";
console.log(email); // គ្មាន Email

// Short-circuit — បង្ហាញតែពេលរកឃើញ
found && console.log(found.introduce());
// សួស្ដី ខ្ញុំឈ្មោះ សុភា អាយុ 22 ឆ្នាំ

// --- 7. Ternary + Spread (Update Object) ---
const upgradeStudent = (student, newSkill) => ({
  ...student,
  skills: student.skills.includes(newSkill)
    ? student.skills
    : [...student.skills, newSkill],
  level: student.skills.length >= 3 ? "Advanced" : "Beginner",
});

const upgraded = upgradeStudent(first, "JavaScript");
console.log(upgraded);
// { name: "វិចិត្រ", age: 20, skills: ["HTML", "CSS", "JavaScript"], level: "Advanced", ... }

// --- 8. Summary Card ---
const summaryCard = ({ name, age, skills }) => `
╔════════════════════════════╗
║ ${name.padEnd(20)}      ║
║ អាយុ: ${age} ឆ្នាំ                ║
║ Skills: ${skills.length || 0}              ║
╚════════════════════════════╝
`;

console.log(summaryCard(upgraded));
```

---

## 🏋️ លំហាត់ (Exercise)

### លំហាត់ 1: Refactor ទៅ Arrow Functions

បំលែង Functions ខាងក្រោមទាំងអស់ទៅ **Arrow Functions**៖

```js
// បំលែងទាំងអស់ទៅ Arrow Functions
function square(n) {
  return n * n;
}

function isEven(n) {
  return n % 2 === 0;
}

function greet(name) {
  return "Hello " + name;
}

function createCar(brand, model) {
  return { brand: brand, model: model };
}

function sum(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}
```

### លំហាត់ 2: Template Literals

បង្កើត Function `buildProfile(user)` ដែល Return String ដូចខាងក្រោម ដោយប្រើ Template Literal៖

```js
let user = {
  name: "វិចិត្រ",
  age: 20,
  skills: ["HTML", "CSS", "JS"]
};

console.log(buildProfile(user));
// ======= PROFILE =======
// Name: វិចិត្រ
// Age: 20
// Skills: HTML, CSS, JS
// =======================
```

### លំហាត់ 3: Destructuring Practice

- [ ] ពី Object ខាងក្រោម ទាញ `name`, `email`, និង `city` (ពី `address`) ដោយប្រើ Destructuring
- [ ] ពី Array ខាងក្រោម ទាញ Element ទី 1, 3, និង Rest

```js
let user = {
  name: "វិចិត្រ",
  email: "vichit@example.com",
  address: {
    city: "ភ្នំពេញ",
    zip: "12000"
  }
};

let numbers = [10, 20, 30, 40, 50];
// Expected: first = 10, third = 30, rest = [40, 50]
```

### លំហាត់ 4: Spread & Rest

បង្កើត Functions ខាងក្រោមដោយប្រើ Spread/Rest៖

- [ ] `merge(obj1, obj2)` — រួម 2 Objects ទៅជា 1
- [ ] `addItem(array, item)` — Return Array ថ្មីដែលបន្ថែម Item (មិនប៉ះ Original)
- [ ] `max(...nums)` — Return Number ធំបំផុត (Hint: `Math.max(...nums)`)

```js
// Test:
console.log(merge({ a: 1 }, { b: 2 }));     // { a: 1, b: 2 }
console.log(addItem([1, 2, 3], 4));          // [1, 2, 3, 4]
console.log(max(3, 7, 2, 9, 5));             // 9
```

### លំហាត់ 5: Short-circuit & Optional Chaining

បង្កើត Function `getCity(user)` ដែល៖
- [ ] Return `user.address.city` បើមាន
- [ ] Return `"មិនស្គាល់"` បើ `user` ឬ `address` ឬ `city` មិនមាន

```js
// Test:
console.log(getCity({ name: "វិចិត្រ", address: { city: "ភ្នំពេញ" } })); // ភ្នំពេញ
console.log(getCity({ name: "សុភា", address: {} }));                      // មិនស្គាល់
console.log(getCity({ name: "ដារា" }));                                    // មិនស្គាល់
console.log(getCity(null));                                                 // មិនស្គាល់
```

### លំហាត់ 6: Bonus — Shopping Cart

បង្កើត Shopping Cart System ដោយប្រើ ES6+ Features៖

- [ ] Function `createCart()` — Return Object `{ items: [], total: 0 }`
- [ ] Function `addToCart(cart, item)` — Return Cart ថ្មីដែលបន្ថែម Item (Immutable)
- [ ] Function `summarize(cart)` — Return String សង្ខេប (ប្រើ Template Literal)

```js
// Test:
let cart = createCart();
cart = addToCart(cart, { name: "Book", price: 10 });
cart = addToCart(cart, { name: "Pen", price: 2 });

console.log(summarize(cart));
// Cart (2 items):
// - Book: $10
// - Pen: $2
// Total: $12
```

---

## 🧠 ចំណុចសំខាន់ (Key Takeaways)

1. **Arrow Functions** សរសេរខ្លីជាង — `(a, b) => a + b` — មិនមាន `this` ផ្ទាល់ខ្លួន
2. **Template Literals** ប្រើ `` ` `` និង `${}` ជំនួស `+` — គាំទ្រ Multi-line
3. **Destructuring** ទាញ Values ពី Objects/Arrays — `const { name } = user`
4. **Spread** (`...`) បំបែក Array/Object — មានប្រយោជន៍សម្រាប់ **Copy** និង **Merge**
5. **Rest** (`...`) ប្រមូល Arguments ទៅដាក់ក្នុង Array
6. **`\|\|` vs `??`** — `\|\|` Trigger លើ Falsy ទាំងអស់ រី `??` Trigger តែលើ `null`/`undefined`
7. **Optional Chaining** (`?.`) ការពារ Crash ពេល Access Nested Object ដែលអាច undefined
8. **Ternary** (`? :`) ជំនួស `if/else` សាមញ្ញ — កុំប្រើ Nested លើសពី 2 Levels

---

## 🔗 ធនធានបន្ថែម (Resources)

- [MDN — Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN — Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN — Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN — Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN — Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN — Nullish Coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [JavaScript.info — Modern JavaScript](https://javascript.info/)

---

> **Lesson បន្ទាប់:** Lesson 12 — JavaScript ES6+ (Part 2): Array Methods, Promises, Async/Await, Modules
