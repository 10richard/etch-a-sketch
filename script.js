let click = false;
let black = true;
const rainbowChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const gridContainer = document.querySelector('.gridContainer');
const changeGrid = document.getElementById('changeGrid');
const blackColor = document.getElementById('black');
const rainbowColor = document.getElementById('rainbow');
const clearGrid = document.getElementById('clear');
const changeGridBtn = document.querySelector('.changeGridBtn');
let inputGridVal = document.getElementById('inputGridVal');
let currentGridSize = document.querySelector('.currentGridSize');
let gridMessage = document.querySelector('.gridMessage');

let colorMode = document.querySelector('.mode');

function checkGrideResize() {
    let gridVal = inputGridVal.value;
    if (gridVal <= 1 || gridVal > 100) {
        gridMessage.textContent = `Cannot resize grid to ${gridVal}x${gridVal}`;
    } else {
        currentGridSize.textContent = `Current Size: ${gridVal}x${gridVal}`;
        gridMessage.textContent = `Resized grid to ${gridVal}x${gridVal}`;
        setGrid(gridVal)
    }
}

function setGrid(scale) {
    const gridSquares = document.querySelectorAll('.gridItem');
    gridSquares.forEach(gridSquare => {gridContainer.removeChild(gridSquare)});
    for (let i = 0; i < scale ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridItem');
        gridSquare.addEventListener('mouseover', colorSquare);
        gridContainer.style.cssText = `grid-template-columns: repeat(${scale}, 1fr)`;
        gridContainer.appendChild(gridSquare);
    }
}

setGrid(16);

function colorSquare() {
    if (click) {
        colorMode.textContent = 'Color Mode: On';
        colorMode.classList.add('active');
        if (black) {
            this.style.cssText = 'background-color: black';
        } else {
            let randomNum = Math.floor(Math.random(0) * 6);
            let rainbow = rainbowChoices[randomNum];
            this.style.cssText = `background-color: ${rainbow}`
        }
    } else {
        colorMode.textContent = 'Color Mode: Off';
        colorMode.classList.remove('active');
    }
}

function resetGrid() {
    const gridSquares = document.querySelectorAll('.gridItem');
    gridSquares.forEach(gridSquare => {
        gridSquare.style.cssText = 'background-color: white';
    })
}

changeGridBtn.addEventListener('click', checkGrideResize);

gridContainer.addEventListener('click', () => {
    click = !click;
});

clearGrid.addEventListener('click', resetGrid);

rainbowColor.addEventListener('click', () => {
    black = false;
});

blackColor.addEventListener('click', () => {
    black = true;
});