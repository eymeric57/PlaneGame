const plane1 = document.getElementById("plane1");
const plane = document.getElementById("plane");
const distanceElement = document.getElementById("distanceEl");
const speed = 5;
const game = document.getElementById("game");

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
  if (e.key === "z" || e.key === "ArrowUp" || e.key === "Z") {
    isMovingUp = true;
  }
  if (e.key === "s" || e.key === "ArrowDown" || e.key === "S") {
    isMovingDown = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "z" || e.key === "ArrowUp" || e.key === "Z") {
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

  crash1();
  crash2();
  crash3();
  requestAnimationFrame(update);
}

///////////////////////////Laser1 Maker ////////////////////////////////

let LaserMaker1 = () => {
  const Laser1 = document.createElement("span");
  Laser1.classList.add("laser1");

  const randomX = Math.floor(Math.random() * (window.innerHeight - 50));
  Laser1.style.top = randomX + "px";
  Laser1.style.left = "800px";
  document.body.appendChild(Laser1);

  Laser1.remove;

  setTimeout(() => {
    Laser1.remove();
  }, 3000);
};

setInterval(LaserMaker1, 1000);

update();

///////////////Laser2 Maker //////////////////////////////////

const LaserMaker = () => {
  const Laser = document.createElement("span");
  Laser.classList.add("laser");

  const randomX = Math.floor(Math.random() * (window.innerHeight - 50));
  Laser.style.top = randomX + "px";
  Laser.style.left = "800px";
  document.body.appendChild(Laser);

  Laser.remove;

  setTimeout(() => {
    Laser.remove();
  }, 3000);
};

setInterval(LaserMaker, 500);

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
      localStorage.setItem("lvl10", "ok");
    } else if (distance == 500) {
      const Laser3Maker = () => {
        const Laser3 = document.createElement("span");
        Laser3.classList.add("laser3");

        const randomX = Math.floor(Math.random() * (window.innerHeight - 50));
        Laser3.style.top = randomX + "px";
        Laser3.style.left = "800px";
        document.body.appendChild(Laser3);
        Laser3.remove;

        setTimeout(() => {
          Laser3.remove();
        }, 3000);
      };

      setInterval(Laser3Maker, 100);

      update();
    }
  }
}

function stopTraveled() {
  traveled = false;
}
function playTraveled() {
  traveled = true;
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

///////// crash3 ///////////////////////////////

function crash3() {
  const planeRect = plane1.getBoundingClientRect();

  document.querySelectorAll(".laser3").forEach((laser3) => {
    const laser3Rect = laser3.getBoundingClientRect();

    if (
      !firstLife &&
      planeRect.left < laser3Rect.right &&
      planeRect.right > laser3Rect.left &&
      planeRect.top < laser3Rect.bottom &&
      planeRect.bottom > laser3Rect.top
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
  if (life[1].style.color === "grey" && distance > 500) {
    loseDiv.style.opacity = "1";
    loseDiv.style.zIndex = "50";
    stopTraveled();
  } else if (distance < 500 && life[1].style.color === "grey") {
    stopTraveled();
    plane1.style.opacity = "0";
    game.classList.add("gameEnd");
    explode.classList.add("explode1");
    localStorage.setItem("lvl11", "ok");

    setTimeout(() => {
      window.location.href = "../lvl11/animation.html";
    }, 3000);
  }
}


///////////////////////////////////Pause //////////////////////////

pause.addEventListener("click", () => { 
  pauseMenu.style.left="0px"
  pauseMenu.style.zIndex="20"
  plane.style.display="none"

  stopTraveled() 
 
})

Play.addEventListener("click", () => {
  pauseMenu.style.left="-1000px"
  plane.style.display="block"
  plane.classList.add("lostLife");
  
  setTimeout(() => {
    playTraveled();
  }, 3000);

})

Retry.addEventListener("click", () => {
  location.reload();
})

Menu.addEventListener("click", () => {
  window.location.href = "../../index.html";

})


/////////////////////Retry/////////////////////

retry.addEventListener("click", () => {
  location.reload();
});

quit.addEventListener("click", () => {
  window.location.href = "../../index.html";
});

///////////////////////Win///////////////////////////
next.addEventListener("click", () => {
  window.location.href = "../lvl9/lvl9.html";
});
menu.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
