let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".Reset");
let hide = document.querySelector(".hide");
let newGame = document.querySelector(".newGame");
let msg = document.querySelector(".para");

let turnO = true;

let winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach( (box) => { 
    box.addEventListener("click", () => {
        if(turnO){
           box.innerText = "Adam khan";
           turnO = false;
        }else{
            box.innerText = "Zahid";
            turnO = true;
        }
        box.disabled = true;
        checkpatterns();
    })
});

let disableBoxes = () => {
    for(let boxe of boxes){
        boxe.disabled = true;
    }
}

let enableBoxes = () => {
    turnO = true;
    for (let boxe of boxes){
        boxe.disabled = false;
        boxe.innerText = "";
    }
    hide.classList.add("hide");
}

const show = (winner) => {
    msg.innerText = `Congratulation ${winner} Your The Winner `;  
    hide.classList.remove("hide");
    disableBoxes();
}
 
let checkpatterns = () => {
        for(pattern of winPatterns){
        let val1 = boxes [pattern[0]].innerText;
        let val2 = boxes [pattern[1]].innerText;
        let val3 = boxes [pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if (val1 === val2 && val2 === val3){
                console.log("winner", val1);
                show(val1);
            }
        }
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
