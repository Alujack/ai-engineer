# លំហាត់ — `find`, `findIndex`, `some`, `every`

> **រយៈពេល:** ~60 នាទី
> **កម្រិត:** បានរៀន Lesson 12 (Array Methods)

---

## 📦 Mock Data ប្រើទូទៅ

ដាក់ Code ខាងក្រោមនៅលើបំផុតនៃ File `lesson12-practice.js` ដើម្បីប្រើជាមួយលំហាត់ផ្សេងៗ៖

```js
const users = [
  { id: 1, name: "វិចិត្រ", age: 22, role: "admin",   active: true,  email: "vichet@example.com" },
  { id: 2, name: "សុភា",   age: 17, role: "student", active: true,  email: "sopha@example.com"  },
  { id: 3, name: "ដារា",   age: 30, role: "teacher", active: false, email: "dara@example.com"   },
  { id: 4, name: "រតនា",   age: 25, role: "student", active: true,  email: "rotha@example.com"  },
  { id: 5, name: "សុខា",   age: 19, role: "student", active: true,  email: "sokha@example.com"  },
];

const products = [
  { id: 101, name: "Book",   price: 10,  stock: 3, category: "Education" },
  { id: 102, name: "Pen",    price: 2,   stock: 0, category: "Education" },
  { id: 103, name: "Bag",    price: 25,  stock: 7, category: "Fashion"   },
  { id: 104, name: "Laptop", price: 800, stock: 0, category: "Electronic" },
  { id: 105, name: "Shirt",  price: 15,  stock: 4, category: "Fashion"   },
];

const numbers = [4, 8, 15, 16, 23, 42];
```

---

## 🟢 Easy — `find` & `findIndex`

### លំហាត់ 1
រក User ដែលមាន `id === 3` ។ បង្ហាញឈ្មោះរបស់គាត់។
> **Hint:** `users.find(...)` បន្ទាប់មក `.name`

### លំហាត់ 2
រក User ដំបូងដែលមាន `role === "teacher"` ។ បើគ្មាន បង្ហាញ `"គ្មានគ្រូ"`។

### លំហាត់ 3
រក **Index** របស់ Product ដែលឈ្មោះ `"Bag"` ។ បន្ទាប់មកប្តូរ `price` ជា `30`។

### លំហាត់ 4
រក Product ដំបូងដែល `stock === 0` ។ បង្ហាញ `"OUT: <name>"` ឬ `"All in stock"`។

### លំហាត់ 5
បង្កើត Function `findUserByEmail(email)` ដែលប្រើ `find` ហើយ Return User Object (ឬ `null` បើគ្មាន)។

---

## 🟢 Easy — `some` & `every`

### លំហាត់ 6
ប្រើ `some` ដើម្បីពិនិត្យថា **មាន** User ដែលអាយុ < 18 ឬទេ?

### លំហាត់ 7
ប្រើ `every` ដើម្បីពិនិត្យថា **ទាំងអស់** Users មាន `email` (មិន empty / មិន undefined)?

### លំហាត់ 8
ពិនិត្យថា Numbers ទាំងអស់គឺជាលេខគូ ដោយប្រើ `every`។ ហើយពិនិត្យថា **យ៉ាងហោចណាស់ 1** ជាលេខសេស ដោយប្រើ `some`។

### លំហាត់ 9
ពិនិត្យថា Cart ខាងក្រោមអាច Checkout បានទេ — រាល់ Item ត្រូវមាន `stock > 0`៖

```js
const cart = [
  { name: "Book", stock: 3 },
  { name: "Pen",  stock: 0 },
];
```

### លំហាត់ 10
ពិនិត្យថាមាន Product ណាមួយដែលតម្លៃ > $500 ឬទេ?

---

## 🟡 Medium — លាយជាមួយ Logic ច្រើន

### លំហាត់ 11
បង្កើត Function `loginUser(email, password)`៖
- ប្រើ `find` រកតាម `email`
- បើគ្មាន User → throw `Error("User not found")`
- បើ User មាន `active === false` → throw `Error("Account disabled")`
- បើជោគជ័យ → Return `{ id, name, role }`

### លំហាត់ 12
បង្កើត Function `updateProductStock(id, newStock)`៖
- ប្រើ `findIndex` រកទីតាំង Product
- បើ `index === -1` → Return `false`
- បើរកឃើញ → Update `products[index].stock` រួច Return `true`

### លំហាត់ 13
បង្កើត Function `isFormValid(form)` — Form ជា Array ខាងក្រោម។ ត្រូវ Return `true` លុះត្រាតែ **គ្រប់ Field** មាន `value` មិន empty៖

