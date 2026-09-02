const books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }];
const listElement = document.querySelector("#book-list");

function renderBooks(items) {
  // TODO: maak met map en een template literal lijstitems; voeg titel, auteur en status toe.
  listElement.textContent = `${items.length} boek(en)`;
}
renderBooks(books);
