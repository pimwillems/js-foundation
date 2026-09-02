// Werkt, maar verantwoordelijkheden zijn door elkaar geraakt.
const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", available: true },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: false }
];
const list = document.querySelector("#book-list");
const message = document.querySelector("#message");

function showEverything() {
  list.innerHTML = books.map((book) => `<li class="book">
    <div><h2>${book.title}</h2><p>${book.author}</p><p>${book.available ? "Beschikbaar" : "Uitgeleend"}</p></div>
    <button type="button" class="borrow" data-id="${book.id}">Lenen</button>
  </li>`).join("");

  document.querySelectorAll(".borrow").forEach((button) => {
    button.addEventListener("click", () => {
      const book = books.find((item) => item.id === Number(button.dataset.id));
      if (!book || !book.available) {
        message.textContent = "Lenen is niet mogelijk.";
        message.className = "message error";
      } else {
        book.available = false;
        message.textContent = `${book.title} is geleend.`;
        showEverything();
      }
    });
  });
}
showEverything();
