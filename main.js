const board = document.querySelector(".board");
const sizeButton = document.querySelector("#size-button");
const clearButton = document.querySelector("#clear-button");
let gridSize;

clearButton.addEventListener('click', function(event) {
    ereaseBoard();
});
sizeButton.addEventListener('click', function(event) {
    let userInput = prompt('Enter size of a grid. Maximum is 100');
    gridSize = parseInt(userInput);
    if(!isNaN(gridSize) && Number.isInteger(gridSize)){
        if(gridSize <= 100){
            drawBoard(gridSize);
        }else{
            alert("Enter value equal or lesser than 100.")
        }
    }
    else{
        alert("You've entered NaN value.")
    }
});


function drawBoard(size){
    clearBoard();
    const ratio = 100/size;
    for(let i=0; i<Math.pow(size,2); i++){
        let div = document.createElement('div');
        div.addEventListener('mouseenter', function(event) {
            if(event.buttons === 1){
                this.style.backgroundColor = 'black';
            }
        });
        div.addEventListener('click', function(event) {
            this.style.backgroundColor = 'black';
            
        })
        div.addEventListener('mousedown', function(event) {
            event.preventDefault();
            this.style.backgroundColor = 'black';
            
        })
        div.style.width = `calc(${ratio}%)`;
        board.appendChild(div);
    }
}
function clearBoard(){
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
}

function ereaseBoard(){
    let boardChildren = board.children;
    Array.from(boardChildren).forEach(child => {
        child.style.backgroundColor = 'white';
    })
}