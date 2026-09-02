// BEWUST DEFECT SCENARIO
function borrow(model, view, id) {
  model.borrowBook(id);
  // State verandert, zichtbare DOM niet.
}
