// Function Expression
const IIFE = function () {
  console.log("IIFE");
};

// IIFE
const app = (function () {
  // Private
  const cars = [];

  return {
    add(c) {
      cars.push(c);
    },
    edit(c, index) {
      cars[index] = c;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();
