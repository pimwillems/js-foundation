// GECORRIGEERD SCENARIO
const books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }];
const rawId = "1";
const bookId = Number(rawId);
console.log(books.find((book) => book.id === bookId));
