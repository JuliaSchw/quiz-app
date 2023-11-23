// Save to Bookmarks Click Event

const saveToBookmarksButton = document.querySelector('[data-js="bookmark"]');
const paintBookmark = document.querySelector('[data-js="bookmark--icon"]');

saveToBookmarksButton.addEventListener("click", () => {
  paintBookmark.classList.toggle("card--icon--active");
});

// Show and Hide the Answer on click

const answerButton = document.querySelector('[data-js="button--answer"]');
// create a new element for the answer text as <h3>
const answerText = document.createElement("h3");

function showAnswer() {
  // fill the h3 element with some text + add class
  answerText.textContent = "This is a test";
  answerText.classList.add("answer");
  answerText.classList.remove("hidden");

  // place the new element under the answerButton
  answerButton.insertAdjacentElement("afterend", answerText);

  // change the text to "hide answer"
  answerButton.textContent = "hide answer";
}

function hideAnswer() {
  answerText.classList.add("hidden");
  answerButton.textContent = "show answer";
}

var clickCount = 0;

// Function to update click count
function updateClickCount() {
  clickCount++;
  console.log("Click count: " + clickCount);

  // Check if click count is odd and not zero
  if (clickCount % 2 !== 0 && clickCount !== 0) {
    showAnswer();
  } else {
    hideAnswer();
  }
}

answerButton.addEventListener("click", updateClickCount);
