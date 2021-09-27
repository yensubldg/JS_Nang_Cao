import html from "../core.js";
import { connect } from "../store.js";

const connector = connect();
function App({ cars }) {
  return html`
    <ul>
      ${cars.map((car) => html` <li>${car}</li> `)}
    </ul>

    <button onclick="dispatch('ADD', 'Porsche')" ;>Add Car</button>
  `;
}

export default connector(App);
