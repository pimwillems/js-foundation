const output = document.querySelector("#output");
async function loadBooks() {
  const response = await fetch("/shared/books.json");
  if (!response.ok) throw new Error(`Boeken laden mislukt (${response.status}).`);
  const books = await response.json();
  output.textContent = books.map((book) => book.title).join("\n");
  return books;
}
loadBooks().catch((error) => {
  output.textContent = error.message;
});
