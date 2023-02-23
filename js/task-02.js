const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const ingredientsItem = ingredients.map(ingredient => {
  let item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});
list.append(...ingredientsItem);
console.log(ingredientsItem)
