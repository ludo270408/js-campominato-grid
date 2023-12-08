function creationOfCells(num, numberForSide){
    const element = document.createElement('div');
    element.classList.add('square');
    let sideLenght = 'calc(100vw / ${numberForSide})';
    const grid = document.getElementById('grid');
    grid.style.width = numberForSide * sideLenght;
    grid.style.height = numberForSide * sideLenght;
    element.style.width = sideLenght;
    element.style.height= sideLenght;

    const span = document.createElement('span');
    element.appendChild(span);

    element.innerText=num;

    return element;
}

function createNewMatch(){
    document.getElementById('grid').innerHTML = '';
    let levelChosen = document.getElementById('difficulty');
    let level = parseInt(levelChosen.value);

    let numberOfCells;
    let cellsPerSide;
    switch(level){
        case 1: 
            numberOfCells = 100;
            cellsPerSide = 10;
            break;
        case 2:
            numberOfCells = 100;
            cellsPerSide = 10;
            break;
        case 3:
            numberOfCells = 81;
            cellsPerSide = 9;
            break;
        case 4:
            numberOfCells = 64;
            cellsPerSide = 8;
            break;
        default: 
        numberOfCells = 100;
        cellsPerSide = 10;
        break;        
    }

    createPlayground(cellsPerSide, numberOfCells);
}

function createPlayground(totCells, cellsPerSide){
    const grid = document.getElementById('grid'); 
    for(let i=0; i<totCells; i++){
        let square = creationOfCells(i+1, cellsPerSide);
    
        square.addEventListener('click', function(){
            this.classList.toggle('clicked');
        });
        
        grid.appendChild(square);
    }
}

document.getElementById('play').addEventListener( 'click', function(){
    createNewMatch();
})
