const cloud = document.getElementsByClassName("span");
const close = document.getElementById("close");






///////////////////////Cloud Maker //////////////////////////
const cloudMaker1 = () => {
  const cloud = document.createElement("span");
  const size = Math.random() * 100 + 100 + "px";
  const randomX = Math.floor(Math.random() * (window.innerHeight - 50));
  cloud.classList.add("cloud");
  cloud.style.height = size;
  cloud.style.width = size;
  cloud.style.top = randomX + "px";
  document.body.appendChild(cloud);

  setTimeout(() => {
    cloud.remove();
  }, 11000);
};
setInterval(cloudMaker1, 1000);





///////////////////////////////////////////////////////////

//////////////////////////Cursor/////////////////////////////


document.addEventListener("DOMContentLoaded", function () {
  const cursor1 = document.querySelector(".custom-cursor");
  cursor1.classList.add("cursor1");

  main1.addEventListener("mouseover", () => {
    cursor1.classList.remove("cursor1");
  });
  lvlContainer.addEventListener("mouseover", () => {
    cursor1.classList.remove("cursor1");
  });
  Rules.addEventListener("mouseover", () => {
    cursor1.classList.remove("cursor1");
  });
  main1.addEventListener("mouseout", () => {
    cursor1.classList.add("cursor1");
  });
  lvlContainer.addEventListener("mouseout", () => {
    cursor1.classList.add("cursor1");
  });
  Rules.addEventListener("mouseout", () => {
    cursor1.classList.add("cursor1");
  });

  document.addEventListener("mousemove", function (e) {
    cursor1.style.left = e.clientX + "px";
    cursor1.style.top = e.clientY + "px";
  });
});




play.addEventListener("click", () => {
  window.location.href = "./index.html";
});

lvl.addEventListener("click", () => {
  main1.style.display = "none";
  lvlContainer.style.opacity = "5";
  lvlContainer.style.marginTop = "250px";
});

close.addEventListener("click", () => {
  main1.style.display = "block";
  lvlContainer.style.opacity = "-5";
  lvlContainer.style.marginTop = "-900px";
});

RulesBtn.addEventListener("click", () => {
  main1.style.display = "none";
  Rules.style.marginTop = "220px";
  Rules.style.display = "block";
});

closeRules.addEventListener("click", () => {
  main1.style.display = "block";
  Rules.style.marginTop = "500px";
  Rules.style.display = "none";
});

play.addEventListener("click", () => {
  window.location.href = "./index.html";
});


/////////////////////LocalStorage //////////////

let lvl1Value = localStorage.getItem("lvl1")
if (lvl1Value) {
  lvl1.classList.add ("lvlFinished")

}


///////////////////lvlSelected//////////////////

lvl1.addEventListener("click", () => {
  if (lvl1.style.color === "#rgb(0, 170, 255)")
  window.location.href = "./index.html";
})