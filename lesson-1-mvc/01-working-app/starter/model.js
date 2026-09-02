export class BookModel {
  constructor(books) {
    this.books = books.map((book) => ({ ...book }));
    this.query = "";
  }

  getBooks() {
    const normalizedQuery = this.query.trim().toLowerCase();
    if (!normalizedQuery) return this.books;
    return this.books.filter((book) => {
      return book.title.toLowerCase().includes(normalizedQuery) ||
        book.author.toLowerCase().includes(normalizedQuery);
    });
  }

  borrowBook(bookId) {
    const book = this.books.find((candidate) => candidate.id === bookId);
    if (!book) return { ok: false, message: "Boek niet gevonden." };
    if (!book.available) return { ok: false, message: "Dit boek is al uitgeleend." };
    book.available = false;
    return { ok: true, message: "Boek geleend." };
  }
}
