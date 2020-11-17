const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', (event) => {
    event.target.value != "" ? output.textContent = event.target.value : output.textContent = 'незнакомец';

})
