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

}

window.onload = function() {
  $els.body.addEventListener('keydown', movePaddle);
  $els.startButton.addEventListener('click', startGame);
  $els.stopButton.addEventListener('click', stopGame);
};
//a.keycode = 65 z.keycode = 90
function movePaddle(){
  console.log(event);
  if (event.keyCode === 65) {
    $els.paddle1Pos -= 25;
    $els.paddle1.style.top = `${$els.paddle1Pos}px`;
    //ballPaddleCollision();
  }else if (event.keyCode === 90) {
    $els.paddle1Pos += 25;
    $els.paddle1.style.top = `${$els.paddle1Pos}px`;
    //ballPaddleCollision();
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
  $('#position-info1').html(`1x: ${Math.floor(object1x)}______`)
  $('#position-info2').html(`1y: ${Math.floor(object1y)}______`)
  $('#position-info3').html(`1h: ${object1height}______`)
  $('#position-info4').html(`1w: ${object1width}______`)
  $('#position-info5').html(`2x: ${object2x}______`)
  $('#position-info6').html(`2y: ${object2y}______`)
  $('#position-info7').html(`2h: ${object2height}______`)
  $('#position-info8').html(`2w: ${object2width}______`)
  if (object1x < object2x + object2width &&
    object1x + object1width > object2x &&
    object1y < object2y + object2height &&
    object1height + object1y > object2y) {
      alert("Collision detected!");
      return true;
  }
}

function moveComputerPaddle() {
  $els.paddle2.style.top = `${$els.ball.getBoundingClientRect().top}px`;
}
function ballPaddleCollision() {
  if (checkCollision($els.ball, $els.paddle1)) {
    console.log("collision detected!")
  }
}
function ballWallCollision() {
}
function startGame() {
  $('#ball').addClass('ball-active');
  $('#horizontal').addClass('horizontal');
}
function stopGame() {
  $('#ball').removeClass("ball-active");
  $('#horizontal').removeClass("horizontal");
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
/////////////END REQUEST ANIMATION//////////////////////////

// Helper function to get an element's exact position
// function getPosition(el) {
//   var xPos = 0;
//   var yPos = 0;

//   while (el) {
//     if (el.tagName == "BODY") {
//       // deal with browser quirks with body/window/document and page scroll
//       var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//       var yScroll = el.scrollTop || document.documentElement.scrollTop;

//       xPos += (el.offsetLeft - xScroll + el.clientLeft);
//       yPos += (el.offsetTop - yScroll + el.clientTop);
//     } else {
//       // for all other non-BODY elements
//       xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//       yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//     }

//     el = el.offsetParent;
//   }
//   return {
//     x: xPos,
//     y: yPos
//   };
// }





