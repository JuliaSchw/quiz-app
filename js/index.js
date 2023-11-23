// Save to Bookmarks Click Event

const saveToBookmarksButton = document.querySelector('[data-js="bookmark"]');
const paintBookmark = document.querySelector('[data-js="bookmark--icon"]');

saveToBookmarksButton.addEventListener("click", () => {
  paintBookmark.classList.toggle("card--icon--active");
});

// Show and Hide the Answer on click

const answerButton = document.querySelector('[data-js="button--answer"]');

function showAnswerText() {
  // create a new element for the answer text as <h3>
  const answerText = document.createElement("h3");

  // fill the h3 element with some text
  answerText.textContent = "This is a test";
  answerText.classList.add("answer");

  // place the new element under the answerButton
  answerButton.insertAdjacentElement("afterend", answerText);

  // change the text to "hide answer"
  answerButton.textContent = "hide answer";
}

function showAnswer() {
  answerButton.addEventListener("click", () => {
    showAnswerText();
  });
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
    answerText.remove();
  }
}

answerButton.addEventListener("click", updateClickCount);
