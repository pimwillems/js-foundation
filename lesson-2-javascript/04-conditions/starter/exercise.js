function canBorrow(book, requestedId) {
  // TODO: early return als book ontbreekt.
  // TODO: controleer met === of het ID klopt.
  // TODO: weiger met ! wanneer het boek niet beschikbaar is.
  return { ok: true, message: "Lenen toegestaan." };
}

function describeAvailability(book) {
  // TODO: gebruik if/else en === om expliciet "Beschikbaar" of "Uitgeleend" terug te geven.
}

console.log(canBorrow(undefined, 1));
console.log(canBorrow({ id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: true }, 1));
console.log(canBorrow({ id: 1, title: "Clean Code", author: "Robert C. Martin", available: false }, 1));
console.log(describeAvailability({ id: 1, title: "Clean Code", author: "Robert C. Martin", available: true }));
