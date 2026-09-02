export class BookView {
  constructor() {
    this.list = document.querySelector("#book-list");
    this.status = document.querySelector("#status");
  }

  renderLoading() {
    this.status.textContent = "Boeken laden…";
    this.status.className = "message";
    this.list.replaceChildren();
  }

  renderBooks(books) {
    this.list.replaceChildren();
    if (books.length === 0) {
      this.status.textContent = "Geen boeken gevonden.";
      return;
    }
    this.status.textContent = "";
    for (const book of books) {
      const item = document.createElement("li");
      item.className = "book";
      const details = document.createElement("div");
      const heading = document.createElement("h2");
      heading.textContent = book.title;
      const author = document.createElement("p");
      author.textContent = book.author;
      details.append(heading, author);
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.bookId = String(book.id);
      button.textContent = book.available ? "Lenen" : "Uitgeleend";
      item.append(details, button);
      this.list.append(item);
    }
  }

  showError(message) {
    this.status.textContent = message;
    this.status.className = "message error";
  }

  showMessage(message) {
    this.status.textContent = message;
    this.status.className = "message";
  }

  bindBorrow(handler) {
    this.list.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-book-id]");
      if (button) handler(button.dataset.bookId);
    });
  }
}
