const items = document.querySelectorAll(".item");
console.log(`В списке ${items.length} категории.`);

items.forEach((el) => {
  console.log(
    `Категория: ${el.children[0].textContent}, Количество элементов: ${el.children[1].childElementCount}`
  );
});
