
let container = document.querySelector('.container');
const resetbtn = document.querySelector('.reset-button');
const gridSize = document.querySelector('.grid-size');

function generateGrid(size){
    for(let i = 1; i<=size; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for(let i = 1; i<= size; i++){
        const column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column)
    }
    }


}

generateGrid(16)


