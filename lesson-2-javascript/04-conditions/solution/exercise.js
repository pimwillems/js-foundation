function canBorrow(book, requestedId) {
  if (!book) return { ok: false, message: "Boek ontbreekt." };
  if (book.id !== requestedId) return { ok: false, message: "ID klopt niet." };
  if (!book.available) return { ok: false, message: "Boek is uitgeleend." };
  return { ok: true, message: "Lenen toegestaan." };
}

function describeAvailability(book) {
  if (book.available === true) {
    return "Beschikbaar";
  } else {
    return "Uitgeleend";
  }
}

console.log(canBorrow(undefined, 1));
console.log(canBorrow({ id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: true }, 1));
console.log(canBorrow({ id: 1, title: "Clean Code", author: "Robert C. Martin", available: false }, 1));
console.log(describeAvailability({ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }));
