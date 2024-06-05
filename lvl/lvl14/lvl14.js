const plane1 = document.getElementById("plane1");
const plane = document.getElementById("plane");
const distanceElement = document.getElementById("distanceEl");
const speed = 5;
const game =  document.getElementById("game")
let planeTop = 0;
let planeLeft = 0;
let isMovingUp = false;
let isMovingDown = false;
let isMovingLeft = false;
let isMovingRight = false;
let firstLife = false;
let fa1 = document.getElementById("fa1");
let fa2 = document.getElementById("fa2");
let fa3 = document.getElementById("fa3");
let life = [fa1, fa2, fa3];
let element = 0;
let distance = 1000;
let traveled = true;
let counting = true;

/////////////////////////////Astro Move ////////////////////////



function movePlaneLeft() {
  plane.style.left = planeLeft + "px"
}

function movePlaneRight() {
  plane.style.left = planeLeft + "px"
}


document.addEventListener("keydown", (e) => {

  if (e.key === "q" || e.key === "ArrowLeft"  || e.key === "Q") {
    isMovingLeft = true;
  }
  if (e.key === "d" || e.key === "ArrowRight" || e.key === "D")  {
    isMovingRight = true;
  }
 
});





document.addEventListener("keyup", (e) => {

  if (e.key === "q" || e.key === "ArrowLeft" || e.key ==="Q") {
    isMovingLeft = false;
  }
  if (e.key === "d" || e.key === "ArrowRight" || e.key === "D") {
    isMovingRight = false;
  }
});



function update() {
  
 
  if (isMovingRight && planeLeft < game.clientWidth - plane.clientWidth - 50) {
    planeLeft += speed;
    movePlaneRight();
  }

  if (isMovingLeft && planeLeft > 50) {
    planeLeft -= speed;
    movePlaneLeft();
  }

  crash1();
  crash2()
  requestAnimationFrame(update);
}

///////////////////////////Laser1 Maker ////////////////////////////////

const LaserMaker1 = () => {
    const Laser1 = document.createElement("span");
    Laser1.classList.add("laser1");
    const size = Math.random() * 50 + 50 + "px";
    Laser1.style.height = size;
    Laser1.style.width = size;
   
    const randomX = Math.floor(Math.random() * (game.clientWidth - -500));
    Laser1.style.left = randomX + "px";
    Laser1.style.top = "1000px";
    document.body.appendChild(Laser1);
  
    Laser1.remove;
  
    setTimeout(() => {
      Laser1.remove();
    }, 3000);
  };
  
  setInterval(LaserMaker1, 200);
  
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
      localStorage.setItem("lvl15", "ok");
    }
  }
}

function stopTraveled() {
  traveled = false;
}

setInterval(DisTraveled, 16);

////////////////////////Crash ////////////////////////////////

function crash1() {
  const planeRect = plane1.getBoundingClientRect();

  document.querySelectorAll(".laser").forEach((laser1) => {
    const laser1Rect = laser1.getBoundingClientRect();

    if (
      !firstLife &&
      planeRect.left < laser1Rect.right &&
      planeRect.right > laser1Rect.left &&
      planeRect.top < laser1Rect.bottom &&
      planeRect.bottom > laser1Rect.top
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

setInterval(crash1, 100);

function lose() {
  if (life[1].style.color === "grey") {
    loseDiv.style.opacity = "1";
    loseDiv.style.zIndex = "50";
    stopTraveled();
  }
}



///////// crash2 ///////////////////////////////



function crash2() {
  const planeRect = plane1.getBoundingClientRect();

  document.querySelectorAll(".laser1").forEach((laser) => {
    const laserRect = laser.getBoundingClientRect();

    if (
      !firstLife &&
      planeRect.left < laserRect.right &&
      planeRect.right > laserRect.left &&
      planeRect.top < laserRect.bottom &&
      planeRect.bottom > laserRect.top
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

setInterval(crash2, 100);

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
  window.location.href = "../../index.html";
});

///////////////////////Win///////////////////////////
next.addEventListener("click", () => {
  window.location.href = "../lvl15/lvl15.html";
});
menu.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
