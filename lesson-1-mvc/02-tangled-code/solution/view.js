export class BookView {
  constructor() {
    this.listElement = document.querySelector("#book-list");
    this.messageElement = document.querySelector("#message");

  }

  renderBooks(books) {
    if (books.length === 0) {
      this.listElement.innerHTML = '<li class="panel">Geen boeken gevonden.</li>';
      return;
    }

    this.listElement.innerHTML = books.map((book) => {
      const statusClass = book.available ? "available" : "unavailable";
      const statusText = book.available ? "Beschikbaar" : "Uitgeleend";
      return `<li class="book">
        <div><h2>${book.title}</h2><p>${book.author}</p>
        <p class="status ${statusClass}">${statusText}</p></div>
        <div class="actions">
          <button type="button" data-action="borrow" data-book-id="${book.id}">Lenen</button>

        </div>
      </li>`;
    }).join("");
  }

  showMessage(message, isError = false) {
    this.messageElement.textContent = message;
    this.messageElement.className = isError ? "message error" : "message";
  }

  bindBookAction(handler) {
    this.listElement.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      handler(button.dataset.action, button.dataset.bookId);
    });
  }
}
