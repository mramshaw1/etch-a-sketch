const container = document.querySelector('.container');
const resizeGrid = document.querySelector('.resize-grid');
let clearGrid = document.querySelector('.clear-grid');

function genDivs(value) {



    for (let i = 0; i < value; i++) {
        let row = document.createElement('div');
        row.classList.add('theRows');

        for (let y = 0; y < value; y++) {
            let column = document.createElement('div');
            column.classList.add('theColumns');
            row.appendChild(column)        
            container.appendChild(row);

        }
        let column = document.querySelectorAll('.theColumns');
        column.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = "black";
        }));

    }
    resetGrid = () => {
        let column = document.querySelectorAll('.theColumns');
        column.forEach(box => {
            box.style.backgroundColor = "white";
            console.log("clear")
        })
}
clearGrid.addEventListener('click', resetGrid);
resizeGrid.addEventListener('click', function(){
    let value = prompt("please eneter the size of grid you would like");
    if (typeof value !== 'number'){
        return
    }
    genDivs(value)
})
}


genDivs(10)







