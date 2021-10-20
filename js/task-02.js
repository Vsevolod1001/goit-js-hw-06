const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const ingredientEl = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const liEl = document.createElement('li')
  liEl.classList.add('item')
  liEl.textContent = element
  ingredientEl.append(liEl)
  
});

