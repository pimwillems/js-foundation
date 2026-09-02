// BEWUST DEFECT SCENARIO
function borrowBook(books, id) {
  const book = books.find((item) => item.id === id);
  book.available = false;
}
