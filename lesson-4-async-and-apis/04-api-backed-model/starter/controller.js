import { BookModel } from "./model.js";
import { BookView } from "./view.js";

export class BookController {
  constructor(dataUrl) {
    this.model = new BookModel(dataUrl);
    this.view = new BookView();
    this.started = false;
  }

  async start() {
    if (this.started) return;
    this.started = true;
    this.view.bindBorrow((rawBookId) => this.handleBorrow(rawBookId));
    this.view.renderLoading();
    // TODO: await model.loadBooks(), toon error of render boeken.
  }

  handleBorrow(rawBookId) {
    const result = this.model.borrowBook(Number(rawBookId));
    if (!result.ok) {
      this.view.showError(result.message);
      return;
    }
    this.view.renderBooks(this.model.getBooks());
    this.view.showMessage(result.message);
  }
}
