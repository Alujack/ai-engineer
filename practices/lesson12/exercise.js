const users = [
  { id: 1, name: "វិចិត្រ", age: 22, role: "admin",   active: true,  email: "vichet@example.com" },
  { id: 2, name: "សុភា",   age: 17, role: "student", active: true,  email: "sopha@example.com"  },
//   { id: 3, name: "ដារា",   age: 30, role: "teacher", active: false, email: "dara@example.com"   },
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



//Exercise1
const thirduser = users.find((user)=> user.id ===3)
console.log(thirduser.name)

//Exercise2
const teacher = users.find((user)=> user.role ==="teacher")
console.log(teacher ? teacher.name :  "គ្មានគ្រូ")

//Exercise3
//រក **Index** របស់ Product ដែលឈ្មោះ `"Bag"` ។ បន្ទាប់មកប្តូរ `price` ជា `30`។
const bagIndex = products.findIndex((product) => product.name === "Bag");
if (bagIndex !== -1) {
    products[bagIndex].price = 30;
}
console.log(products[bagIndex].name, products[bagIndex].price);