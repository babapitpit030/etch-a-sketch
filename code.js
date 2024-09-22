const GRID_MEASURE = 660;
const INITIAL_DIM = 8;
const grids = document.querySelector(".grids");
const button = document.querySelector("button");
let input = document.querySelector("input");
let dim = 8;

// Create the initial grid
createGrid(INITIAL_DIM);

// Listen for input changes
input.addEventListener("input", changeGrids);
button.addEventListener("click",  resetGrids);

function changeGrids(e) {
    dim = e.target.value;
    grids.innerHTML = '';  // This removes all child elements
    createGrid(dim);
}

function resetGrids() {
    grids.innerHTML = '';  // This removes all child elements
    createGrid(dim);
}

function createGrid(dim) {
    for (let i = 1; i <= dim * dim; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        // Set background-color, width, and height
        grid.style.backgroundColor = "white";
        grid.style.width = `${GRID_MEASURE / dim}px`;
        grid.style.height = `${GRID_MEASURE / dim}px`;
        grid.style.outline = "solid 1px black";

        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = "black";
        });

    
        grids.appendChild(grid);
    }
}






