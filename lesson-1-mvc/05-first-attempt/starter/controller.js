export class BookController {
  constructor(model, view) { this.model = model; this.view = view; }
  start() {
    this.view.renderBooks(this.model.getBooks());
    // TODO: verbind de View met handleBorrow.
  }
  handleBorrow(rawBookId) {
    // TODO: zet het ID om, roep Model aan, toon resultaat en render bij succes.
  }
}
