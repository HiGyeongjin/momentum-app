const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please write a number.");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink.");
} else if (age > 51) {
  console.log("You are too old");
}
// const yourName = prompt("What is your name?");
// const thanks = alert("Thanks!");

console.log(age);
// console.log(isNaN(yourName));
// console.log(thanks);

//NaN  Not A Number
//isNaN()   is Not A Number
// parseInt     string to number("15">15)

const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

title.innerText = "Hello";

title.style.color = "beige"; // JS에서 CSS를 바꿀수있음.

function handleTitleClick() {
  title.style.color = "red";
  title.innerText = "Mouse is here!";
}
function handleTitleLeave() {
  title.style.color = "beige";
  title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("You copy it!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("Yes WIFI");
}
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "beige") {
    newColor = "tomato";
  } else {
    newColor = "beige";
  }
  h1.style.color = newColor;
}

function handleTitleClick() {
  h1.classList.toggle("clicked");
  // const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  //  }
  //위에 //이거랑 젤 위에 toggle하는거랑 같음..
}

title.onmouseenter = handleTitleClick;
title.addEventListener("mouseleave", handleTitleLeave);
//^^both works the same but different method

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
