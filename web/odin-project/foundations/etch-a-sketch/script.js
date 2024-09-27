const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const gridSize = prompt("Enter a value between 0 and 100 to generate a grid","1");
    clearGrid(container);
    generate(gridSize, container);
});

function clearGrid(container) {
  container.innerHTML = '';
}

function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generate(size, container) {
  for (i = 0; i < size; ++i) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    container.appendChild(rowDiv);
    for (j = 0; j < size; ++j) {
      let columnDiv = document.createElement("div");
      columnDiv.classList.add('column')
      columnDiv.addEventListener("mouseover", (event) => {
        RGB = getRandomRGB();
        event.target.setAttribute("style", `background-color:${RGB};`);
      });
      //columnDiv.addEventListener("mouseout", (event) => {
      //  event.target.setAttribute("style", "background-color:white;");
      //});
      rowDiv.appendChild(columnDiv);
    }
  }
}

generate(16, container);
