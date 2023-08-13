import monkeyData from "./data.js";
import Monkey from "./monkey.js";

const rejectEl = document.getElementById("reject");
const likeEl = document.getElementById("like");
const stickerEl = document.getElementById("sticker-container");
const postContainerEl = document.getElementById("post-container");
const monkeyInfoEl = document.getElementById("monkey-info");
const actionBtnContainer = document.getElementById("action-buttons-container");

let currentMonkeyIndex = 0;
let currentMonkey = new Monkey(monkeyData[currentMonkeyIndex]);
let likedMonkeysCount = 0;
let likedArray = [];

render(currentMonkey);

function render() {
  postContainerEl.innerHTML = currentMonkey.getMonkeyHtml();
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
    currentMonkey.hasBeenLiked = true;
    currentMonkey.hasBeenSwiped = true;
    likedMonkeysCount++;
    likedArray.push(currentMonkey);
    document.querySelector(".like-badge").style.display = "block";

    console.log(
      currentMonkey.hasBeenLiked,
      currentMonkey.hasBeenSwiped,
      likedMonkeysCount
    );
  }
  if (target === "reject") {
    currentMonkey.hasBeenLiked = false;
    currentMonkey.hasBeenSwiped = true;
    document.querySelector(".nope-badge").style.display = "block";
    console.log(
      currentMonkey.hasBeenSwiped,
      currentMonkey.hasBeenLiked,
      likedMonkeysCount
    );
  }
  //   render();
  getNewMonkey();
});

function getNewMonkey() {
  currentMonkeyIndex++;
  if (currentMonkeyIndex < monkeyData.length) {
    currentMonkey = new Monkey(monkeyData[currentMonkeyIndex]);
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
  let symbol = likedMonkeysCount > 0 ? "💖" : "💔";
  likedMonkeysCount > 0
    ? (endPageHeading = `<h2 class=" end-heading match-heading">${symbol}Love is in the air !${symbol}</h2><p class="match-text end-text red">You have identified these ${likedMonkeysCount} possible matches `)
    : (endPageHeading = `<h2 class="non-match-heading end-heading">${symbol}Oh no, it looks like you are not lucky in love this time !${symbol}</h2><img src="./images/chimp-end-img-no-match.jpg" class="end-image">
  <p class="non-match-text end-text red">You have identified ${likedMonkeysCount} matches.</p><p class="non-match-text end-text">Please come back later and see if you can find your perfect match </p>`);

  let endPageContent = `<div class="summary">${endPageHeading}<div class="liked-container">`;

  for (const likedMonkey of likedArray) {
    endPageContent += `
    <div class="liked-img-container">
    <img src= ${likedMonkey.avatar} class="liked-avatar-img"></div>`;
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
    console.log("Reset button clicked");
    currentMonkeyIndex = 0;
    currentMonkey = new Monkey(monkeyData[currentMonkeyIndex]);
    likedMonkeysCount = 0;
    likedArray = [];
    render();
  });
}
