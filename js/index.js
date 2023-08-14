import monkeyData from "./data.js";
import Monkey from "./monkey.js";

const postContainerEl = document.getElementById("post-container");
const actionButtonsContainer = document.getElementById(
  "action-buttons-container"
);
const nopeBadge = document.getElementById("nope-badge");
const likeBadge = document.getElementById("nope-badge");

let currentMonkeyIndex = 0;
let currentMonkey = new Monkey(monkeyData[currentMonkeyIndex]);
let likedMonkeysCount = 0;
let likedArray = [];

actionButtonsContainer.addEventListener("click", handleSwipe);
postContainerEl.addEventListener("click", handleLikedMonkeyClick);

render();

function handleSwipe(e) {
  const targetId = e.target.id;
  if (targetId === "like") {
    currentMonkey.hasBeenLiked = true;
    currentMonkey.hasBeenSwiped = true;
    likedMonkeysCount++;
    likedArray.push(currentMonkey);
    document.querySelector(".like-badge").style.display = "block";
    getNewMonkey();
  } else if (targetId === "reject") {
    currentMonkey.hasBeenLiked = false;
    currentMonkey.hasBeenSwiped = true;
    document.querySelector(".nope-badge").style.display = "block";
    getNewMonkey();
  }
}

function handleLikedMonkeyClick(e) {
  const targetId = e.target.id;
  if (targetId.startsWith("liked-avatar-img")) {
    const monkeyId = targetId.replace("liked-avatar-img-", "");
    const likedMonkey = likedArray.find((monkey) => monkey.id === monkeyId);

    if (likedMonkey) {
      openMatchingScreen(likedMonkey);
    }
  }
}

// Render function including setting transition effects between monkey images and hiding the badges
function render() {
  postContainerEl.innerHTML = currentMonkey.getMonkeyHtml();
  nopeBadge.style.display = "none";
  likeBadge.style.display = "none";
  transitionImages();
}

function transitionImages() {
  const monkeyImg = document.getElementById("monkey-img");
  monkeyImg.style.opacity = "1";
  monkeyImg.style.transform = "scale(1)";
}

// Checking index to see if to display another monkey image or the end page screen //
const getNewMonkey = () => {
  currentMonkeyIndex++;
  if (currentMonkeyIndex < monkeyData.length) {
    currentMonkey = new Monkey(monkeyData[currentMonkeyIndex]);
    delay(render);
  } else {
    delay(endPageHtml);
  }
};

// Adding delay effect of 1 second //
const delay = (page) => setTimeout(page, 1000);

// End page screen displaying corresponding match/no match message and the function for clicking on a selected liked monkey from the end screen //
const endPageHtml = () => {
  document.querySelector(".nope-badge").style.display = "none";
  document.querySelector(".like-badge").style.display = "none";
  document.querySelector(".action-buttons-container").style.display = "none";

  const symbol = likedMonkeysCount > 0 ? "💖" : "💔";
  const endPageHeading =
    likedMonkeysCount > 0
      ? `<h2 class="end-heading match-heading">${symbol}Love is in the air !${symbol}</h2>
        <p class="end-text red">You have identified these ${likedMonkeysCount} possible matches `
      : `<h2 class="non-match-heading end-heading">${symbol}Oh no, it looks like you are not lucky in love this time !${symbol}</h2>
        <img src="./images/sad-monkey-no-match.jpg" class="end-image" alt="sad looking chimpanzee">
        <p class="non-match-text end-text red">You have identified ${likedMonkeysCount} matches.</p>
        <p class="end-text">Please come back later and see if you can find your perfect match </p>`;

  let endPageContent = `<div class="summary">${endPageHeading}<div class="liked-container">`;
  for (const likedMonkey of likedArray) {
    endPageContent += `
    <div class="liked-img-container">
    <img src= ${likedMonkey.avatar} class="liked-avatar-img" id="liked-avatar-img-${likedMonkey.id}" alt="monkey-image"></div>`;
  }

  endPageContent += `</div> <button class="reset" id="reset">Reset</button></div>`;
  postContainerEl.innerHTML = endPageContent;

  for (const likedMonkey of likedArray) {
    let imgElement = document.getElementById(
      `liked-avatar-img-${likedMonkey.id}`
    );
    console.log(imgElement);
    imgElement.addEventListener("click", function () {
      console.log("Clicked on monkey: ${likedMonkey.id}");
      openMatchingScreen(likedMonkey);
    });
  }

  reset();
};

// The page that opens when you have selected the liked monkey image from the end page //
const openMatchingScreen = (monkey) => {
  const matchingScreenHtml = `<div>
      <h2 class="match-monkey-name">💖 Meet ${monkey.name} 💖</h2>
        <img src="${monkey.avatar}" alt="${monkey.name}" class="matching-image" alt="monkey image">
      </div>
      </div> <button class="reset" id="reset">Reset</button></div>`;
  postContainerEl.innerHTML = matchingScreenHtml;
  reset();
};

// Resets everything so the first monkey is shown again //
const reset = () => {
  document.getElementById("reset").addEventListener("click", function () {
    document.querySelector(".action-buttons-container").style.display = "flex";
    currentMonkeyIndex = 0;
    currentMonkey = new Monkey(monkeyData[currentMonkeyIndex]);
    likedMonkeysCount = 0;
    likedArray = [];
    render();
  });
};
