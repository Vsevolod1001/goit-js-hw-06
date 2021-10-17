const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 
const newIngr = document.querySelector('#ingredients');

const newEl1 = document.createElement('li');
newEl1.classList.add('item');
newEl1.textContent = 'Potatoes';

const newEl2 = document.createElement('li');
newEl2.classList.add('item');
newEl2.textContent = 'Mushrooms';

const newEl3 = document.createElement('li');
newEl3.classList.add('item');
newEl3.textContent = 'Garlic';

const newEl4 = document.createElement('li');
newEl4.classList.add('item');
newEl4.textContent = 'Tomatos';

const newEl5 = document.createElement('li');
newEl5.classList.add('item');
newEl5.textContent = 'Herbs';

const newEl6 = document.createElement('li');
newEl6.classList.add('item');
newEl6.textContent = 'Condiments';

newIngr.append(newEl1, newEl2, newEl3, newEl4, newEl5, newEl6)
console.log(newIngr)
