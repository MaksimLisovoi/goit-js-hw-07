const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.getElementById('ingredients')


ingredients.forEach(el => {
    const listItems = document.createElement('li')
    listItems.textContent = el;
    // console.log(listItems);
    ingredientsList.appendChild(listItems);
   
});

 console.log(ingredientsList);
  
    

