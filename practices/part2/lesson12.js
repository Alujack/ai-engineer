const users = [
  { id: 1, name: "វិចិត្រ" },
  { id: 2, name: "ម៉ាឡែន" },
  { id: 2, name: "សុភា" },
  { id: 3, name: "ដារា" },
];

// // រក Element ដំបូងដែលត្រូវនឹងលក្ខខណ្ឌ
// const user = users.find(u => u.id === 2);
// console.log(user); // { id: 2, name: "ម៉ាឡែន" }

// រក Index
const index = users.findIndex(u => u.id === 2);
console.log(index); // 1

// មិនរកឃើញ
const nope = users.find(u => u.id === 99);
console.log(nope); // undefined