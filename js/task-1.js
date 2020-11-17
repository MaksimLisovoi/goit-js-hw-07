const categoriesList = document.querySelector('#categories')
const headers = document.querySelectorAll('h2')
const itemsList = document.querySelectorAll('#categories .item ul')

console.log(`В списке ${categoriesList.children.length} категории.`);

console.log(`Категория: ${headers[0].textContent}, Количество элементов: ${itemsList[0].childElementCount}`);
console.log(`Категория: ${headers[1].textContent}, Количество элементов: ${itemsList[1].childElementCount}`);
console.log(`Категория: ${headers[2].textContent}, Количество элементов: ${itemsList[2].childElementCount}`);



// headers.forEach((elem)=>{
// console.log(elem.textContent)
// })


// itemsList.forEach((elem)=>{
// console.log(`Количество элементов: ${elem.children.length}`)
// })

// console.log(`Категория: ${elem.textContent}`);
// console.log(`Количество элементов: ${elem.children.length}`);