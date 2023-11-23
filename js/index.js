// Save to Bookmarks Click Event

const saveToBookmarksButton = document.querySelector('[data-js="bookmark"]');
const paintBookmark = document.querySelector('[data-js="bookmark--icon"]');

saveToBookmarksButton.addEventListener("click", () => {
  paintBookmark.classList.toggle("card--icon--active");
});
