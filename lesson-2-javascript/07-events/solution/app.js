const list = document.querySelector("#book-list");
const output = document.querySelector("#output");

list.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-book-id]");
  if (!button) return;
  const rawBookId = button.dataset.bookId;
  const bookId = Number(rawBookId);
  console.log(typeof rawBookId, typeof bookId);
  output.textContent = `Klik op boek ${bookId}`;
});
