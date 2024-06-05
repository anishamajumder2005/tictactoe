let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset")
let turnO=true;
let newBtn=document.querySelector("#newBtn");
let msgcont=document.querySelector(".messagecontainer");
let msg=document.querySelector("#msg");

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const reset=()=>{
    turnO=true;
    enableboxes();
    msgcont.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerHTML="<i>O</i>"
            turnO=false;
        }else{
            box.innerHTML="<i>X</i>"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations , Winner is ${winner} `;
    msgcont.classList.remove("hide");
    disableboxes();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1!=""&&pos2!=""&&pos2!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner");
                showWinner(pos1);

            }
        }
    }
};
newBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);
