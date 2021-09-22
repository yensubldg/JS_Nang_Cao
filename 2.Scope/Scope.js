// Global
var mess = "Học về Scope";

// Code Block: if else, for, while, do while, ...
{
  const age = 20;
  console.log(age);
}

// console.log(age); // ReferenceError: age is not defined

// Local Scope
function test() {
  var fullName = "Nguyễn Văn A";
  console.log(fullName);
}
test();

// console.log(fullName); // ReferenceError: fullName is not defined
