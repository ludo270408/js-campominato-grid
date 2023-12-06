function creationOfCells(num, row_cells){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width='calc(100% / $(row_cells))';
    square.style.height=square.style.width;
    square.innerText=num;
    return square;
}
let cellTotal;

function creationOfTheGrid(cellTotal, row_cells){
    for(let i=0; i<cellTotal; i++){
        let cell = creationOfCells(i);
        cell.addEventlistener('click', function(){
            this.classList.add('clicked');
            console.log(this. innerText);
        });
        grid.appendChild(cell);
    }
}

function GameStart(){
    const grid=document.getElementById('grid'); 
    const difficulty= document.getElementById('difficulty');
    let level= difficulty.value;
    switch(level){
        case 1:
                cellTotal=100;
                break;
        case 2:
                cellTotal=100;
                break;
        case 3:
                cellTotal=81;
                break;
        case 4:
                cellTotal=64;
                break;
        
        default:
                
    }
    let cellsRow=Math.sqrt(CellsTotal);
    grid.innerHTML=' ';

    creationOfTheGrid(cellsRow, cellTotal);
}

const play_button=document.getElementById('play');
play_button.addEventListener('click', function (){
    GameStart();
})
