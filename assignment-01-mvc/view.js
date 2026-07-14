// view.js — owns all DOM manipulation. No data, no fetch, no decisions.

import { handleBorrow } from './controller.js';

const bookListElement = document.querySelector('#book-list');
const errorElement = document.querySelector('#error');

export function renderBookList(books) {
  bookListElement.innerHTML = books.map(createBookCardHTML).join('');
  bindBorrowButtons();
}

function createBookCardHTML(book) {
  return `
    <article class="book-card">
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p class="status ${book.available ? 'available' : 'borrowed'}">${book.available ? 'Available' : 'Borrowed'}</p>
      <button class="borrow-button" data-id="${book.id}">Borrow</button>
    </article>
  `;
}

function bindBorrowButtons() {
  const borrowButtons = bookListElement.querySelectorAll('.borrow-button');
  for (const button of borrowButtons) {
    button.addEventListener('click', () => handleBorrow(Number(button.dataset.id)));
  }
}

export function showError(message) {
  errorElement.textContent = message;
}

export function clearError() {
  errorElement.textContent = '';
}
