let counterValue = document.getElementById('value');
let mainValue = parseInt(counterValue.textContent);

const decrBtn = document.querySelector('[data-action="decrement"]')
const incrBtn = document.querySelector('[data-action="increment"]')

decrBtn.addEventListener('click', decrement)
incrBtn.addEventListener('click', increment);

function increment() {
    mainValue += 1;
    counterValue.textContent = mainValue;
}
function decrement() {
    mainValue -= 1;
    counterValue.textContent = mainValue;
}



