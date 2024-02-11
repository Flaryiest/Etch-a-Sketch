const header = document.querySelector(".header")
const newGrid = document.querySelector(".newGrid");
const container = document.querySelector(".container")
function randomColour() { 
    return Math.floor(Math.random()*16777215).toString(16);}
newGrid.addEventListener("click", function()  {createGrid()})

function boxHeight(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }

function boxWidth(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
  }

function createGrid() {
    let squaresPerRow = prompt("Enter # of squares per row (Limit 100)")
    
    squaresPerRow = Number(squaresPerRow)
    if (Number.isInteger(squaresPerRow)) {
        for (let boxes = 0; boxes < squaresPerRow * squaresPerRow; boxes++) {
            const box = document.createElement("div")
            console.log(boxWidth(20))
            box.style.minHeight = boxHeight(100/squaresPerRow)+"px";
            box.style.minWidth = boxWidth(99/squaresPerRow)+"px";
            box.style.backgroundColor="black";
            
            box.addEventListener("mouseenter", function() {
                box.style.backgroundColor="#" + randomColour();
            })
            container.append(box)
            
            }
            
    }
    else {
        const errorMessage = document.createElement("div")
        errorMessage.textContent = "Error, please try again"
        header.append(errorMessage)
        
    }
}
