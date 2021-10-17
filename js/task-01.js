const categoriesEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(category => {
  console.log(category.querySelector(`h2`).textContent)
  console.log(category.querySelectorAll(`li`).length)
  
});




