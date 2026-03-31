// Function Declaration - អាចហៅបានមុនការកំណត់ (hoisting)
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// console.log(greet("malen"));

// // Function Expression - មិនមាន hoisting
// const greet =  function(name){
//   return "Hello, " + name + "!";
// };




// // Arrow Function (ES6)
// const greet = (name) => {
//     return  "Hello, " + name + "!";
// }
    
const greet = (name) => "Hello, " + name + "!";
console.log(greet("malen"));