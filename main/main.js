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

//////////////////////////////Play BTN /////////////////////////////////////

play.addEventListener("click", () => {
  window.location.href = "../lvl/lvl1/lvl1.html";
});

close.addEventListener("click", () => {
  main1.style.display = "block";
  lvlContainer.style.opacity = "-5";
  lvlContainer.style.marginTop = "-900px";
});

//////////////////////////////////////Rules btn //////////////////////////////////////////

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

/////////////////////LocalStorage //////////////

let lvl1Value = localStorage.getItem("lvl1");
if (lvl1Value) {
  lvl1.classList.add("lvlFinished");
}

let lvl2Value = localStorage.getItem("lvl2");
if (lvl2Value) {
  lvl2.classList.add("lvlFinished");
}

let lvl3Value = localStorage.getItem("lvl3");
if (lvl3Value) {
  lvl3.classList.add("lvlFinished");
}

let lvl4Value = localStorage.getItem("lvl4");
if (lvl4Value) {
  lvl4.classList.add("lvlFinished");
}

let lvl5Value = localStorage.getItem("lvl5");
if (lvl5Value) {
  lvl5.classList.add("lvlFinished");
}

let lvl6Value = localStorage.getItem("lvl6");
if (lvl6Value) {
  lvl6.classList.add("lvlFinished");
}
let lvl7Value = localStorage.getItem("lvl7");
if (lvl7Value) {
  lvl7.classList.add("lvlFinished");
}
let lvl8Value = localStorage.getItem("lvl8");
if (lvl8Value) {
  lvl8.classList.add("lvlFinished");
}
let lvl9Value = localStorage.getItem("lvl9");
if (lvl9Value) {
  lvl9.classList.add("lvlFinished");
}
let lvl10Value = localStorage.getItem("lvl10");
if (lvl10Value) {
  lvl10.classList.add("lvlFinished");
}
let lvl11Value = localStorage.getItem("lvl11");
if (lvl11Value) {
  lvl11.classList.add("lvlFinished");
}
/////////////////////////LVL Btn ///////////////////////

lvl.addEventListener("click", () => {
  main1.style.display = "none";
  lvlContainer.style.opacity = "5";
  lvlContainer.style.marginTop = "250px";
});

///////////////////lvlSelected//////////////////

lvl1.addEventListener("click", () => {
  if (lvl1.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl1/lvl1.html";
  
});

lvl2.addEventListener("click", () => {
  if (lvl1.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl2/lvl2.html";
  
});

lvl3.addEventListener("click", () => {
  if (lvl3.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl3/lvl3.html";
  
});

lvl4.addEventListener("click", () => {
  if (lvl4.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl4/lvl4.html";
 
});

lvl5.addEventListener("click", () => {
  if (lvl5.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl5/lvl5.html";
 
});

lvl6.addEventListener("click", () => {
  if (lvl6.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl6/lvl6.html";
 
});

lvl7.addEventListener("click", () => {
  if (lvl7.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl7/lvl7.html";
 
});

lvl8.addEventListener("click", () => {
  if (lvl8.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl8/lvl8.html";
 
});

lvl9.addEventListener("click", () => {
  if (lvl9.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl9/lvl9.html";
 
});

lvl10.addEventListener("click", () => {
  if (lvl10.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl10/lvl10.html";
 
});
lvl11.addEventListener("click", () => {
  if (lvl11.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl11/lvl11.html";
 
});

lvl12.addEventListener("click", () => {
  if (lvl12.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl12/lvl12.html";
 
});

lvl13.addEventListener("click", () => {
  if (lvl13.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl13/lvl13.html";
 
});

lvl14.addEventListener("click", () => {
  if (lvl14.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl14/lvl14.html";
 
});

lvl15.addEventListener("click", () => {
  if (lvl15.classList.contains("lvlFinished"))
    window.location.href = "../lvl/lvl15/lvl15.html";
 
});


