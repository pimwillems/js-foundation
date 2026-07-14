// controller.js — makes all decisions. No DOM, no fetch.

import {
  searchBooks,
  getBookById,
  markAsBorrowed,
  markAsReturned,
  isBorrowed,
} from './model.js';
import {
  renderBookList,
  showError,
  clearError,
  showLoading,
  hideLoading,
  getSearchQuery,
} from './view.js';

// Cache the last query so borrow/return can re-run the search to re-render.
let lastQuery = '';

export async function handleSearch() {
  const query = getSearchQuery();

  if (query.trim() === '') {
    clearError();
    renderBookList([]);
    return;
  }

  lastQuery = query;
  showLoading();
  const results = await searchBooks(query);
  hideLoading();

  if (results.length === 0) {
    showError('No books found');
    return;
  }

  clearError();
  renderBookList(results);
}

export async function handleBorrow(bookId) {
  const book = getBookById(bookId);

  if (book === undefined) {
    showError('Book not found');
    return;
  }

  if (isBorrowed(bookId) === true) {
    showError('Already borrowed');
    return;
  }

  markAsBorrowed(bookId);
  clearError();
  await refreshBookList();
}

export async function handleReturn(bookId) {
  const book = getBookById(bookId);

  if (book === undefined) {
    showError('Book not found');
    return;
  }

  if (isBorrowed(bookId) === false) {
    showError('This book is not borrowed');
    return;
  }

  markAsReturned(bookId);
  clearError();
  await refreshBookList();
}

async function refreshBookList() {
  const results = await searchBooks(lastQuery);
  renderBookList(results);
}
