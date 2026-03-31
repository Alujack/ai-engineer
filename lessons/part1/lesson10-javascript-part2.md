# Lesson 10: JavaScript មូលដ្ឋាន (Part 2)

> **Part:** 1 — មូលដ្ឋាន (Beginner)
> **រយៈពេល:** 2-3 ម៉ោង
> **កម្រិត:** បានរៀន Lesson 9 រួច (Prerequisites: Lesson 9)

---

## 🎯 គោលបំណង (Learning Objectives)

បន្ទាប់ពីរៀន Lesson នេះចប់ សិស្សនឹងអាច៖
1. បង្កើត និងប្រើ Functions ដើម្បីរៀបចំ Code ឱ្យមានរបៀបរបប
2. ប្រើ Arrays ដើម្បីផ្ទុកទិន្នន័យច្រើន និងប្រើ Methods សំខាន់ៗ
3. បង្កើត Objects ដើម្បីតំណាង Real-world Data
4. យល់ពី Scope (Global, Local, Block)
5. ប្រើ String Methods សំខាន់ៗ

---

## 📚 មាតិកាលម្អិត (Detailed Content)

---

### 1. Functions — មុខងារ

**Function** គឺជា Block នៃ Code ដែលអាចប្រើឡើងវិញ (Reusable)។ ជំនួសឱ្យការសរសេរ Code ដដែលៗ យើងដាក់ Code ក្នុង Function ហើយហៅវាពេលត្រូវការ។

#### Function Declaration

```js
function greet(name) {
  return "សួស្ដី " + name + "!";
}

console.log(greet("វិចិត្រ")); // សួស្ដី វិចិត្រ!
console.log(greet("សុភា"));   // សួស្ដី សុភា!
```

#### Function Expression

```js
const greet = function(name) {
  return "សួស្ដី " + name + "!";
};

console.log(greet("វិចិត្រ")); // សួស្ដី វិចិត្រ!
```

#### ភាពខុសគ្នា Declaration vs Expression

| | Function Declaration | Function Expression |
|-|---------------------|---------------------|
| Syntax | `function name() {}` | `const name = function() {}` |
| Hoisting | ✅ អាចហៅមុនពេល Define | ❌ ត្រូវ Define មុនសិន |
| ពេលណាប្រើ | ទូទៅ, អ្នកចាប់ផ្ដើម | ពេលចង់ Assign ឱ្យ Variable |

```js
// Hoisting Example
sayHello(); // ✅ ដំណើរការ — Declaration ត្រូវបាន Hoisted
function sayHello() {
  console.log("Hello!");
}

sayBye(); // ❌ Error — Expression មិនត្រូវបាន Hoisted
const sayBye = function() {
  console.log("Bye!");
};
```

#### Parameters & Return Values

```js
// Function ដែលមាន Parameter និង Return
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8

// Function គ្មាន Return — return undefined ដោយស្វ័យប្រវត្តិ
function sayHi(name) {
  console.log("Hi " + name);
}

let value = sayHi("សុភា"); // Hi សុភា
console.log(value);         // undefined
```

> **💡 ចំណាំ:** `return` បញ្ឈប់ Function ភ្លាម — Code ក្រោយ `return` មិនដំណើរការ

```js
function checkAge(age) {
  if (age < 18) {
    return "ក្មេង";
  }
  return "ធំ"; // ដំណើរការបានតែពេល age >= 18
}
```

#### Default Parameters

```js
function greet(name = "មិត្ត") {
  return "សួស្ដី " + name + "!";
}

console.log(greet("វិចិត្រ")); // សួស្ដី វិចិត្រ!
console.log(greet());          // សួស្ដី មិត្ត!
```

```js
function createUser(name, role = "student", active = true) {
  console.log(name + " - " + role + " - " + active);
}

createUser("វិចិត្រ");                  // វិចិត្រ - student - true
createUser("សុភា", "teacher");         // សុភា - teacher - true
createUser("ដារា", "admin", false);    // ដារា - admin - false
```

---

### 2. Arrays — អារេ

**Array** គឺជា List ដែលផ្ទុកទិន្នន័យច្រើន ក្នុង Variable មួយ។

