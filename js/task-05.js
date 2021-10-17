const inputValue = document.querySelector('#name-input');
const spanValue = document.querySelector('#name-output');
inputValue.addEventListener('input', event => {
   if (event.currentTarget.value === ''){
   spanValue.textContent = 'Anonymous'
   } else {
    spanValue.textContent = event.currentTarget.value;
    console.log(spanValue)
   }
})