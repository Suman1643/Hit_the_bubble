const images = [
    "./images/cat.png",
    "./images/chick.png",
    "./images/chick1.png",
    "./images/fox.png",
    "./images/giraffe.png",
    "./images/horse.png",
    "./images/insect.png",
    "./images/lion.png",
    "./images/logo.png",
    "./images/raccoon.png",
  ];
  
  var score = 0;
  function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
  }
  
  function getNewHit() {
    var hitrn = Math.floor(Math.random() * 10);
    var hitimg = images[hitrn];
    document.querySelector("#hitimg").src = hitimg;
  }
  
  function makebubble() {
    var clutter = "";
  
    for (var i = 0; i <= 151; i++) {
      var rn = Math.floor(Math.random() * 10);
      var img = images[rn];
      clutter += `<div class="bubble"><img src=${img} class='image' /></div>`;
    }
    document.querySelector(".pbotom").innerHTML = clutter;
  }
  
  var timer = 60;
  function runTimer() {
    var timerint = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.querySelector("#timevar").textContent = timer;
      } else {
        clearInterval(timerint);
        document.querySelector(".pbotom").innerHTML = `<h1>Game Over</h1>`;
      }
    }, 1000);
  }
  
  document.querySelector(".pbotom").addEventListener("click", function (dets) {
    // var clikednumb = Number(dets.target.textContent);
    // if (clikednumb === hitrn) {
    //   increaseScore();
    //   makebubble();
    //   getNewHit();
    // }
  
    var clickedImgSrc = dets.target.src;
    var targetImgSrc = document.querySelector("#hitimg").src;
  
    if (clickedImgSrc === targetImgSrc) {
      increaseScore();
      makebubble();
      getNewHit();
    }
  });
  
  runTimer();
  makebubble();
  getNewHit();