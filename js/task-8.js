const divCtrls = document.getElementById("controls");
const divBox = document.getElementById("boxes");
const div = document.querySelector("div");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('[type="number"]');
let divAmount;

function createDivs(amount) {
  let r = 0;
  let g = 0;
  let b = 0;
  let x = 30;

  for (let i = 0; i < amount; i += 1) {
    r = Math.floor(Math.random() * (255 - 1) + 1);
    g = Math.floor(Math.random() * (255 - 1) + 1);
    b = Math.floor(Math.random() * (255 - 1) + 1);
    x += 10;
    const newDiv = document.createElement("div");
    newDiv.style.width = x + "px";
    newDiv.style.height = x + "px";
    newDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    divBox.append(newDiv);
  }
}

input.addEventListener("blur", (e) => {
  divAmount = e.target.value;
  console.log(divAmount);
});

divCtrls.addEventListener("click", (e) => {
  if (e.target === renderBtn) {
    createDivs(divAmount);
  }
  if (e.target === destroyBtn) {
    let divToDel = divBox.children;
    for (let i = divToDel.length - 1; i >= 0; --i) {
      divToDel[i].remove();
    }
  }
});
