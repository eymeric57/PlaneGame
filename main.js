const cloud = document.getElementsByClassName("span");

const close = document.getElementById("close");

const cloudMaker1 = () => {
  const cloud = document.createElement("span");
  cloud.classList.add("cloud");

  const randomX = Math.floor(Math.random() * (window.innerHeight - 50));

  const size = Math.random() * 100 + 100 + "px";
  cloud.style.height = size;
  cloud.style.width = size;
  cloud.style.top = randomX + "px";

  document.body.appendChild(cloud);

  setTimeout(() => {
    cloud.remove();
  }, 30000);
};
setInterval(cloudMaker1, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const cursor1 = document.querySelector(".custom-cursor");
  cursor1.classList.add("cursor1");

  main1.addEventListener("mouseover", () => {
    cursor1.classList.remove("cursor1");
  });
  lvlContainer.addEventListener("mouseover", () => {
    cursor1.classList.remove("cursor1");
  });

  main1.addEventListener("mouseout", () => {
    cursor1.classList.add("cursor1");
  });
  lvlContainer.addEventListener("mouseout", () => {
    cursor1.classList.add("cursor1");
  });

  document.addEventListener("mousemove", function (e) {
    cursor1.style.left = e.clientX + "px";
    cursor1.style.top = e.clientY + "px";
  });
});

lvl.addEventListener("click", () => {
  main1.style.display = "none";
  lvlContainer.style.opacity = "5";
  lvlContainer.style.Zindex = "20";
});

close.addEventListener("click", () => {
  main1.style.display = "block";

  lvlContainer.style.opacity = "-5";
  lvlContainer.style.Zindex = "-20";
});

play.addEventListener("click", () => {
  window.location.href = "./index.html";
});
