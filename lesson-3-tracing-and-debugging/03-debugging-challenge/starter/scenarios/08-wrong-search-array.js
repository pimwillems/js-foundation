// BEWUST DEFECT SCENARIO
function search(books, visibleBooks, query) {
  return visibleBooks.filter((book) => book.title.includes(query));
}
