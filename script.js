var score = 0;
function increaseScore(){
    score +=10;
    document.querySelector('#scoreval').textContent = score;
}

function getNewHit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function makebubble(){
    var clutter = "" ;

for(var i=0;i<=151;i++){
    var rn = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector(".pbotom").innerHTML = clutter;
}

var timer=60;
function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector('#timevar').textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".pbotom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

var hitrn = 0;
document.querySelector('.pbotom').addEventListener("click",function(dets){
    var clikednumb = Number(dets.target.textContent);
    if(clikednumb === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }
});
runTimer();
makebubble();
getNewHit();
