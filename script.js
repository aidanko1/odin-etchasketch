// defining size of the grid
const CONTAINER = document.querySelector('#container');
let gridSize = 16;

// function: creating the grid
function createGrid () {
    CONTAINER.innerHTML = '';

    const cellSize = 960 / gridSize;
    
    for (let i = 0; i < gridSize; i++) {
        const ROW = document.createElement('div');
        ROW.className = "row";
    
        for (let j = 0; j < gridSize; j++) {
            const CELL = document.createElement('div');
            CELL.className = "cell";
            CELL.style.width = cellSize + 'px';
            CELL.style.height = cellSize + 'px';
            CELL.addEventListener('mouseover', () => paintCell(CELL));
            ROW.appendChild(CELL);
        }

        CONTAINER.appendChild(ROW);
    }
}

createGrid();

// function: paint cell black
function paintCell(cell) {
    cell.style.backgroundColor = 'black';
}

// create button element on the top of the page
const BUTTON = document.querySelector('#changeSize');

function promptGridSize () {
    console.log("prompt function called");
    let newGridSize = prompt('Enter the number of squares per side (max 100)');
    newGridSize = parseInt(newGridSize);

    if (isNaN(newGridSize)) {
        alert('Invalid input. Please enter a valid number');
        return;
    } else if (newGridSize < 1 || newGridSize > 100) {
        alert('Invalid input. Please a number between 1 and 100.');
        return;   
    } else {
        gridSize = newGridSize;
        createGrid();
    }
}

BUTTON.addEventListener('click', promptGridSize);