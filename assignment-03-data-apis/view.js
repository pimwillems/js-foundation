// view.js — owns all DOM manipulation. No data, no fetch, no decisions.

import { handleBorrow, handleReturn, handleSearch } from './controller.js';
import { isBorrowed } from './model.js';

const bookListElement = document.querySelector('#book-list');
const errorElement = document.querySelector('#error');
const searchInputElement = document.querySelector('#search-input');

// Live search: the view owns the DOM, so the event listener lives here.
searchInputElement.addEventListener('input', handleSearch);

export function renderBookList(books) {
  bookListElement.innerHTML = books.map(createBookCardHTML).join('');
  bindBookButtons();
}

function createBookCardHTML(book) {
  const author = book.author_name ? book.author_name[0] : 'Unknown author';
  const year = book.first_publish_year ? `First published: ${book.first_publish_year}` : 'Publish year unknown';

  return `
    <article class="book-card">
      <h2>${escapeHTML(book.title)}</h2>
      <p>${escapeHTML(author)}</p>
      <p>${escapeHTML(year)}</p>
      ${createActionButtonHTML(book)}
    </article>
  `;
}

function createActionButtonHTML(book) {
  if (isBorrowed(book.key) === true) {
    return `<button class="return-button" data-id="${escapeHTML(book.key)}">Return</button>`;
  }
  return `<button class="borrow-button" data-id="${escapeHTML(book.key)}">Borrow</button>`;
}

function bindBookButtons() {
  for (const button of bookListElement.querySelectorAll('.borrow-button')) {
    button.addEventListener('click', () => handleBorrow(button.dataset.id));
  }
  for (const button of bookListElement.querySelectorAll('.return-button')) {
    button.addEventListener('click', () => handleReturn(button.dataset.id));
  }
}

// API data is untrusted — escape it before putting it inside innerHTML.
function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function showLoading() {
  bookListElement.innerHTML = '<p class="loading">Loading…</p>';
}

export function hideLoading() {
  bookListElement.innerHTML = '';
}

export function showError(message) {
  errorElement.textContent = message;
}

export function clearError() {
  errorElement.textContent = '';
}

export function getSearchQuery() {
  return searchInputElement.value;
}