#### Creating & Accessing Arrays

```js
// បង្កើត Array
let fruits = ["ចេក", "ម៉ាង់", "ប៉ោម"];
let numbers = [10, 20, 30, 40, 50];
let mixed = ["វិចិត្រ", 25, true];

// Access — Index ចាប់ផ្ដើមពី 0
console.log(fruits[0]); // ចេក
console.log(fruits[1]); // ម៉ាង់
console.log(fruits[2]); // ប៉ោម

// ផ្លាស់ប្ដូរ Element
fruits[1] = "ទុរេន";
console.log(fruits); // ["ចេក", "ទុរេន", "ប៉ោម"]
```

> **⚠️ សំខាន់:** Array Index ចាប់ផ្ដើមពី **0** មិនមែន 1!
> ```
> Index:   0       1       2
> Value: "ចេក"  "ម៉ាង់"  "ប៉ោម"
> ```

#### Array Methods សំខាន់ៗ

##### បន្ថែម / ដក Elements

```js
let fruits = ["ចេក", "ម៉ាង់"];

// push — បន្ថែមនៅចុង
fruits.push("ប៉ោម");
console.log(fruits); // ["ចេក", "ម៉ាង់", "ប៉ោម"]

// pop — ដកចេញពីចុង
let last = fruits.pop();
console.log(last);   // ប៉ោម
console.log(fruits); // ["ចេក", "ម៉ាង់"]

// unshift — បន្ថែមនៅដើម
fruits.unshift("ក្រូច");
console.log(fruits); // ["ក្រូច", "ចេក", "ម៉ាង់"]

// shift — ដកចេញពីដើម
let first = fruits.shift();
console.log(first);  // ក្រូច
console.log(fruits); // ["ចេក", "ម៉ាង់"]
```

> **💡 ចាំងាយ:**
> ```
> unshift → [ដើម]  push → [ចុង]
> shift   ← [ដើម]  pop  ← [ចុង]
> ```

##### splice — បន្ថែម/ដក/ជំនួសនៅទីតាំងណាមួយ

```js
let colors = ["Red", "Green", "Blue", "Yellow"];

// ដក 1 Element ចាប់ពី Index 1
colors.splice(1, 1);
console.log(colors); // ["Red", "Blue", "Yellow"]

// ដក 0, បន្ថែម "Green" នៅ Index 1
colors.splice(1, 0, "Green");
console.log(colors); // ["Red", "Green", "Blue", "Yellow"]

// ជំនួស 1 Element នៅ Index 2
colors.splice(2, 1, "Purple");
console.log(colors); // ["Red", "Green", "Purple", "Yellow"]
```

##### length, indexOf, includes

```js
let fruits = ["ចេក", "ម៉ាង់", "ប៉ោម", "ទុរេន"];

// length — ចំនួន Elements
console.log(fruits.length); // 4

// indexOf — រក Index របស់ Element (return -1 បើរកមិនឃើញ)
console.log(fruits.indexOf("ប៉ោម")); // 2
console.log(fruits.indexOf("ល្ហុង")); // -1

// includes — ពិនិត្យថាមាន Element នេះទេ (return true/false)
console.log(fruits.includes("ម៉ាង់")); // true
console.log(fruits.includes("ល្ហុង")); // false
```

#### Looping Arrays

##### ប្រើ `for` Loop

```js
let fruits = ["ចេក", "ម៉ាង់", "ប៉ោម"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}
// 0: ចេក
// 1: ម៉ាង់
// 2: ប៉ោម
```

##### ប្រើ `for...of` Loop (សាមញ្ញជាង)

```js
let fruits = ["ចេក", "ម៉ាង់", "ប៉ោម"];

for (let fruit of fruits) {
  console.log(fruit);
}
// ចេក
// ម៉ាង់
// ប៉ោម
```

> **💡 ពេលណាប្រើមួយណា?**
> - `for` — ពេលត្រូវការ Index ឬ ចង់ Skip/Modify ពេល Loop
> - `for...of` — ពេលគ្រាន់តែចង់អាន Element និមួយៗ

---

### 3. Objects — វត្ថុ

