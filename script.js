
function genDivs(x,j){
    const container = document.querySelector('.container');
    
    
    for(let i = 0; i<x; i++){
        const row = document.createElement('div');
        row.classList.add('theRows');

    for(let y = 0; y<j; y++){
        const column = document.createElement('div');
        column.classList.add('theColumns');
        row.appendChild(column)
        column.addEventListener('mouseover',(event) => {
        event.target.style.background = "black";
});
}
                    container.appendChild(row);

}


}





genDivs(16,16)


    

