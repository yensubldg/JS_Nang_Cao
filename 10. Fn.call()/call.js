function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Chicken(name, weight, legs) {
  Animal.call(this, name, weight);
  this.legs = legs;
}

const chicken = new Chicken("Thang Truong", 47, 2);

console.log(chicken);

// bind() is used to create a copy of a function with a preset this value.
// call() is used to call a function with a preset this value.
