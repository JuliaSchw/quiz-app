function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "Quiz App";
  title.classList.add("title"); // Fix: add class to title, not header

  header.appendChild(title); // Fix: append title to header

  document.body.insertAdjacentElement("afterbegin", header); // Fix: insert at the beginning of the body

  console.log("Hello");
}

createHeader();
