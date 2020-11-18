const input = document.getElementById('validation-input');
const inputLength = parseInt(input.attributes[2].value);

input.addEventListener('blur', (event) => {
   
    if (parseInt(event.target.value.length) !== inputLength) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
});

