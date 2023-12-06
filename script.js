function creationOfCells(num){
    const element = document.createElement('div');
    element.classList.add('square');
    element.innerText=num;

    return element;
}

 const grid=document.getElementById('grid');

 for(let i=0; i<100; i++){
    let square = creationOfCells(i+1);
    square.addEventListener('click', function(){
    })
    grid.appendChild(square);
}

function creationOfTheGridBasedOnLevels(){
    document.getElementById('grid').innerHTML='';
    let levelSelector=document.getElementById('difficulty');
    let level = parseInt(levelSelector.value);
    let cellTotal;
    let sideCells;

    switch(level){
        case 1:
            cellTotal=100;
            sideCells=10;
            break;
        case 2:
            cellTotal=100;
            sideCells=10;
            break;
        case 2:
            cellTotal=81;
            sideCells=9;
            break;
        case 2:
            cellTotal=64;
            sideCells=8;
            break;
        default:
            cellTotal=100;
            sideCells=10;
    }
}