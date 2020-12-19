const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

//  global variables
let circleX;
let circleY;
let circleRadius;
let circleDx;

// user functions
drawCircle = () => {
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
};
moveCircle = () => {
  circleX = circleX + circleDx;
  if (circleX - 50 <= 0 || circleX + 50 >= width) circleDx *= -1;
};

// basic functions
setup = () => {
  console.log("start...");
  circleX = 50;
  circleY = height - 50;
  circleRadius = 50;
  circleDx = 3;
};
draw = () => {
  ctx.clearRect(0, 0, width, height);
  drawCircle();
  moveCircle();
  setTimeout(draw, 1000 / 60); // 1초에 60번 업데이트
};

// initialize
init = () => {
  setup();
  draw();
};

// run program
init();
