import { BookModel } from "./model.js";
import { BookView } from "./view.js";
// TODO: importeer BookController en start de app.
const books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }];
const model = new BookModel(books);
const view = new BookView();
void model;
void view;
