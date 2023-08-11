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
  document.getElementById("nope-sticker").classList.remove("hidden");
  document.getElementById("like-sticker").classList.add("hidden");
  delay();
  //   getNewDog();
}

function like() {
  //   console.log("click like");
  document.getElementById("like-sticker").classList.remove("hidden");
  document.getElementById("nope-sticker").classList.add("hidden");
  delay();
  //   getNewDog();
}

function renderDog(currentDog) {
  //   delay();
  postContainerEl.innerHTML = currentDog.getDogHtml();
  //   document.getElementById("like-sticker").classList.add("hidden");
  //   document.getElementById("nope-sticker").classList.add("hidden");
}

// function match() {
//   currentDog.getMatchStatus(true);
//   getNewDog(currentDog);

function delay() {
  setTimeout(getNewDog, 2000);
}

// function getNewDog() {
//   document.getElementById("like-sticker").classList.add("hidden");
//   document.getElementById("nope-sticker").classList.add("hidden");
//   currentDogIndex += 1;
//   if (dogs.length === currentDogIndex + 1) {
//     renderDog(currentDog);
//   } else {
//     currentDogIndex = 0;
//     renderDog(currentDog);
//   }
function getNewDog() {
  if (currentDogIndex + 1 >= dogs.length) {
    currentDogIndex = 0;
  } else {
    currentDogIndex += 1;
  }
  const newDog = new Dog(dogs[currentDogIndex]);
  renderDog(newDog);

  //   setTimeout(getNewDog, 2000);
}

// }

// function match() {
//   currentDog.getMatchStatus(true);
//   getNewDog();
// }
// function setBackground(path) {
//   postContainerEl.style.backgroundImage = `url(${path})`;
//
