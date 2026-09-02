export class BookView {
  constructor() {
    this.list = document.querySelector("#book-list");
    this.message = document.querySelector("#message");
    this.search = document.querySelector("#search");
  }

  renderBooks(books) {
    if (books.length === 0) {
      this.list.innerHTML = '<li class="panel">Geen boeken gevonden.</li>';
      return;
    }
    this.list.innerHTML = books.map((book) => {
      const status = book.available ? "Beschikbaar" : "Uitgeleend";
      const statusClass = book.available ? "available" : "unavailable";
      return `<li class="book"><div><h2>${book.title}</h2><p>${book.author}</p><p class="status ${statusClass}">${status}</p></div><div class="actions"><button type="button" data-action="borrow" data-book-id="${book.id}">Lenen</button><button type="button" data-action="return" data-book-id="${book.id}">Terugbrengen</button></div></li>`;
    }).join("");
  }

  showMessage(text, isError = false) {
    this.message.textContent = text;
    this.message.className = isError ? "message error" : "message";
  }

  bindBookAction(handler) {
    this.list.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      handler(button.dataset.action, button.dataset.bookId);
    });
  }

  bindSearch(handler) {
    this.search.addEventListener("input", (event) => handler(event.target.value));
  }
}
