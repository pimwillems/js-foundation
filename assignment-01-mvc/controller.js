// controller.js — makes all decisions. No DOM, no direct data access.

import { getBooks, getBookById, markAsBorrowed } from './model.js';
import { renderBookList, showError, clearError } from './view.js';

export function handleBorrow(bookId) {
  const book = getBookById(bookId);

  if (book === undefined) {
    showError('Book not found');
    return;
  }

  if (book.available === false) {
    showError('Already borrowed');
    return;
  }

  markAsBorrowed(bookId);
  clearError();
  renderBookList(getBooks());
}

// On page load
renderBookList(getBooks());
