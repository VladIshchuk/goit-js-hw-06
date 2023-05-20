const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const element = ingredients.map(el => {
  const newEl = document.createElement(`li`);
  newEl.textContent = el;
  newEl.classList.add("item")

  return newEl
})

const ingredientsList = document.querySelector(`ul`);
ingredientsList.append(...element);
console.log(ingredientsList);

