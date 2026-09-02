const books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }];
const list = document.querySelector("#book-list");

function render() {
  books.map((book) => `<li><button data-id="${book.id}">${book.title}</button></li>`);
  list.innerHTML = books.map((book) => `<li><button type="button" data-id="${book.id}">${book.title}</button></li>`).join("");
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-id]");
    if (button) handleBorrow({ target: button });
  });
}
function handleBorrow(event) {
  const book = books.find((item) => item.id === event.target.dataset.id);
  book.available = false;
  showSuccess(book.title); // Niet geïmporteerd of gedefinieerd.
  // Geen render.
}
render();
render(); // Een tweede, nieuwe listener wordt aan dezelfde lijst gekoppeld.
