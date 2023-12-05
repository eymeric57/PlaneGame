

let astronaute = document.getElementById("astronaute");

setTimeout(function() {
    astronaute.classList.add("astroAnim");
}, 2000);

setTimeout(function() {
    game.classList.add("gameEnd");
}, 2500);

setTimeout(function() {
    window.location.href = "../lvl11/lvl11.html"
}, 5500);