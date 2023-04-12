
let container = document.querySelector('.container');
const resetbtn = document.querySelector('.reset-button');
const gridSize = document.querySelector('.grid-size');

generateGrid(16)

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
draw();

}
function draw(){
    let columns = document.getElementsByClassName('column');
    for (let i =0; i<columns.length; i++){
    columns[i].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black"
}) }
}

gridSize.addEventListener('click', function (){
    const value = prompt("please choose a number for your grid size")
    container.textContent = ''
    generateGrid(value)
})

resetbtn.addEventListener('click', function() {
    let columns = document.querySelector('column');
    for(let i = 0; i<columns.length; i++){
        columns.style.backgroundColor = "white"
    }
})





