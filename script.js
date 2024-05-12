// defining size of the grid
const CONTAINER = document.querySelector('#container');
const GRID_SIZE = 16;

// function: creating the grid
function createGrid () {
    for (let i = 0; i < GRID_SIZE; i++) {
        const ROW = document.createElement('div');
        ROW.className = "row";
    
        for (let j = 0; j < GRID_SIZE; j++) {
            const CELL = document.createElement('div');
            CELL.className = "cell";
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