**Object** ផ្ទុកទិន្នន័យជា **key-value pairs** — សមស្រប់តំណាង Real-world Things។

#### Creating Objects

```js
let student = {
  name: "វិចិត្រ",
  age: 20,
  isActive: true,
  skills: ["HTML", "CSS", "JS"]
};

console.log(student);
```

#### Accessing Properties

```js
// Dot Notation — ប្រើញឹកបំផុត
console.log(student.name);     // វិចិត្រ
console.log(student.age);      // 20

// Bracket Notation — ប្រើពេល Key មាន Space ឬ ជា Variable
console.log(student["name"]);  // វិចិត្រ

let key = "age";
console.log(student[key]);     // 20

// Nested Access
console.log(student.skills[0]); // HTML
```

#### ផ្លាស់ប្ដូរ និងបន្ថែម Properties

```js
let student = {
  name: "វិចិត្រ",
  age: 20
};

// ផ្លាស់ប្ដូរ
student.age = 21;
console.log(student.age); // 21

// បន្ថែម Property ថ្មី
student.email = "vichit@example.com";
console.log(student);
// { name: "វិចិត្រ", age: 21, email: "vichit@example.com" }

// ដក Property
delete student.email;
console.log(student); // { name: "វិចិត្រ", age: 21 }
```

#### Methods in Objects

```js
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

console.log(calculator.add(10, 5));      // 15
console.log(calculator.subtract(10, 5)); // 5
```

```js
let student = {
  name: "វិចិត្រ",
  age: 20,
  introduce: function() {
    return "សួស្ដី ខ្ញុំឈ្មោះ " + this.name + " អាយុ " + this.age + " ឆ្នាំ";
  }
};

console.log(student.introduce());
// សួស្ដី ខ្ញុំឈ្មោះ វិចិត្រ អាយុ 20 ឆ្នាំ
```

> **💡 `this`** សំដៅទៅ Object ដែល Method នោះស្ថិតនៅក្នុង

#### Object Destructuring (Intro)

```js
let student = {
  name: "វិចិត្រ",
  age: 20,
  city: "ភ្នំពេញ"
};

// ❌ ធម្មតា — ត្រូវសរសេរ student.xxx ច្រើនដង
let name = student.name;
let age = student.age;
let city = student.city;

// ✅ Destructuring — ខ្លី និងងាយ
let { name, age, city } = student;

console.log(name); // វិចិត្រ
console.log(age);  // 20
console.log(city); // ភ្នំពេញ
```

```js
// Destructuring ជាមួយ Default Value
let { name, age, country = "Cambodia" } = student;
console.log(country); // Cambodia (មិនមាន property នេះ ប្រើ Default)
```

---

### 4. Scope — វិសាលភាពនៃ Variable

**Scope** កំណត់ថា Variable អាចប្រើនៅកន្លែងណា។

#### Global Scope

```js
let appName = "My App"; // Global — អាចប្រើគ្រប់កន្លែង

function showName() {
  console.log(appName); // ✅ អាចប្រើ
}

showName();
console.log(appName); // ✅ អាចប្រើ
```

#### Local Scope (Function Scope)

```js
function greet() {
  let message = "Hello!"; // Local — អាចប្រើក្នុង Function នេះតែប៉ុណ្ណោះ
  console.log(message);   // ✅ អាចប្រើ
}

greet();
console.log(message); // ❌ Error: message is not defined
```

#### Block Scope

```js
if (true) {
  let x = 10;   // Block Scope — អាចប្រើក្នុង {} នេះតែប៉ុណ្ណោះ
  const y = 20;
  var z = 30;    // ⚠️ var មិនគោរព Block Scope!

  console.log(x); // ✅ 10
}

console.log(x); // ❌ Error
console.log(y); // ❌ Error
console.log(z); // ✅ 30 — var មិនគោរព Block Scope!
```

> **⚠️ សំខាន់:** នេះហើយជាមូលហេតុដែលយើងប្រើ `let` និង `const` ជំនួស `var`!

#### សង្ខេប Scope

