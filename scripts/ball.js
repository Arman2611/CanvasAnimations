var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");


var circle = function (x,y,radius,fillCircle) {
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI * 2,false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  };
};

// Ball constructor 
var Ball = function () {
  this.x = 100;
  this.y = 100;
  this.xSpeed = -2;
  this.ySpeed = 3;
};

// Draw the ball on canvas
Ball.prototype.draw = function () {
  circle(this.x, this.y, 6, true);
};

// Move the ball
Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

// Check if the ball has reached a wall
Ball.prototype.checkCollision = function () {
  if (this.x<6 || this.x>194) {
    this.xSpeed = -this.xSpeed;
  };
  if (this.y<6 || this.y>194) {
    this.ySpeed = -this.ySpeed;
  };
};

var ball = new Ball();

setInterval(function () {
  ctx.clearRect(0,0,200,200);

  ball.draw()
  ball.move();
  ball.checkCollision();

  ctx.strokeRect(0,0,200,200);
}, 30);

