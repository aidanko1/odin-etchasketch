/*
Goal: create a 16x16 grid using functions on .js
1. defining the size of the grid
2. declare a function
3. using loop to creates 16 rows
3. create 16 grids cells per row
4. append the grid cells in to each row
5. append the whole grid into <div class="container">
*/


// defining size of the grid
const CONTAINER = document.querySelector('container');
const GRID_SIZE = 16;

// function: creating the grid
function createGrid () {
    for (let i = 0; i < GRID_SIZE; i++) {
        const ROW = document.createElement('div');
        ROW.className = "row";
    
        for (let j = 0; j < GRID_SIZE, j++) {
            const CELL = document.createElement('div');
            CELL.className = "cell";
            ROW.appendChild(CELL);
        }

        CONTAINER.appendChild("ROW");
    }
}

createGrid();

