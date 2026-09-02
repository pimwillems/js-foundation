// BEWUST DEFECT: eerst reviewen, niet als voorbeeld overnemen.
class ApiModel {
  async load() {
    document.querySelector("#status").textContent = "Laden...";
    try {
      const response = await fetch("/shared/books.json");
      const books = await response.json();
      document.querySelector("#books").innerHTML =
        books.map((book) => `<li>${book.title}</li>`).join("");
    } catch (error) {
      console.log(error);
    }
  }
}
const model = new ApiModel();
document.querySelector("#load").addEventListener("click", () => model.load());
model.load();
