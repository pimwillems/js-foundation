// view.js — owns all DOM manipulation. No data, no fetch, no decisions.

import { handleBorrow, handleReturn, handleSearch } from './controller.js';

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
  return `
    <article class="book-card">
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p class="status ${book.available ? 'available' : 'borrowed'}">${book.available ? 'Available' : 'Borrowed'}</p>
      ${createActionButtonHTML(book)}
    </article>
  `;
}

function createActionButtonHTML(book) {
  if (book.available === true) {
    return `<button class="borrow-button" data-id="${book.id}">Borrow</button>`;
  }
  return `<button class="return-button" data-id="${book.id}">Return</button>`;
}

function bindBookButtons() {
  for (const button of bookListElement.querySelectorAll('.borrow-button')) {
    button.addEventListener('click', () => handleBorrow(Number(button.dataset.id)));
  }
  for (const button of bookListElement.querySelectorAll('.return-button')) {
    button.addEventListener('click', () => handleReturn(Number(button.dataset.id)));
  }
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
