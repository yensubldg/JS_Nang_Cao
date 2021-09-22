// Value types
let a = 1;
let b = a;

a = 2;

console.log(b); // 1

// Reference types
let c = {
  name: "John",
};

let d = c;

c.name = "Pete";

console.log(d.name); // Pete

function func(obj) {
  obj.name = "Mes";
  console.log(obj.name);
}

const a = {
  name: "BMW",
};
const b = {
  name: "BMW",
};

console.log(a === b);

func(a);
console.log(a.name);
