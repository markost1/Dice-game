let imageArray = ["/images/dice1.png",
                  "/images/dice2.png",
                  "/images/dice3.png",
                  "/images/dice4.png",
                  "/images/dice5.png",
                  "/images/dice6.png"];

let p1 = document.getElementById('img-p1');
let p2 = document.getElementById('img-p2');
let start_btn = document.getElementById('start-btn');
let stop_btn = document.getElementById('stop-btn');
let restart_btn = document.getElementById('restart-btn');
let para = document.getElementById('paraMsg');
let p1_choice,p2_choice,shake


let dice = () =>{
    p1_choice =Math.floor(Math.random()*imageArray.length);
    p2_choice =Math.floor(Math.random()*imageArray.length);
    p1.src = imageArray[p1_choice]
    p2.src = imageArray[p2_choice]
 
}

start_btn.addEventListener('click',()=>{
   shake =  setInterval(dice,100)
   start_btn.disabled = true;
});

stop_btn.addEventListener('click',()=>{
    clearInterval(shake)
    start_btn.disabled = false;
    console.log(p1_choice);
    if(p1_choice > p2_choice){
        para.innerText = "Player 1 is WINNER"
    }else if(p1_choice === p2_choice){
        para.innerText = "D R A W"

    }else{
        para.innerText = "Player 2 is WINNER"
    }
});

restart_btn.addEventListener('click',()=>{
    p1.src = imageArray[0]
    p2.src = imageArray[0]
    para.innerText = "Let 's play"
})


