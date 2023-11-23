const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("Question:", questionInput.value);
  console.log("Answer:", answerInput.value);
  console.log("Tag:", tagInput.value);

  console.log("Form Data:", data);
});
