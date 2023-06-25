const container = document.getElementById("container");

function createGrid(row, col) {
    for( let i = 0; i < row; i++){
        for(let j = 0; j < col; j++) {
            const gridItem = document.createElement("div");
            gridItem.className = "gridItem";
            container.appendChild(gridItem);
        }
    }
}

createGrid(16, 16);