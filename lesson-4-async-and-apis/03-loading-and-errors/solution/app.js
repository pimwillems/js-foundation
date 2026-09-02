const status = document.querySelector("#status");
const list = document.querySelector("#book-list");
let loading = false;

async function load(url) {
  if (loading) return;
  loading = true;
  status.textContent = "Laden…";
  status.className = "message";
  list.replaceChildren();
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Laden mislukt (${response.status}).`);
    const books = await response.json();
    status.textContent = books.length === 0 ? "Geen boeken gevonden." : "";
    for (const book of books) {
      const item = document.createElement("li");
      item.textContent = `${book.title} — ${book.author}`;
      list.append(item);
    }
  } catch (error) {
    status.textContent = error.message;
    status.className = "message error";
  } finally {
    loading = false;
  }
}
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => load(button.dataset.url));
});
