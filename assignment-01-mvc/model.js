// model.js — owns all data. No DOM, no fetch, no decisions.

let books = [
  { id: 1, title: '1984', author: 'George Orwell', available: true },
  { id: 2, title: 'Brave New World', author: 'Aldous Huxley', available: true },
  { id: 3, title: 'Fahrenheit 451', author: 'Ray Bradbury', available: false },
  { id: 4, title: 'The Handmaid\'s Tale', author: 'Margaret Atwood', available: true },
];

export function getBooks() {
  return books;
}

export function getBookById(id) {
  return books.find((book) => book.id === id);
}

export function markAsBorrowed(id) {
  const book = getBookById(id);
  book.available = false;
}
