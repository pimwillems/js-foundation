export class BookModel {
  constructor(books) { this.books = books.map((book) => ({ ...book })); }
  getBooks() { return this.books; }
  borrowBook(bookId) {
    const book = this.books.find((candidate) => candidate.id === bookId);
    if (!book) return { ok: false, message: "Boek niet gevonden." };
    if (!book.available) return { ok: false, message: "Dit boek is al uitgeleend." };
    book.available = false;
    return { ok: true, message: "Boek geleend." };
  }
}
