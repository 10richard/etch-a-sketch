
const body = document.querySelector('body');
const grid = document.createElement('div');
grid.setAttribute('id', 'grid');
body.appendChild(grid);

function createDefaultGrid() {
    for (let i = 0; i < 256; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-item');
        grid.appendChild(gridSquare);
    }
}

function

createDefaultGrid()