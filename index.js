import dogs from "./data.js";
import Dog from "./dog.js";

const rejectEl = document.getElementById("reject");
const likeEl = document.getElementById("like");
const stickerEl = document.getElementById("sticker-container");
const postContainerEl = document.getElementById("post-container");
const dogInfoEl = document.getElementById("dog-info");

rejectEl.addEventListener("click", reject);
likeEl.addEventListener("click", like);

let currentDogIndex = 0;
const currentDog = new Dog(dogs[currentDogIndex]);

renderDog(currentDog);

function reject() {
  console.log("click reject");
  document.getElementById("nope-sticker").classList.remove("hidden");
  document.getElementById("like-sticker").classList.add("hidden");
}

function like() {
  console.log("click like");
  document.getElementById("like-sticker").classList.remove("hidden");
  document.getElementById("nope-sticker").classList.add("hidden");
}

function renderDog(currentDog) {
  postContainerEl.innerHTML = currentDog.getDogHtml();
}

// function getNewDog() {
//   setTimeout(function () {
//     currentDogIndex += 1;
//     currentDog = new Dog(dogs[currentDogIndex]);
//     renderDog();
//   }, 2000);
// }

// function match() {
//   currentDog.getMatchStatus(true);
//   getNewDog();
// }
// function setBackground(path) {
//   postContainerEl.style.backgroundImage = `url(${path})`;
// }
