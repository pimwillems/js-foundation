export class BookModel {
  constructor(books) { this.books = books.map((book) => ({ ...book })); }
  getBooks() { return this.books; }
  borrowBook(bookId) {
    const book = this.books.find((candidate) => candidate.id === bookId);
    // TODO: handel undefined en unavailable af met result objects.
    // TODO: muteer available alleen bij succes en return ook dan een result object.
  }
}
