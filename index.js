const plane = document.getElementById("plane");

let planeTop = 0;
const speed = 2;
let isMovingUp = false;
let isMovingDown = false;

function movePlaneUp() {
  plane.style.top = planeTop + "px";
}
function movePlaneDown() {
  plane.style.top = planeTop + "px";
}

function update() {
  if (isMovingUp && planeTop > 0) {
    planeTop -= speed;
    movePlaneUp();
  }
  if (isMovingDown && planeTop < window.innerHeight - plane.clientHeight) {
    planeTop += speed;
    movePlaneDown();
  }
  requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    isMovingUp = true;
  }
  if (e.key === "s") {
    isMovingDown = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "z") {
    isMovingUp = false;
  }
  if (e.key === "s") {
    isMovingDown = false;
  }
});

update();







const cloudMaker1 = () => {
  const cloud = document.createElement("span");
  cloud.classList.add("cloud");

  const randomX = Math.floor(Math.random() * (window.innerHeight - 50));
  cloud.style.top = randomX + "px";

  cloud.style.left = "800px";
  document.body.appendChild(cloud);

  cloud.remove;

  setTimeout(() => {
    cloud.remove();
  }, 5000);
};

setInterval(cloudMaker1, 1000);


