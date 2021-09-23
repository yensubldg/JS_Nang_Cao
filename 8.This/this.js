function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.run = function () {
    return this;
  };
}

const BMW = new Car("BMW", "black", "2.5");
