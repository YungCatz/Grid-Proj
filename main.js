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

function resize() {
    update();
    createSquares();
}
