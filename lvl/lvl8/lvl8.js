const plane1 = document.getElementById("plane1");
const plane = document.getElementById("plane");
const distanceElement = document.getElementById("distanceEl");
const speed = 2;

let planeTop = 300;
let isMovingUp = false;
let isMovingDown = false;
let firstLife = false;
let fa1 = document.getElementById("fa1");
let fa2 = document.getElementById("fa2");
let fa3 = document.getElementById("fa3");
let life = [fa1, fa2, fa3];
let element = 0;
let distance = 1000;
let traveled = true;
let counting = true;

/////////////////////////////Plane Move ////////////////////////

function movePlaneUp() {
  plane.style.top = planeTop + "px";
}
function movePlaneDown() {
  plane.style.top = planeTop + "px";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "z" || e.key === "ArrowUp"  || e.key === "Z") {
    isMovingUp = true;
  }
  if (e.key === "s" || e.key === "ArrowDown" || e.key === "S")  {
    isMovingDown = true;
  }
 
});

document.addEventListener("keyup", (e) => {
  if (e.key === "z" || e.key === "ArrowUp" || e.key ==="Z") {
    isMovingUp = false;
  }
  if (e.key === "s" || e.key === "ArrowDown" || e.key === "S") {
    isMovingDown = false;
  }
});

function update() {
  if (isMovingDown && planeTop < window.innerHeight - plane.clientHeight - 50) {
    planeTop += speed;
    movePlaneDown();
  }
  if (isMovingUp && planeTop > 50) {
    planeTop -= speed;
    movePlaneUp();
  }

  crash();
  requestAnimationFrame(update);
}

///////////////////////////Cloud Maker ////////////////////////////////

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
    }, 3000);
  };
  
  setInterval(cloudMaker1, 200);
  
  update();

//////Distance Traveled /////////////////////////

function DisTraveled() {
  if (traveled) {
    distanceElement.innerText = distance + "m";
    distance--;
    distance = distance <= 0 ? 0 : distance - 0;

    if (distance == 0) {
      win.style.transform = "translateY(00px)";
      win.style.zIndex = "50";
      loseDiv.style.display = "none";
      plane.style.display = "none";
      localStorage.setItem("lvl8", "ok");
    }
  }
}

function stopTraveled() {
  traveled = false;
}

setInterval(DisTraveled, 16);

////////////////////////Crash ////////////////////////////////

function crash() {
  const planeRect = plane1.getBoundingClientRect();

  document.querySelectorAll(".cloud").forEach((cloud) => {
    const cloudRect = cloud.getBoundingClientRect();

    if (
      !firstLife &&
      planeRect.left < cloudRect.right &&
      planeRect.right > cloudRect.left &&
      planeRect.top < cloudRect.bottom &&
      planeRect.bottom > cloudRect.top
    ) {
      lose();
      life[element].style.color = "grey";
      element = (element + 1) % life.length;
      firstLife = true;
      plane.classList.add("lostLife");

      setTimeout(() => {
        firstLife = false;
        plane.classList.remove("lostLife");
      }, 3000);
    }
  });
}

setInterval(crash, 100);

function lose() {
  if (life[1].style.color === "grey") {
    loseDiv.style.opacity = "1";
    loseDiv.style.zIndex = "50";
    stopTraveled();
  }
}

/////////////////////Retry/////////////////////

retry.addEventListener("click", () => {
  location.reload();
});

quit.addEventListener("click", () => {
  window.location.href = "/main/main.html";
});

///////////////////////Win///////////////////////////
next.addEventListener("click", () => {
  window.location.href = "../lvl9/lvl9.html";
});
menu.addEventListener("click", () => {
  window.location.href = "/main/main.html";
});
