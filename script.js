function creationOfCells(num){
    const square = document.createElement('div');
    square.classList.add('square');
    span.innerText=num;
    square.appendChild(span);

    return element;
}

function ctreationOfTheGrid(){
    const grid=document.getElementById('grid'); 
    const difficulty= document.getElementById('difficulty');
    let level= difficulty.value
}

 for(let i=0; i<100; i++){
    let cell = creationOfCells();
    grid.appendChild(square);
}

function creationOfTheGridBasedOnLevels(){
    document.getElementById('grid').innerHTML='';
    let levelSelector=document.getElementById('difficulty');
    let level = parseInt(levelSelector.value);
    square.addEventListener('click', function(){
    })
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