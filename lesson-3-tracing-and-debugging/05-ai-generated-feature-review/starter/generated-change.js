// AI-gegenereerde wijziging — bewust reviewmateriaal
export function addReturnButtons(view, books) {
  view.list.innerHTML += books.map((book) =>
    `<button type="button" onclick="books.find(b => b.id === ${book.id}).available = true">Return</button>`
  ).join("");
}
