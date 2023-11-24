// const backgroundContainer = document.querySelector(".background-container");

const images = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpg",
  "06.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

//add class name if i want
// document.body.classList.add("custom-background-class");

// backgroundContainer.style.backgroundImage(bgImage);
