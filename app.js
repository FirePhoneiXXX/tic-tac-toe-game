let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg")
let newGame = document.querySelector("#new")

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        box.innerText = "X";
        if(turnO){   //Player )
            box.innerText = "O"
            turnO = false ;
        }else{ //Player X
            box.innerText = "X"
            turnO = true ;
        }
        box.disabled= true ;

        checkWinner();
    });
})


const checkWinner = () => {
    for(let pattern of winPatterns){
          let position1 =  boxes[pattern[0]].innerText;
          let position2 =  boxes[pattern[1]].innerText;
          let position3 =  boxes[pattern[2]].innerText;

          if(position1 != "" && position2 != "" && position3 !=""){
            if(position1 == position2 && position2 == position3){
                console.log("WINNER", position1);
                showWinner(position1);
                
            }
          }
    }
}
const showWinner = (Winner) =>{
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}
const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);