// GECORRIGEERD SCENARIO
function search(books, query) {
  const normalizedQuery = query.toLowerCase();
  return books.filter((book) => book.title.toLowerCase().includes(normalizedQuery));
}
