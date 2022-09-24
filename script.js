let size = 16; //Default grid size 16


const gridContainer = document.querySelector('.grid-container');

const grid = document.createElement('div');
grid.setAttribute('id', 'grid');
gridContainer.appendChild(grid);


function setGridSize(scale) {
    for (let i = 0; i < scale ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-item');
        grid.appendChild(gridSquare);
    };
    grid.style.cssText = `grid-template-columns: repeat(${scale}, 1fr)`;
}

setGridSize(32);