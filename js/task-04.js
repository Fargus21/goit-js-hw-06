const counter = document.querySelector('#value');
const btnIncr = document.querySelector('[data-action="increment"]');
const btnDecr = document.querySelector('[data-action="decrement"]');

btnIncr.addEventListener('click', add);
btnDecr.addEventListener('click', remove);

let counterValue = 0;
function add () {
  counterValue += 1;
  counter.textContent = counterValue;
};
function remove() {
  counterValue -= 1;
  counter.textContent = counterValue;
};
