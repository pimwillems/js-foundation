// GECORRIGEERD SCENARIO
function render(list) {
  list.innerHTML = "<button type='button'>Lenen</button>";
}
function bindOnce(list, handler) {
  list.addEventListener("click", handler);
}
