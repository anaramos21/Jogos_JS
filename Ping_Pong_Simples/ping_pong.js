const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

const paddleWidth = 10, paddleHeight = 100;
let playerY = (canvas.height - paddleHeight) / 2;
let aiY = (canvas.height - paddleHeight) / 2;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSpeedX = 5, ballSpeedY = 3;

function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
}

function draw() {
  drawRect(0, 0, canvas.width, canvas.height, "#eee");

  drawRect(0, playerY, paddleWidth, paddleHeight, "#00f"); // jogador
  drawRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight, "#f00"); // AI
  drawCircle(ballX, ballY, 10, "#000");
}

function move() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY + 10 > canvas.height || ballY - 10 < 0) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballX < paddleWidth) {
    if (ballY > playerY && ballY < playerY + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
      reset();
    }
  }

  if (ballX > canvas.width - paddleWidth) {
    if (ballY > aiY && ballY < aiY + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
      reset();
    }
  }

  aiY += ((ballY - (aiY + paddleHeight / 2))) * 0.1;
}

function reset() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
}

document.addEventListener("mousemove", e => {
  playerY = e.clientY - canvas.getBoundingClientRect().top - paddleHeight / 2;
});

function gameLoop() {
  move();
  draw();
}

setInterval(gameLoop, 1000 / 60);
