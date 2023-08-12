import dogsData from "./data.js";
import Dog from "./dog.js";

const rejectEl = document.getElementById("reject");
const likeEl = document.getElementById("like");
const stickerEl = document.getElementById("sticker-container");
const postContainerEl = document.getElementById("post-container");
const dogInfoEl = document.getElementById("dog-info");

rejectEl.addEventListener("click", reject);
likeEl.addEventListener("click", like);

let currentDogIndex = 0;
const currentDog = new Dog(dogsData[currentDogIndex]);

let likedArray = [];

renderDog(currentDog);

function reject() {
  console.log("Reject clicked");
  document.getElementById("nope-wrapper").classList.remove("hidden");
  document.getElementById("like-wrapper").classList.add("hidden");
  currentDog.hasBeenSwiped = true;
  currentDog.hasBeenLiked = false;
  delay();
}

function like() {
  console.log("like clicked");
  document.getElementById("like-wrapper").classList.remove("hidden");
  document.getElementById("nope-wrapper").classList.add("hidden");
  currentDog.hasBeenSwiped = true;
  currentDog.hasBeenLiked = true;
  delay();
}

function renderDog(dog) {
  postContainerEl.innerHTML = dog.getDogHtml();
  getNewDog();
}

function delay() {
  setTimeout(getNewDog, 1500);
}

function getNewDog() {
  document.getElementById("nope-wrapper").classList.add("hidden");
  document.getElementById("like-wrapper").classList.add("hidden");
  if (currentDogIndex + 1 >= dogsData.length) {
    currentDogIndex = 0;
  } else {
    currentDogIndex += 1;
  }
  const newDog = new Dog(dogsData[currentDogIndex]);
  renderDog(newDog);
}

// function noMatchesMessage() {
//   postContainerEl.innerHTML = `<h2> You have no matches</h2>`;
// }
// Render the page when loaded
// Create eventlistener for clicking either cross or HTMLTextAreaElement
// Make nope and like badges appear when clicking on buttons
// Set time out for transition to new dog
// Show new dog after a few seconds
// Create an end page
// Remove the like and nope buttons from end page
// Adjust message in case none of the images have been liked.
