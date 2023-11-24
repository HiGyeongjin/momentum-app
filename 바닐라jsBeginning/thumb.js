const h1 = document.querySelector("h1");

function windowResize() {
  if(innerWidth < 100){
    document.body.style.backgroundcolor = "blue";
} else

window.addEventListener("resize", windowResize);