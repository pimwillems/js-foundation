// GECORRIGEERD SCENARIO
function borrow(model, view, id) {
  const result = model.borrowBook(id);
  if (result.ok) view.renderBooks(model.getBooks());
  return result;
}
