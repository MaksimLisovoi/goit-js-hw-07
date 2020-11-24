const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsList = document.getElementById("ingredients");

const list = ingredients.map((el) => {
  const listItems = document.createElement("li");
  listItems.textContent = el;
  return listItems;
});

ingredientsList.append(...list);
