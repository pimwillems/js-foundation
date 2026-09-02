const books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }];

function getBookTitle(book) {
  // TODO: geef de titel van book terug.
}

const logBook = (book) => {
  console.log(book.title);
};

console.log(getBookTitle(books[0]));
logBook(books[0]);
