
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
    }
}

function checkHover(gridItem) {
    gridItem.addEventListener('click', () => {
        gridItem.classList.add = ("black");
    });
}

function changeRainbow() {
    
}

function clearGrid() {

}

function changeGrid() {

}

rainbow.addEventListener('click', changeRainbow);
clear.addEventListener('click', clearGrid);

createDefaultGrid()