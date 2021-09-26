const $ = document.querySelector.bind(document);

const app = (() => {
  const cars = [];

  const root = $("#root");
  const input = $("input");
  const submit = $("button");

  return {
    add(car) {
      cars.push(car);
    },
    deleteCar(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map((car, index) => {
          return `
            <div class="car">
            ${car}
            <button class="delete" data-index="${index}">Delete</button>
            </div>
        `;
        })
        .join("");

      root.innerHTML = html;
    },
    handleDelete(e) {
      // closest() method returns the closest ancestor of the current element
      const delBtn = e.target.closest(".delete");
      if (delBtn) {
        // dataset is a special property that allows to access data-* attributes
        const index = delBtn.dataset.index;
        this.deleteCar(index);
        this.render();
      }
    },
    init() {
      submit.onclick = () => {
        this.add(input.value);
        this.render();
      };

      root.onclick = this.handleDelete.bind(this);
      this.render();
    },
  };
})();

app.init();
