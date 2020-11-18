const inputSizeCtrl = document.getElementById('font-size-control');
const span = document.querySelector('span#text')

inputSizeCtrl.addEventListener('input', (e) => {
    span.style.fontSize = e.target.value +'px';
})

