export class BookView {
  constructor() {
    this.listElement = document.querySelector("#book-list");
    this.messageElement = document.querySelector("#message");
  }
  renderBooks(books) {
    this.listElement.innerHTML = books.map((book) => `<li class="book"><span>${book.title} — ${book.available ? "Beschikbaar" : "Uitgeleend"}</span><button type="button" data-book-id="${book.id}">Lenen</button></li>`).join("");
  }
  bindBorrow(handler) {
    // TODO: koppel één click-listener en geef dataset.bookId aan handler.
  }
  showMessage(message) { this.messageElement.textContent = message; }
}
