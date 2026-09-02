import { BookModel } from "./model.js";
import { BookView } from "./view.js";

export class BookController {
  constructor(books) { this.model = new BookModel(books); this.view = new BookView(); }
  start() {
    this.view.renderBooks(this.model.getBooks());
    this.view.bindBorrow((rawBookId) => this.handleBorrow(rawBookId));
  }
  handleBorrow(rawBookId) {
    const bookId = Number(rawBookId);
    const result = this.model.borrowBook(bookId);
    if (!result.ok) {
      this.view.showMessage(result.message, true);
      return;
    }
    this.view.renderBooks(this.model.getBooks());
    this.view.showMessage(result.message);
  }
}
