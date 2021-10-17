function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
changeColor.addEventListener('click', event => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
})
