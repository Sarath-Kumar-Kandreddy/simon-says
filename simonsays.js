let gameseq=[];
let userseq=[];
let level=0;
let highscore=0;
let started=false;
let btns=["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
document.addEventListener("keydown", function(event) {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
});
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 200);
}
function levelup() {
    userseq = [];
    level++;
    if(level>highscore){
        highscore=level;
    }
    h1.innerText=`Highest Score: ${highscore-1}`;
    h2.innerText=`Level ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}
function check(index){
     if(gameseq[index] === userseq[index]) {
       // console.log("Correct");
        if (userseq.length === gameseq.length) {
            
            setTimeout(levelup, 400 );
        }
    }
    else{
            h2.innerHTML=`game over!<b>yor score was ${level-1}</b> press any key to restart`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function() {
                document.querySelector("body").style.backgroundColor="white";},200);
            reset()
        }
}

function btnpress(event) {
    console.log("Button pressed");
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);
    check(userseq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnpress); 
}
function reset() {
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
}
