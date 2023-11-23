function createQuestionCard() {
  const main = document.querySelector('[data-js="main"]');

  // Create the outer section
  const sectionCard = document.createElement("section");
  sectionCard.classList.add("questioncard");
  main.insertAdjacentElement("afterbegin", sectionCard); // Fix: insert sectionCard into main

  // Create the Bookmark Button
  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("button--bookmark");
  sectionCard.appendChild(buttonBookmark);

  // Create a span into Bookmark Button
  const iconBookmark = document.createElement("span");
  iconBookmark.classList.add("material-symbols-outlined", "card--icon"); // Fix: separate class names
  iconBookmark.textContent = "bookmark"; // Fix: add text content to span
  buttonBookmark.appendChild(iconBookmark);

  // Add Bookmark Animation
  buttonBookmark.addEventListener("click", () => {
    iconBookmark.classList.toggle("card--icon--active");
  });

  // Create Card Question
  const cardQuestion = document.createElement("h3");
  cardQuestion.classList.add("card--title");
  cardQuestion.textContent = "Question for card";
  sectionCard.appendChild(cardQuestion);

  // Create the Answer Button
  const answerButton = document.createElement("button");
  answerButton.classList.add("button--answer");
  answerButton.textContent = "show answer";
  sectionCard.appendChild(answerButton);

  // Create Answer
  const answer = document.createElement("p");
  answer.classList.add("answer");
  answer.classList.add("hidden");
  answer.textContent = "Hi I'm a placeholder answer";
  sectionCard.appendChild(answer);

  // Create Taglist
  const tagList = document.createElement("ul");
  tagList.classList.add("tagline");
  sectionCard.appendChild(tagList);

  // Create Tags in Taglist
  const tag = document.createElement("li");
  tag.classList.add("tag");
  tag.textContent = "#tag";
  tagList.appendChild(tag);

  // Create On Click function for answer

  answerButton.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    if (answer.classList.contains("hidden")) {
      answerButton.textContent = "show answer";
      answerButton.classList.add("button--answer");
      answerButton.classList.remove("button--answer--active");
    } else {
      answerButton.textContent = "hide answer";
      answerButton.classList.add("button--answer--active");
    }
  });

  console.log("HelloHello");
}

createQuestionCard();
