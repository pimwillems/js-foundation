import { BookModel } from "./model.js";
import { BookView } from "./view.js";

export class BookController {
  constructor(books) { this.model = new BookModel(books); this.view = new BookView(); }

  start() {
    this.view.renderBooks(this.model.getBooks());
    this.view.bindBookAction((action, rawBookId) => this.handleBookAction(action, rawBookId));
    // TODO: bind search één keer aan handleSearch.
  }

  handleBookAction(action, rawBookId) {
    const bookId = Number(rawBookId);
    const result = action === "return"
      ? this.model.returnBook(bookId)
      : this.model.borrowBook(bookId);
    if (!result.ok) {
      this.view.showMessage(result.message, true);
      return;
    }
    this.view.renderBooks(this.model.getBooks());
    this.view.showMessage(result.message);
  }

  handleSearch(query) {
    // TODO: update Model-query en render de afgeleide collectie.
  }
}
