const title = "Clean Code";
let borrowedCount = 0;
const book = { id: 1, title, author: "Robert C. Martin", available: true };

borrowedCount = borrowedCount + 1;
book.available = false;

console.log(typeof title, title);
console.log(typeof borrowedCount, borrowedCount);
console.log(typeof book, book);
// const blokkeert een nieuwe binding (book = ...), niet mutatie van properties.
