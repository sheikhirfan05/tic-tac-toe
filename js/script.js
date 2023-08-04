const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const startCells = [
    "" , "" , "" , "" , "" , "" , "" , "" , ""
];

let go = "circle";
infoDisplay.textContent = "Circle goes first";


function createBoard(){
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo);
        gameBoard.append(cellElement);
    });
};
createBoard();


function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);

    go = go === 'circle' ? "cross" : "circle"
    infoDisplay.textContent = "It is now " + go + "'s go.";
    e.target.removeEventListener("click", addGo);
    checkScore();
}

function checkScore(){
    const allSquares = document.querySelectorAll(".square");
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    console.log(allSquares[4]);

    winningCombos.forEach(array =>{
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle'));


        if(circleWins){
            infoDisplay.textContent = "Circle Wins";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    });

    winningCombos.forEach(array =>{
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('cross'));


        if(crossWins){
            infoDisplay.textContent = "Cross Wins";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    });

}

const list = document.getElementById('list');
const bars = document.querySelector('.bars');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

function myNav(){
    if(list.style.display == "none"){
        list.style.display = "flex";
        bars.style.height = '26px';
        bars.style.transform = 'rotate(45deg)';
        bar3.style.display = 'none';
        bar1.style.height = '100%';
        bar1.style.position = 'relative';
        bar1.style.left = '-1px';
        bar1.style.width = '2px';
        bar2.style.position = 'relative';
        bar2.style.height = '2px';
        bar2.style.bottom = '13px';

    }
    else{
        list.style.display="none";
        bars.style.height = '17px';
        bars.style.transform = 'none';
        bar3.style.display = 'block';
        bar1.style.height = '2px';
        bar1.style.position = 'relative';
        bar1.style.left = '0';
        bar1.style.width = '100%';
        bar2.style.position = 'relative';
        bar2.style.height = '2px';
        bar2.style.bottom = '0';
    }
}