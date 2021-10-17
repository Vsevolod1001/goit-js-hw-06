const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);
function onSubmit(event){
    event.preventDefault();
    if (event.currentTarget.elements.password.value === '' ||
     event.currentTarget.elements.email.value === ''){
         alert('All form fields must be filled out!');
     } else {
         const userInformation = {
             email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value 
        };
        console.log(userInformation);
        event.currentTarget.reset();
     }
    
    
}
