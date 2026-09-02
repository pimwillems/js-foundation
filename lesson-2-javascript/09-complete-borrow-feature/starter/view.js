export class BookView {
  constructor() {
    this.list = document.querySelector("#book-list");
    this.message = document.querySelector("#message");
  }
  renderBooks(books) {
    this.list.innerHTML = books.map((book) => `<li class="book"><div><h2>${book.title}</h2><p>${book.author}</p><p class="status">${book.available ? "Beschikbaar" : "Uitgeleend"}</p></div><button type="button" data-book-id="${book.id}">Lenen</button></li>`).join("");
  }
  bindBorrow(handler) {
    this.list.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-book-id]");
      if (button) handler(button.dataset.bookId);
    });
  }
  showMessage(text, isError = false) {
    this.message.textContent = text;
    this.message.className = isError ? "message error" : "message";
  }
}
