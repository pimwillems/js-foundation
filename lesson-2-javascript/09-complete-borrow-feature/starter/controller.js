import { BookModel } from "./model.js";
import { BookView } from "./view.js";

export class BookController {
  constructor(books) { this.model = new BookModel(books); this.view = new BookView(); }
  start() {
    this.view.renderBooks(this.model.getBooks());
    this.view.bindBorrow((rawBookId) => this.handleBorrow(rawBookId));
  }
  handleBorrow(rawBookId) {
    // TODO: converteer de datasetstring expliciet.
    // TODO: roep Model aan, toon errors en render opnieuw bij succes.
  }
}
