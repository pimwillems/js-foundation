const books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }];

function getBookTitle(book) {
  return book.title;
}

const logBook = (book) => {
  console.log(book.title);
};

console.log(getBookTitle(books[0]));
logBook(books[0]);
// books[0] is het argument; book is binnen beide functies de parameter.
