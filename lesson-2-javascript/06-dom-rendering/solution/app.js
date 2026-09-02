const books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }];
const listElement = document.querySelector("#book-list");

function renderBooks(items) {
  listElement.innerHTML = items.map((book) => {
    const status = book.available ? "Beschikbaar" : "Uitgeleend";
    return `<li class="book"><div><h2>${book.title}</h2><p>${book.author}</p><p>${status}</p></div></li>`;
  }).join("");
}
renderBooks(books);
