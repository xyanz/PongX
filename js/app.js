// class Ball {
//   constructor(){
//     this.height = "50px";
//     this.width = "50px";
//     this.velocity = 0;
//   }
//   getVelocity() {
//     return this.velocity;
//   }
//   setVelocity(velocity) {
//     this.velocity = velocity;
//   }
// };
// class Paddle {
//   constructor() {
//     this.height = "150px";
//     this.width = "25px";
//   }
//   movePaddle(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// };
const $els = {
  body: $('body')[0],
  paddle1: $('#paddle1')[0],
  paddle1Pos: 150,
  paddle2: $('#paddle2')[0],
  paddle2Pos: 150,
  ball: $('#ball')[0],
  gameActive: false,
  startButton: $('#start-button')[0],
  stopButton: $('#stop-button')[0],
  playerScore: 0,
  elapsedTime: 0,

}

window.onload = function() {
  $els.body.addEventListener('keydown', movePaddle);
  $els.startButton.addEventListener('click', startGame);
  $els.stopButton.addEventListener('click', stopGame);
};
//a.keycode = 65 z.keycode = 90
function movePaddle(){
  console.log(event);
  if (event.keyCode === 65 && $els.paddle1Pos > 0) {
    $els.paddle1Pos -= 25;
    $els.paddle1.style.top = `${$els.paddle1Pos}px`;
  }else if (event.keyCode === 90 && $els.paddle1Pos < 400) {
    $els.paddle1Pos += 25;
    $els.paddle1.style.top = `${$els.paddle1Pos}px`;
  }
}

//.getBoundingClientRect()
//Top: (x)  Right: (y)
function checkCollision(object1, object2){
  object1x = object1.getBoundingClientRect().top;
  object1y = object1.getBoundingClientRect().left;
  object1height = object1.getBoundingClientRect().height;
  object1width = object1.getBoundingClientRect().width;
  object2x = object2.getBoundingClientRect().top;
  object2y = object2.getBoundingClientRect().left;
  object2height = object2.getBoundingClientRect().height;
  object2width = object2.getBoundingClientRect().width;

  if (object1x < object2x + object2width &&
    object1x + object1width > object2x &&
    object1y < object2y + object2height &&
    object1height + object1y > object2y) {
    addPlayerScore();
      return true;
  }
}

//Adds 1 to player score on collision and outputs result
function addPlayerScore() {
  setInterval(resetElapsed, 1500);
  if ($els.elapsedTime == 1500){
    $els.playerScore++;
    $('#playerScore').html(`Player Score: ${$els.playerScore}`)
    $els.elapsedTime = 0;
  }
}

//Elapsed time with 1.5sec delay to avoid multiple points during collision
function resetElapsed() {
  $els.elapsedTime = 1500;
}
function moveComputerPaddle() {
  $els.paddle2.style.top = `${$els.ball.getBoundingClientRect().top}px`;
}
function ballPaddleCollision() {
  if (checkCollision($els.ball, $els.paddle1)) {
  }
}
function startGame() {
  $('#ball').addClass('ball-active');
  $('#horizontal').addClass('horizontal');
  startCount();
}
function stopGame() {
  $('#ball').removeClass("ball-active");
  $('#horizontal').removeClass("horizontal");
  stopCount();
}

//////////////REQUEST ANIMATION EVENTS/////////////////////
var globalID;

var status = 0;

function repeatOften() {
  checkCollision($els.ball, $els.paddle1);
  moveComputerPaddle();
  globalID = requestAnimationFrame(repeatOften);
}

$("#start-button").on("click", function() {
  if(status == 0){
  globalID = requestAnimationFrame(repeatOften);
  }
  status = 1;
});

$("#stop-button").on("click", function() {
  if(status == 1){
  cancelAnimationFrame(globalID);
  }
  status = 0;
});

/////////////////////////// GAME TIMER ////////////////////////////////
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout2///
let totalTime = 30;
let currentTime = 0;
let t;
let timer_is_on = 0;

function timedCount() {
  if ((totalTime - currentTime) <= 0) {
    stopGame();
  }
    $('#countdownTimer').html(totalTime - currentTime);
    currentTime = currentTime + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}








