import { BookController } from "./controller.js";
const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", available: true },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: false }
];
new BookController(books).start();
