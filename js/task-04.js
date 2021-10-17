let counterValue = 0;
let btnPlus = document.querySelector('button[data-action="increment"]');
let btnMin = document.querySelector('button[data-action="decrement"]');
const buttonClick = event => {
  console.log (counterValue += 1);
  document.querySelector('#value').textContent = counterValue;
}
const buttonClose = event => {
    console.log(counterValue -= 1);
    document.querySelector('#value').textContent = counterValue;
}
btnPlus.addEventListener("click", buttonClick);
btnMin.addEventListener("click", buttonClose);