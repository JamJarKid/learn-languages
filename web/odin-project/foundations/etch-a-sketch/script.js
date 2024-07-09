const container = document.querySelector(".container");
//document.addEventListener("DOMContentLoaded", (container) => {
//  generate(16, container);
//});

function generate(size, container) {
  for (i = 0; i < size; ++i) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    container.appendChild(rowDiv);
    for (j = 0; j < size; ++j) {
      let columnDiv = document.createElement("div");
      columnDiv.className = "column";
      columnDiv.addEventListener("mouseover", (event) => {
        event.target.setAttribute("style", "background-color:red;");
      });
      columnDiv.addEventListener("mouseout", (event) => {
        event.target.setAttribute("style", "background-color:white;");
      });
      rowDiv.appendChild(columnDiv);
    }
  }
}

generate(16, container);
