const cloudMaker1 = () => {
    const cloud = document.createElement("span");
    cloud.classList.add("cloud");
  
    const randomX = Math.floor(Math.random() * (window.innerHeight - 10));

    const size = Math.random() * 400 + 200 + "px";
    cloud.style.height = size;
    cloud.style.width = size;
    cloud.style.top = randomX + "px";
   
    document.body.appendChild(cloud);


   
  

    setTimeout(() => {
        cloud.remove();
    }, 20000);
};
setInterval(cloudMaker1, 800);



document.addEventListener("DOMContentLoaded", function() {
    const cursor1 = document.querySelector(".custom-cursor");
    cursor1.classList.add("cursor1")
    
main.addEventListener("mouseover", () => {
cursor1.classList.remove("cursor1")
})

main.addEventListener("mouseout", () => {
    cursor1.classList.add("cursor1")
    })
    
    document.addEventListener("mousemove", function(e) {
        cursor1.style.left = e.clientX + "px";
        cursor1.style.top = e.clientY + "px";
    });
});