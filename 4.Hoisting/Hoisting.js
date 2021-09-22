// 1. var, function declaration

console.log(age); // ReferenceError: age is not defined
var age = 23;
console.log(age); // 23

console.log(sum(1, 2)); // 3
function sum(a, b) {
  return a + b;
}

// 2. let, const

{
  console.log(fullName); // ReferenceError: Cannot access 'fullName' before initialization
  let fullName = "John Doe";
}
