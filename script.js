
function genDivs(x,j){
    const container = document.querySelector('.container');
    
    
    for(let i = 0; i<x; i++){
        const row = document.createElement('div');
        row.classList.add('theRows');

    for(let y = 0; y<j; y++){
        const column = document.createElement('div');
        column.classList.add('theColumns');
        row.appendChild(column)
    }
                    container.appendChild(row);

}

}
genDivs(16,16)

// const div = document.createElement('div');
// div.classList.add('theDiv');
// div.textContent = "this is a div"
    

