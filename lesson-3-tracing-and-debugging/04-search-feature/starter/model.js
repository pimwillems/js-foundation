export class BookModel {
  constructor(books) {
    this.books = books.map((book) => ({ ...book }));
    this.query = "";
  }

  getBooks() {
    const normalizedQuery = this.query.trim().toLowerCase();
    // TODO: geef bij een query een gefilterde, afgeleide collectie terug.
    return this.books;
  }

  setQuery(query) {
    // TODO: bewaar de zoekterm zonder de originele books-array te overschrijven.
  }

  borrowBook(bookId) {
    const book = this.books.find((candidate) => candidate.id === bookId);
    if (!book) return { ok: false, message: "Boek niet gevonden." };
    if (!book.available) return { ok: false, message: "Dit boek is al uitgeleend." };
    book.available = false;
    return { ok: true, message: "Boek geleend." };
  }

  returnBook(bookId) {
    const book = this.books.find((candidate) => candidate.id === bookId);
    if (!book) return { ok: false, message: "Boek niet gevonden." };
    if (book.available) return { ok: false, message: "Dit boek was niet uitgeleend." };
    book.available = true;
    return { ok: true, message: "Boek teruggebracht." };
  }
}
