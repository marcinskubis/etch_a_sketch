const board = document.querySelector(".board");
const sizeButton = document.querySelector("#size-button");
const clearButton = document.querySelector("#clear-button");
const eraserButton = document.querySelector("#eraser-button");
const colorPicker = document.querySelector("#color-picker");

let brushColor = 'black';
let gridSize;
let gridOn = false;
let eraserToggled = false;
let originalBrushColor = 'black';
eraserButton.addEventListener('click', function(event){
    if(gridOn){
        if(!eraserToggled) originalBrushColor = brushColor;
        eraserToggled = !eraserToggled;
        brushColor = eraserToggled ? 'white' : originalBrushColor;
        this.style.borderColor = eraserToggled ? 'red' : 'black';
    }
});

clearButton.addEventListener('click', function(event) {
    eraseBoard();
});
sizeButton.addEventListener('click', function(event) {
    let userInput = prompt('Enter size of a grid. Maximum is 100');
    gridSize = parseInt(userInput);
    if(!isNaN(gridSize) && Number.isInteger(gridSize)){
        if(gridSize <= 100 && gridSize > 0){
            drawBoard(gridSize);
        }else{
            alert("Enter value larger than 0 and equal or lesser than 100.")
        }
    }
    else{
        alert("You've entered NaN value.")
    }
});

colorPicker.addEventListener('input', function(event){
    brushColor = colorPicker.value;
});

function drawBoard(size){
    clearBoard();
    const ratio = 100/size;
    for(let i=0; i<Math.pow(size,2); i++){
        let div = document.createElement('div');
        div.addEventListener('mouseenter', function(event) {
            if(event.buttons === 1){
                this.style.backgroundColor = brushColor;
            }
        });
        div.addEventListener('click', function(event) {
            this.style.backgroundColor = brushColor;
            
        })
        div.addEventListener('mousedown', function(event) {
            event.preventDefault();
            this.style.backgroundColor = brushColor;
            
        })
        div.style.width = `calc(${ratio}%)`;
        board.appendChild(div);
    }
    gridOn = true;
}
function clearBoard(){
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
}

function eraseBoard(){
    let boardChildren = board.children;
    Array.from(boardChildren).forEach(child => {
        child.style.backgroundColor = 'white';
    })
}