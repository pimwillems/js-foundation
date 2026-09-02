// BEWUST DEFECT SCENARIO
function render(list, handler) {
  list.innerHTML = "<button type='button'>Lenen</button>";
  list.addEventListener("click", (event) => handler(event));
}
