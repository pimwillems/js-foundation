const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", available: true },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: false }
];

console.log(books[1].title);
books.push({ id: 3, title: "Don't Make Me Think", author: "Steve Krug", available: true });
console.log(books.length);
