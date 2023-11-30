const plane = document.getElementById("plane");

let planeTop = 0;
const speed = 2;
let isMovingUp = false;
let isMovingDown = false;
let firstLife = false;
let fa1 = document.getElementById('fa1');
let fa2 = document.getElementById('fa2');
let fa3 = document.getElementById('fa3');
let life = [fa1, fa2, fa3]
let element = 0



function lose() {
  if(life[1].style.color ==="grey") {
    loseDiv.style.opacity = "1"
    loseDiv.style.zIndex = "50"
  }
}
function movePlaneUp() {
  plane.style.top = planeTop + "px";
}
function movePlaneDown() {
  plane.style.top = planeTop + "px";
}
function crash() {
  const planeRect = plane.getBoundingClientRect();
  
  document.querySelectorAll(".cloud").forEach((cloud) => {
    const cloudRect = cloud.getBoundingClientRect();

    if (!firstLife &&
      planeRect.left < cloudRect.right &&
      planeRect.right > cloudRect.left &&
      planeRect.top < cloudRect.bottom &&
      planeRect.bottom > cloudRect.top
    ) {
      lose();
    life[element].style.color ="grey"
    element = (element + 1 ) % life.length;
    firstLife = true
    plane.classList.add("lostLife")
   

    setTimeout(() => {
     
      firstLife = false
      plane.classList.remove("lostLife")
    },4000)
   
    }
   

  })}
setInterval(crash, 100);

function update() {
  if (isMovingUp && planeTop > 0) {
    planeTop -= speed;
    movePlaneUp();
  }
  if (isMovingDown && planeTop < window.innerHeight - plane.clientHeight) {
    planeTop += speed;
    movePlaneDown();
  }
  crash()
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



update();


retry.addEventListener ("click", () => {
  location.reload();
})

quit.addEventListener("click", () => {
  window.location.href='./main.html'
}
)