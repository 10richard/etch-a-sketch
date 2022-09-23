
const body = document.querySelector('body');
const defaultBlack = document.querySelector('#default-black');
const rainbow = document.querySelector('#rainbow');
const clear = document.querySelector('#clear');
const gridContainer = document.querySelector('.grid-container');

const grid = document.createElement('div');
grid.setAttribute('id', 'grid');
gridContainer.appendChild(grid);

//Creates a 16x16 grid
function createDefaultGrid() {
    for (let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-item');
        grid.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', () => {
            gridSquare.classList.add('black');
        });
    }
}

function changeRainbow() {
    
}

function clearGrid() {
    const gridSquares = document.querySelectorAll('.grid-item');
    gridSquares.forEach(gridSquare => {
        gridSquare.classList.remove('black', 'rainbow');
    });
}

function changeGrid() {

}

rainbow.addEventListener('click', changeRainbow);
clear.addEventListener('click', clearGrid);

createDefaultGrid()