```js
const form = [
  { field: "name",  value: "វិចិត្រ" },
  { field: "email", value: "" },
  { field: "phone", value: "012345678" },
];
```

### លំហាត់ 14
បង្កើត Function `hasDuplicateId(arr)` ដែល Return `true` បើមាន `id` ស្ទួនក្នុង Array។
> **Hint:** ប្រើ `some` ជាមួយ `findIndex` — បើ `findIndex` ដំបូង មិនស្មើ Index បច្ចុប្បន្ន មានន័យថាស្ទួន។

### លំហាត់ 15
បង្កើត Function `canEnterClub(person)` — Return `true` លុះត្រាតែ៖
- មានអាយុ ≥ 18 **និង**
- `id` មិនមែនស្ថិតក្នុង Blacklist `[1001, 2002, 3003]`

ប្រើ `some` (ឬ `every`) មួយយ៉ាងហោចណាស់។

---

## 🔴 Hard — Real-World Scenarios

### លំហាត់ 16
បង្កើត Permission System៖

```js
const requiredPermissions = ["read", "write", "delete"];
const userPermissions     = ["read", "write", "delete", "admin"];
```

ប្រើ `every` និង `some` ដើម្បី៖
- [ ] ពិនិត្យថា User មាន **គ្រប់** Permission ដែលត្រូវការ → `hasAllPermissions`
- [ ] ពិនិត្យថា User មាន **យ៉ាងហោចណាស់ 1** Permission → `hasAnyPermission`

### លំហាត់ 17
បង្កើត `findCheapestInStock(products)` — Return Product ដែលមានតម្លៃថោកបំផុត ហើយ `stock > 0`។
> **Hint:** Filter មុន រួចប្រើ `reduce` ឬ Sort រួច `find`/`[0]`។

### លំហាត់ 18
បង្កើត Inventory Audit Function `auditInventory(products)` ដែល Return Object៖

```js
{
  allInStock:        false,  // every product has stock > 0?
  hasOutOfStock:     true,   // some product has stock === 0?
  firstOutOfStock:   { id: 102, name: "Pen", ... },  // find first
  firstOutOfStockAt: 1,      // findIndex
}
```

### លំហាត់ 19
បង្កើត Function `validateOrder(order, products)`៖

```js
const order = [
  { productId: 101, qty: 2 },
  { productId: 999, qty: 1 },
  { productId: 103, qty: 5 },
];
```

លក្ខខណ្ឌ៖
- [ ] **គ្រប់** `productId` ត្រូវមានក្នុង `products` (`every` + `some`)
- [ ] **គ្មាន** Item ណាមួយដែល `qty > stock` (`some` ត្រឡប់ `false`)
- [ ] Return `{ valid: true }` ឬ `{ valid: false, reason: "..." }`

### លំហាត់ 20
បង្កើត Mini Search Engine `searchUsers(query)` ដែល៖
- ទទួល Object Query ដូច៖ `{ minAge: 18, role: "student", active: true }`
- Return តែ Users ដែល **គ្រប់** Field ក្នុង Query Match
- ប្រើ `Object.entries(query).every(...)` រួម​ផ្សំ​ជាមួយ `filter`

```js
// Test:
searchUsers({ role: "student", active: true });
// → វិចិត្រ មិនរាប់ (admin), ដារា មិនរាប់ (inactive), សុភា + រតនា + សុខា ✅

searchUsers({ minAge: 20 });
// → វិចិត្រ, ដារា, រតនា
```

---

## ✅ ច្បាប់ Submit

1. ដាក់ Code ក្នុង File តែ 1 — `lesson12-practice.js`
2. មាន `console.log(...)` សម្រាប់រាល់លំហាត់ ដើម្បីពិនិត្យលទ្ធផល
3. ដាក់ Comment លេខលំហាត់នៅខាងលើ — `// --- លំហាត់ 1 ---`
4. Run ដោយ `node lesson12-practice.js`

---

## 🧠 ចំណាំ — ពេលណាប្រើមួយណា?

| ស្ថានភាព | ប្រើ |
|---------|------|
| ត្រូវការ **Object** ដំបូងដែលត្រូវ | `find` |
| ត្រូវការ **Position (index)** | `findIndex` |
| ពិនិត្យ **យ៉ាងហោចណាស់ 1** ត្រូវ → `true/false` | `some` |
| ពិនិត្យថា **គ្រប់ Element** ត្រូវ → `true/false` | `every` |
| ត្រូវការ **ច្រើន Elements** ដែលត្រូវ | `filter` (មិនមែន `find`) |

> **💡 Tip:** `some` និង `every` ឈប់ដើរនៅពេលរកឃើញចម្លើយ — លឿនជាង `filter().length > 0`។
