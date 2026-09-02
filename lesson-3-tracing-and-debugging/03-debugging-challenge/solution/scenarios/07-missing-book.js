// GECORRIGEERD SCENARIO
function borrowBook(books, id) {
  const book = books.find((item) => item.id === id);
  if (!book) return { ok: false, message: "Boek niet gevonden." };
  book.available = false;
  return { ok: true, message: "Boek geleend." };
}
