const items = document.querySelectorAll('.item')

items.forEach((el) => {
    console.log(`Категория: ${el.children[0].textContent}, Количество элементов: ${el.children[1].childElementCount}`);
})

