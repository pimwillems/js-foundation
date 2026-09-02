export class BookModel {
  constructor(dataUrl) {
    this.dataUrl = dataUrl;
    this.books = [];
    this.hasLoaded = false;
  }

  async loadBooks() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        return { ok: false, message: `Boeken laden mislukt (${response.status}).` };
      }
      const books = await response.json();
      this.books = books.map((book) => ({ ...book }));
      this.hasLoaded = true;
      return { ok: true, books: this.getBooks() };
    } catch (error) {
      return { ok: false, message: "De boeken konden niet worden geladen." };
    }
  }

  getBooks() {
    return this.books;
  }

  borrowBook(bookId) {
    const book = this.books.find((candidate) => candidate.id === bookId);
    if (!book) return { ok: false, message: "Boek niet gevonden." };
    if (!book.available) return { ok: false, message: "Dit boek is al uitgeleend." };
    book.available = false;
    return { ok: true, message: "Boek geleend." };
  }
}
