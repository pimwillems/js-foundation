const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", available: true },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: false }
];

const missingBook = books.find((book) => book.id === 99);
console.log(missingBook);

// TODO: gebruik forEach om iedere titel te loggen.
// TODO: gebruik map om een nieuwe array met titels te maken.
