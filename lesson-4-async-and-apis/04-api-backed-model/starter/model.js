export class BookModel {
  constructor(dataUrl) {
    this.dataUrl = dataUrl;
    this.books = [];
    this.hasLoaded = false;
  }

  async loadBooks() {
    // TODO: fetch this.dataUrl, controleer response.ok en parse JSON.
    // TODO: zet this.books pas na succesvolle parsing en return een result object.
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
