const GRID_MEASURE = 500;
const INITIAL_DIM = 8;
const grids = document.querySelector(".grids");
const clean = document.querySelector(".clean");
const normal = document.querySelector(".normal");
const eraser = document.querySelector(".eraser")
const slider_text = document.querySelector(".slider-text");
const rgb = document.querySelector(".rgb");
let input = document.querySelector("input");
let dim = INITIAL_DIM;
let mode = "normal";  

// Create the initial grid
createGrid(INITIAL_DIM);


// give the dimensions of the grid above the slider

input.addEventListener("input", (e) => { 
    slider_text.textContent = `${e.target.value} by ${e.target.value}`;
})

// Listen for mode change
normal.addEventListener("click", () => {
    mode = 'normal';  // Set mode to normal
    resetGrids();
});
rgb.addEventListener("click", () => {
    mode = 'rgb';  // Set mode to RGB
    resetRGBGrids();
});

// Listen for input changes (dimension changes) - only attach once
input.addEventListener("input", (e) => {
    dim = e.target.value;
    if (mode === 'normal') {
        changeGrids();
    } else if (mode === 'rgb') {
        changeGridsRGB();
    }
});

function changeGrids() {
    grids.innerHTML = '';  
    createGrid(dim);
}

function changeGridsRGB() {
    grids.innerHTML = '';  
    createRGBGrids(dim);
}

function resetGrids() {
    grids.innerHTML = '';  
    createGrid(dim);
}

function resetRGBGrids() {
    grids.innerHTML = '';  
    createRGBGrids(dim);
}

function createGrid(dim) {
    for (let i = 1; i <= dim * dim; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        grid.style.backgroundColor = "white";
        grid.style.width = `${GRID_MEASURE / dim}px`;
        grid.style.height = `${GRID_MEASURE / dim}px`;

        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = "black";
        });

        eraser.addEventListener("click", () => {
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = "white";
            });
        });

        grids.appendChild(grid);
    }
}

function createRGBGrids(dim) {
    for (let i = 1; i <= dim * dim; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        grid.style.backgroundColor = "white";
        grid.style.width = `${GRID_MEASURE / dim}px`;
        grid.style.height = `${GRID_MEASURE / dim}px`;

        grid.addEventListener('mouseover', () => {
            let x = Math.floor(Math.random() * 255);
            let y = Math.floor(Math.random() * 255);
            let z = Math.floor(Math.random() * 255);
            grid.style.backgroundColor = `rgb(${x},${y},${z})`;
        });

        eraser.addEventListener("click", () => {
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = "white";
            });
        });

        grids.appendChild(grid);
    }
}
