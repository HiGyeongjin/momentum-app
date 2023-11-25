// const backgroundContainer = document.querySelector(".background-container");

const images = [
  "01.jpg",
  "02.jpg",
  "03.jpeg",
  "04.png",
  "05.jpg",
  "06.webp",
  "maybe.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundSize = "100% 100%";
document.body.style.backgroundRepeat = "no-repeat";
//add class name if i want
// document.body.classList.add("custom-background-class");

// backgroundContainer.style.backgroundImage(bgImage);
