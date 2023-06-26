const container = document.getElementById("container");

function randomRGB(){
    const rgb = Math.floor(Math.random() * 360) + 1;
    return rgb
}

//create grid function
function createGrid(row, col) {
    for( let i = 0; i < row; i++){
        for(let j = 0; j < col; j++) {
            const gridItem = document.createElement("div");
            gridItem.className = "gridItem";
            container.appendChild(gridItem);
        }
    }
}
let slider = document.getElementById("gridSize");
container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

createGrid(slider.value, slider.value);

//change grid size according to slider
slider.addEventListener("input", () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    createGrid(slider.value, slider.value)
    container.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener("mouseover", paint);
      }
});

let gridItems  = document.getElementsByClassName("gridItem");
//change color when hovered
for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseover", paint);
  }

  const black = document.getElementById("black");
  const psy = document.getElementById("psy");
  const modern = document.getElementById("modern");

//change data attribute value accoording to button clicked
  black.addEventListener("click", () => {container.setAttribute("data-color","classic")})
  psy.addEventListener("click", () => {container.setAttribute("data-color","psychedelic")})
  modern.addEventListener("click", () => {container.setAttribute("data-color","modern")})

  //default value as black
  container.setAttribute("data-color","classic")
  const attributeValue = container.getAttribute("data-color");

//select the color according to datatype 
function paint(){
    const attributeValue = container.getAttribute("data-color");
    if (attributeValue == "classic"){
        this.style.backgroundColor = "black"
    }
    if (attributeValue == "psychedelic"){
        this.style.backgroundColor = `hsl(${randomRGB()}, 60%, 70%)`
    }

    // this.style.backgroundColor = "black"
    // this.style.backgroundColor = `hsl(${randomRGB()}, 60%, 70%)`
    // this.style.backgroundColor = '#ffffff';
    // this.style.backgroundColor = "rgba(0, 0, 0, .5)"
}