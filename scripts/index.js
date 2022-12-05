let form = document.querySelector('.apparel form');
let validation_msg = document.createElement('div');
validation_msg.classList.add("validation_msg");
form.append(validation_msg);

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email_value = form.querySelector('.email').value;
    if (email_value.match(validRegex)){
        form.classList.remove('error');
        validation_msg.innerHTML = "You have entered a valid email address!";
    }else{
        form.classList.add('error');
        validation_msg.innerHTML = "Please provide a valid email";
    }
});