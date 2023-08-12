import dogsData from "./data.js";
import Dog from "./dog.js";

const rejectEl = document.getElementById("reject");
const likeEl = document.getElementById("like");
const stickerEl = document.getElementById("sticker-container");
const postContainerEl = document.getElementById("post-container");
const dogInfoEl = document.getElementById("dog-info");

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
let likedDogsCount = 0;
let likedArray = [];

render();

function render() {
  postContainerEl.innerHTML = currentDog.getDogHtml();
}

// Render the page when loaded
// Create eventlistener for clicking either cross or HTMLTextAreaElement
// Make nope and like badges appear when clicking on buttons
// Set time out for transition to new dog
// Show new dog after a few seconds
// Create an end page
// Remove the like and nope buttons from end page
// Adjust message in case none of the images have been liked.
