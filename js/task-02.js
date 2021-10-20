const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const ingredientEl = document.querySelector('#ingredients');

const liElements = ingredients.map((ingredient) => {
  
  const elementLi = document.createElement('li');
  elementLi.textContent = ingredient;
  elementLi.classList.add('item');

  return elementLi;
});

console.log(liElements);
ingredientEl.append(...liElements);
