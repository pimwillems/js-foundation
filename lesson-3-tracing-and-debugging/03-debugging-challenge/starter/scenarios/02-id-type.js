// BEWUST DEFECT SCENARIO
const books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }];
const rawId = "1";
console.log(books.find((book) => book.id === rawId));