```
┌─────────────────────────────────────┐
│ Global Scope                        │
│   let appName = "My App"           │
│                                     │
│  ┌──────────────────────────────┐   │
│  │ Function Scope (Local)       │   │
│  │   let message = "Hello"      │   │
│  │                              │   │
│  │  ┌────────────────────────┐  │   │
│  │  │ Block Scope            │  │   │
│  │  │   let x = 10           │  │   │
│  │  └────────────────────────┘  │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

- Block អាចមើលឃើញ Variable ខាងក្រៅ (Parent Scope)
- ខាងក្រៅមើលមិនឃើញ Variable ខាងក្នុង

---

### 5. String Methods សំខាន់ៗ

```js
let text = "  Hello World  ";

// toUpperCase / toLowerCase
console.log(text.toUpperCase()); // "  HELLO WORLD  "
console.log(text.toLowerCase()); // "  hello world  "

// trim — ដក Space នៅដើម និងចុង
console.log(text.trim()); // "Hello World"

// slice — កាត់ String
let str = "JavaScript";
console.log(str.slice(0, 4));  // "Java"
console.log(str.slice(4));     // "Script"
console.log(str.slice(-6));    // "Script"

// split — បំបែក String ជា Array
let csv = "HTML,CSS,JS";
let skills = csv.split(",");
console.log(skills); // ["HTML", "CSS", "JS"]

let sentence = "Hello World";
let words = sentence.split(" ");
console.log(words); // ["Hello", "World"]

// includes — ពិនិត្យថាមាន Substring ទេ
let email = "user@example.com";
console.log(email.includes("@"));       // true
console.log(email.includes("gmail"));   // false
```

#### String Methods សង្ខេប

| Method | ការប្រើ | លទ្ធផល |
|--------|---------|---------|
| `toUpperCase()` | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | `"HELLO".toLowerCase()` | `"hello"` |
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `slice(start, end)` | `"Hello".slice(1, 3)` | `"el"` |
| `split(separator)` | `"a,b,c".split(",")` | `["a","b","c"]` |
| `includes(text)` | `"Hello".includes("ell")` | `true` |

---

## 💻 Code សំរាប់ Demo

```js
// ============================
// Lesson 10 Demo: Student Manager
// ============================

// --- 1. Functions ---
function createStudent(name, age, skills = []) {
  return {
    name: name,
    age: age,
    skills: skills,
    introduce: function() {
      return "សួស្ដី ខ្ញុំឈ្មោះ " + this.name + " អាយុ " + this.age + " ឆ្នាំ";
    },
    addSkill: function(skill) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill);
        console.log(skill + " ត្រូវបានបន្ថែម!");
      } else {
        console.log(skill + " មានរួចហើយ!");
      }
    }
  };
}

// --- 2. បង្កើត Students ---
let student1 = createStudent("វិចិត្រ", 20, ["HTML", "CSS"]);
let student2 = createStudent("សុភា", 22, ["Python"]);
let student3 = createStudent("ដារា", 19);

// --- 3. Array of Students ---
let students = [student1, student2, student3];

// បន្ថែម Student ថ្មី
students.push(createStudent("រតនា", 21, ["Java"]));

// --- 4. Loop ហើយ Introduce ---
console.log("=== សិស្សទាំងអស់ ===");
for (let student of students) {
  console.log(student.introduce());
}

// --- 5. ប្រើ Methods ---
student1.addSkill("JavaScript"); // JavaScript ត្រូវបានបន្ថែម!
student1.addSkill("HTML");       // HTML មានរួចហើយ!

console.log(student1.skills); // ["HTML", "CSS", "JavaScript"]

// --- 6. Destructuring ---
let { name, age, skills } = student1;
console.log(name);   // វិចិត្រ
console.log(skills);  // ["HTML", "CSS", "JavaScript"]

// --- 7. String Methods ---
function formatName(input) {
  let trimmed = input.trim();
  let upper = trimmed.toUpperCase();
  return upper;
}

console.log(formatName("  វិចិត្រ  ")); // វិចិត្រ (trimmed)

// --- 8. Search Function ---
function findStudent(students, searchName) {
  for (let student of students) {
    if (student.name.includes(searchName)) {
      return student;
    }
  }
  return null;
}

