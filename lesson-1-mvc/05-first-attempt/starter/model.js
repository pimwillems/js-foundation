export class BookModel {
  constructor(books) { this.books = books; }
  getBooks() { return this.books; }
  borrowBook(bookId) {
    // TODO: vind het boek, controleer ontbrekend/onbeschikbaar en wijzig available.
  }
}
