const plane = document.getElementById("plane");

let planeTop = 0;
let planeLeft = 0;



document.addEventListener("keydown", (e) => {
  if (e.key === "z") {
    planeTop -= 10;
    plane.style.top = planeTop + "px";
    updatePlanePosition() 
   
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "s") {
    planeTop += 10;
    plane.style.top = planeTop + "px";
    updatePlanePosition() 
  }
});


function updatePlanePosition() {
   
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    planeTop = Math.max(0, Math.min(planeTop, viewportHeight - plane.clientHeight));
    planeLeft = Math.max(0, Math.min(planeLeft, viewportWidth - plane.clientWidth));

   
    plane.style.top = planeTop + 'px';
    plane.style.left = planeLeft + 'px';
}



