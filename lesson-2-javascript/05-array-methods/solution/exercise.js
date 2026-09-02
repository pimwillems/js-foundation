const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", available: true },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: false }
];

const missingBook = books.find((book) => book.id === 99);
console.log(missingBook); // undefined

books.forEach((book) => console.log(book.title));
const titles = books.map((book) => book.title);
console.log(titles);
