var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

document.addEventListener("DOMContentLoaded", closestSquare);

window.onresize = resize;

const grid = document.getElementById('grid');

const squareInfo = {
    width: 50,
    height: 50,
    color: "#bc8a5f",
    margin: 1,
};

let rows;
let column;
let rowsAndColumns;

const square = document.createElement('div');
square.classList.add('inner-grid');
square.setAttribute('onmouseover', 'closestSquare()');

const gridStyle = document.createElement('style');
document.head.appendChild(gridStyle);

function update() {
    let screenWidth = window.innerWidth;
    let screenHeigth = window.innerHeight;

    rows = Math.ceil(screenWidth / (squareInfo.width + squareInfo.margin));
    column = Math.ceil(screenHeigth / (squareInfo.height + squareInfo.margin));
    rowsAndColumns = rows * column;


    document.getElementById("rows").innerHTML = `Rows: ${column}`;
    document.getElementById("column").innerHTML = `Columns: ${rows}`;
    document.getElementById("rowscolumns").innerHTML = `Rows * Columns: ${rowsAndColumns}`;
    document.getElementById("squareChilds").innerHTML = `Squares: ${grid.children.length}`;

    console.log(`${grid.children.length}`)
}

function createSquares() {

    if (grid.children.length < rowsAndColumns) {
        for (let i = grid.children.length; i < rowsAndColumns; i++) {

            grid.appendChild(square.cloneNode(true));
            grid.style.gridTemplateColumns = "repeat(" + rows + ", " + squareInfo.width + "px )";

        }
    }
    else if (grid.children.length > rowsAndColumns) {
        for (let j = grid.children.length; j > rowsAndColumns; j--) {

            grid.removeChild(grid.lastChild);
            grid.style.gridTemplateColumns = "repeat(" + rows + ", " + squareInfo.width + "px )";

        }
    }
}

/*function closestSquare() {
    let hoveredElements = document.querySelectorAll(':hover');

    hoverdElements.style.

        console.log(hoverdElements);
}*/


function closestSquare() {
    let elementsUI = document.querySelectorAll('.inner-grid');
    elementsUI.className == 'inner-grid';
    elementsUI.forEach(function (item) {
        item.addEventListener("mouseenter", show);
        item.addEventListener("focus", show);
        item.addEventListener("mouseleave", hide);
        item.addEventListener("focusout", hide);
    });
}


function hide(event) {
    if (event.srcElement !== document.querySelector(":hover")) {
        event.srcElement.className = 'inner-grid';
    }
}
function show(event) {
    event.srcElement.className = 'selected';
}

function resize() {
    update();
    createSquares();
}
