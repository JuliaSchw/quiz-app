const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');

// Add input event listeners outside of the submit event listener
questionInput.addEventListener("input", (event) => {
  console.log("Question:", event.target.value);
});

answerInput.addEventListener("input", (event) => {
  console.log("Answer:", event.target.value);
});

tagInput.addEventListener("input", (event) => {
  console.log("Tag:", event.target.value);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("Form Data:", data);
});