let found = findStudent(students, "សុភា");
if (found) {
  console.log("រកឃើញ: " + found.introduce());
} else {
  console.log("រកមិនឃើញ!");
}
```

---

## 🏋️ លំហាត់ (Exercise)

### លំហាត់ 1: Calculator Functions

បង្កើត Functions ទាំង 4:
- [ ] `add(a, b)` — return a + b
- [ ] `subtract(a, b)` — return a - b
- [ ] `multiply(a, b)` — return a * b
- [ ] `divide(a, b)` — return a / b (ពិនិត្យ b !== 0)

```js
// Test:
console.log(add(10, 5));       // 15
console.log(subtract(10, 5));  // 5
console.log(multiply(10, 5));  // 50
console.log(divide(10, 0));    // "មិនអាចចែកនឹង 0"
```

### លំហាត់ 2: Todo List (Array)

បង្កើត Array `todos` ហើយសរសេរ Functions:
- [ ] `addTodo(task)` — បន្ថែម Task ថ្មី
- [ ] `removeTodo(index)` — ដក Task ចេញតាម Index
- [ ] `showTodos()` — បង្ហាញ Todos ទាំងអស់ ជាមួយ Index

```js
// Test:
addTodo("រៀន HTML");
addTodo("រៀន CSS");
addTodo("រៀន JS");
showTodos();
// 0: រៀន HTML
// 1: រៀន CSS
// 2: រៀន JS

removeTodo(1);
showTodos();
// 0: រៀន HTML
// 1: រៀន JS
```

### លំហាត់ 3: Student Object

បង្កើត Object `student` ដែលមាន:
- [ ] Properties: `name`, `age`, `scores` (Array of Numbers)
- [ ] Method: `getAverage()` — return មធ្យមភាគនៃ Scores
- [ ] Method: `getGrade()` — return "A" (>=90), "B" (>=80), "C" (>=70), "D" (>=60), "F" (<60)

```js
// Test:
let student = {
  name: "វិចិត្រ",
  age: 20,
  scores: [85, 92, 78, 90],
  // ... បន្ថែម Methods
};

console.log(student.getAverage()); // 86.25
console.log(student.getGrade());   // "B"
```

### លំហាត់ 4: Bonus — String Processor

បង្កើត Functions:
- [ ] `capitalizeFirst(str)` — ធ្វើឱ្យអក្សរដំបូងជា Uppercase: `"hello"` → `"Hello"`
- [ ] `countWords(str)` — រាប់ Words: `"Hello World"` → `2`
- [ ] `reverseWords(str)` — បញ្ច្រាស់ Words: `"Hello World"` → `"World Hello"`

> **💡 Hint:** ប្រើ `split()` ហើយ Array methods

---

## 🧠 ចំណុចសំខាន់ (Key Takeaways)

1. **Functions** ជួយរៀបចំ Code ឱ្យអាចប្រើឡើងវិញ — Declaration ត្រូវបាន Hoisted, Expression មិនត្រូវបាន Hoisted
2. **Default Parameters** ផ្ដល់ Value ស្រាប់ពេល Argument មិនត្រូវបានផ្ដល់
3. **Arrays** ផ្ទុក List នៃទិន្នន័យ — Index ចាប់ពី 0 — Methods: `push`, `pop`, `shift`, `unshift`, `splice`
4. **Objects** ផ្ទុក Key-Value Pairs — Access ដោយ Dot ឬ Bracket Notation
5. **`this`** ក្នុង Object Method សំដៅទៅ Object ខ្លួនឯង
6. **Destructuring** ជួយទាញ Properties ចេញពី Object បានងាយ
7. **Scope** កំណត់ថា Variable អាចប្រើនៅកន្លែងណា — ប្រើ `let`/`const` ជំនួស `var`
8. **String Methods** ដូចជា `trim()`, `split()`, `includes()` ជួយ Manipulate Text បានងាយ

---

## 🔗 ធនធានបន្ថែម (Resources)

- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript.info — Objects](https://javascript.info/object)

---

> **Lesson បន្ទាប់:** Lesson 11 — DOM Manipulation
