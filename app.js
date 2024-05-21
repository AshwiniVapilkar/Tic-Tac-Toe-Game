let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")

let turnO=true; //playerX, playerY
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked!");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        
    });
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for (pattrn of winPatterns){
        // console.log(pattrn[0],pattrn[1],pattrn[2]);
        // console.log(boxes[pattrn[0]],boxes[pattrn[1]],boxes[pattrn[2]]);
        // console.log(boxes[pattrn[0]].innerText,
        //     boxes[pattrn[1]].innerText,
        //     boxes[pattrn[2]].innerText);
        let pos1Val=boxes[pattrn[0]].innerText;
        let pos2Val=boxes[pattrn[1]].innerText;
        let pos3Val=boxes[pattrn[2]].innerText;
        console.log(pos1Val,pos2Val,pos3Val);
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                
            }
        }

    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
