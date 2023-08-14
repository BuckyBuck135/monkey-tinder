import monkeyData from "./data.js";
import Monkey from "./monkey.js";

const postContainerEl = document.getElementById("post-container");
// const actionBtnContainer = document.getElementById("action-buttons-container");

let currentMonkeyIndex = 0;
let currentMonkey = new Monkey(monkeyData[currentMonkeyIndex]);
let likedMonkeysCount = 0;
let likedArray = [];

render();

function render() {
  postContainerEl.innerHTML = currentMonkey.getMonkeyHtml();
  document.querySelector(".nope-badge").style.display = "none";
  document.querySelector(".like-badge").style.display = "none";
}

document.body.addEventListener("click", function (e) {
  const targetId = e.target.id;
  console.log(targetId);

  if (targetId === "like") {
    currentMonkey.hasBeenLiked = true;
    currentMonkey.hasBeenSwiped = true;
    likedMonkeysCount++;
    likedArray.push(currentMonkey);
    document.querySelector(".like-badge").style.display = "block";
    getNewMonkey();
    console.log(
      currentMonkey.hasBeenLiked,
      currentMonkey.hasBeenSwiped,
      likedMonkeysCount
    );
  } else if (targetId === "reject") {
    currentMonkey.hasBeenLiked = false;
    currentMonkey.hasBeenSwiped = true;
    document.querySelector(".nope-badge").style.display = "block";
    getNewMonkey();
    console.log(
      currentMonkey.hasBeenSwiped,
      currentMonkey.hasBeenLiked,
      likedMonkeysCount
    );
  } else if (targetId.startsWith("liked-avatar-img")) {
    const monkeyId = targetId.replace("liked-avatar-img-", ""); // Extract the monkey's id
    const likedMonkey = likedArray.find((monkey) => monkey.id === monkeyId);

    if (likedMonkey) {
      openMatchingScreen(likedMonkey);
    }
  }
});

function getNewMonkey() {
  currentMonkeyIndex++;
  if (currentMonkeyIndex < monkeyData.length) {
    currentMonkey = new Monkey(monkeyData[currentMonkeyIndex]);
    delay(render);
  } else {
    delay(endPageHtml);
  }
}

function delay(page) {
  setTimeout(page, 1000);
}

function endPageHtml() {
  document.querySelector(".nope-badge").style.display = "none";
  document.querySelector(".like-badge").style.display = "none";
  document.querySelector(".action-buttons-container").style.display = "none";
  console.log("This is the end page");

  let endPageHeading = " ";
  let symbol = likedMonkeysCount > 0 ? "💖" : "💔";
  likedMonkeysCount > 0
    ? (endPageHeading = `<h2 class=" end-heading match-heading">${symbol}Love is in the air !${symbol}</h2><p class="match-text end-text red">You have identified these ${likedMonkeysCount} possible matches `)
    : (endPageHeading = `<h2 class="non-match-heading end-heading">${symbol}Oh no, it looks like you are not lucky in love this time !${symbol}</h2><img src="./images/sad-monkey-no-match.jpg" class="end-image">
  <p class="non-match-text end-text red">You have identified ${likedMonkeysCount} matches.</p><p class="non-match-text end-text">Please come back later and see if you can find your perfect match </p>`);

  let endPageContent = `<div class="summary">${endPageHeading}<div class="liked-container">`;

  for (const likedMonkey of likedArray) {
    endPageContent += `
    <div class="liked-img-container">
    <img src= ${likedMonkey.avatar} class="liked-avatar-img" id="liked-avatar-img-${likedMonkey.id}"></div>`;
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
}

function openMatchingScreen(monkey) {
  const matchingScreenHtml = `<div class="matching-screen">
      <h2 class="match-monkey-name">💖 Meet ${monkey.name} 💖</h2>
        <img src="${monkey.avatar}" alt="${monkey.name}" class="matching-image">
      </div>
      </div> <button class="reset" id="reset">Reset</button></div>`;
  postContainerEl.innerHTML = matchingScreenHtml;
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
