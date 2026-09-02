// GECORRIGEERD SCENARIO
function findBook(books, id) {
  return books.find((book) => book.id === id);
}
console.log(findBook([{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }], 1));
