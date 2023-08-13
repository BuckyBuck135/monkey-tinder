import dogsData from "./data.js";
import Dog from "./dog.js";

const rejectEl = document.getElementById("reject");
const likeEl = document.getElementById("like");
const stickerEl = document.getElementById("sticker-container");
const postContainerEl = document.getElementById("post-container");
const dogInfoEl = document.getElementById("dog-info");
const actionBtnContainer = document.getElementById("action-buttons-container");

let currentDogIndex = 0;
let currentDog = new Dog(dogsData[currentDogIndex]);
let likedDogsCount = 0;
let likedArray = [];
// let dogSwiped = false;

render(currentDog);

function render() {
  postContainerEl.innerHTML = currentDog.getDogHtml();
  document.querySelector(".nope-badge").style.display = "none";
  document.querySelector(".like-badge").style.display = "none";
  //   delay();
}

function delay() {
  setTimeout(render, 1500);
}

actionBtnContainer.addEventListener("click", function (e) {
  const target = e.target.id;
  console.log(target);

  if (target === "like") {
    currentDog.hasBeenLiked = true;
    currentDog.hasBeenSwiped = true;
    likedDogsCount++;
    likedArray.push(currentDog);
    document.querySelector(".like-badge").style.display = "block";

    console.log(
      currentDog.hasBeenLiked,
      currentDog.hasBeenSwiped,
      likedDogsCount
    );
  }
  if (target === "reject") {
    currentDog.hasBeenLiked = false;
    currentDog.hasBeenSwiped = true;
    document.querySelector(".nope-badge").style.display = "block";
    console.log(
      currentDog.hasBeenSwiped,
      currentDog.hasBeenLiked,
      likedDogsCount
    );
  }
  //   render();
  getNewDog();
});

function getNewDog() {
  currentDogIndex++;
  if (currentDogIndex < dogsData.length) {
    currentDog = new Dog(dogsData[currentDogIndex]);
    // render();
    delay();
  } else {
    setTimeout(endPageHtml, 1500);
    // endPageHtml();
  }
}

// function delay() {
//   setTimeout(render, 1500);
// }

function endPageHtml() {
  console.log("This is the end page");
  let endPageHeading = " ";
  let symbol = likedDogsCount > 0 ? "💖" : "💔";
  likedDogsCount > 0
    ? (endPageHeading = `<h2 class=" end-heading match-heading">${symbol}Love is in the air !${symbol}</h2><p class="match-text end-text red">You have identified these ${likedDogsCount} possible matches `)
    : (endPageHeading = `<h2 class="non-match-heading end-heading">${symbol}Oh no, it looks like you are not lucky in love this time !${symbol}</h2><img src="./images/chimp-end-img-no-match.jpg" class="end-image">
  <p class="non-match-text end-text red">You have identified ${likedDogsCount} matches.</p><p class="non-match-text end-text">Please come back later and see if you can find your perfect match </p>`);

  let endPageContent = `<div class="summary">${endPageHeading}<div class="liked-container">`;

  for (const likedDog of likedArray) {
    endPageContent += `
    <div class="liked-img-container">
    <img src= ${likedDog.avatar} class="liked-avatar-img"></div>`;
  }
  endPageContent += `</div> <button class="reset" id="reset">Reset</button></div>`;

  postContainerEl.innerHTML = endPageContent;

  document.querySelector(".nope-badge").style.display = "none";
  document.querySelector(".like-badge").style.display = "none";
  document.querySelector(".action-buttons-container").style.display = "none";
  reset();
}

function reset() {
  document.getElementById("reset").addEventListener("click", function () {
    document.querySelector(".action-buttons-container").style.display = "flex";
    console.log("Reset buttock clicked");
    currentDogIndex = 0;
    currentDog = new Dog(dogsData[currentDogIndex]);
    likedDogsCount = 0;
    likedArray = [];
    render();
  });
}

/*/ Render the page when loaded
/*Create eventlistener for clicking either cross or HTMLTextAreaElement
/*Make nope and like badges appear when clicking on buttons
/* Set time out for transition to new dog
/* Show new dog after a few seconds
/* Create an end page
/* Remove the like and nope buttons from end page
/* Adjust message in case none of the images have been liked.*/
