// controller.js — makes all decisions. No DOM, no direct data access.

import {
  getBooks,
  getBookById,
  markAsBorrowed,
  markAsReturned,
  searchBooks,
} from './model.js';
import {
  renderBookList,
  showError,
  clearError,
  getSearchQuery,
} from './view.js';

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

export function handleReturn(bookId) {
  const book = getBookById(bookId);

  if (book === undefined) {
    showError('Book not found');
    return;
  }

  if (book.available === true) {
    showError('This book is not borrowed');
    return;
  }

  markAsReturned(bookId);
  clearError();
  renderBookList(getBooks());
}

export function handleSearch() {
  const query = getSearchQuery();
  const results = searchBooks(query);

  if (results.length === 0) {
    showError('No books found');
    renderBookList(results);
    return;
  }

  clearError();
  renderBookList(results);
}

// On page load
renderBookList(getBooks());
