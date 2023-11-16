const changeIcon = document.querySelector('[data-js="bookmark--icon"]');
const button = document.querySelector('[data-js="bookmark"]');

button.addEventListener("click", () => {
  changeIcon.classList.toggle("card--icon--active");
});
