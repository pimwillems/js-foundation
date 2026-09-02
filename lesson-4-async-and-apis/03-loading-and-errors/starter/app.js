const status = document.querySelector("#status");
const list = document.querySelector("#book-list");
let loading = false;

async function load(url) {
  // TODO: zet loading true en toon "Laden…".
  // TODO: fetch, check response.ok, parse JSON en render data of empty state.
  // TODO: toon in catch een nuttige fout.
  // TODO: zorg met finally dat loading altijd false wordt.
}
document.querySelectorAll("button").forEach((button) => {
  // TODO: koppel click aan load(button.dataset.url).
});
