import test from "node:test";
import assert from "node:assert/strict";
import { BookModel } from "../lesson-3-tracing-and-debugging/01-complete-mvc-app/solution/model.js";

function createModel() {
  return new BookModel([
    { id: 1, title: "Clean Code", author: "Robert C. Martin", available: true },
    { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: false },
    { id: 3, title: "Don't Make Me Think", author: "Steve Krug", available: true }
  ]);
}

test("leent een beschikbaar boek", () => {
  const model = createModel();
  const result = model.borrowBook(1);
  assert.equal(result.ok, true);
  assert.equal(model.getBooks().find((book) => book.id === 1).available, false);
});

test("weigert een onbeschikbaar boek", () => {
  const model = createModel();
  const result = model.borrowBook(2);
  assert.deepEqual(result, { ok: false, message: "Dit boek is al uitgeleend." });
});

test("weigert een onbekend ID", () => {
  const model = createModel();
  const result = model.borrowBook(99);
  assert.deepEqual(result, { ok: false, message: "Boek niet gevonden." });
});

test("brengt een geleend boek terug", () => {
  const model = createModel();
  const result = model.returnBook(2);
  assert.equal(result.ok, true);
  assert.equal(model.getBooks().find((book) => book.id === 2).available, true);
});

test("zoeken muteert de originele array niet", () => {
  const model = createModel();
  const originalBooks = model.books;
  const originalLength = model.books.length;
  model.setQuery("eloquent");
  const visibleBooks = model.getBooks();
  assert.deepEqual(visibleBooks.map((book) => book.id), [2]);
  assert.equal(model.books, originalBooks);
  assert.equal(model.books.length, originalLength);
});

test("wissen van search herstelt de volledige collectie", () => {
  const model = createModel();
  model.setQuery("clean");
  assert.equal(model.getBooks().length, 1);
  model.setQuery("");
  assert.equal(model.getBooks().length, 3);
});

test("state blijft behouden na geweigerde operatie", () => {
  const model = createModel();
  const before = model.books.map((book) => ({ ...book }));
  model.borrowBook(2);
  model.borrowBook(99);
  assert.deepEqual(model.books, before);
});
