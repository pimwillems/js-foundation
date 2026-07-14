// model.js — owns all data. No DOM, no decisions about what to show.

// Books come from the API, so borrowed state lives in a local Set of ids.
const borrowedIds = new Set();

// Cache of the last search results, so getBookById can look books up.
let lastResults = [];

export async function searchBooks(query) {
  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`;
    const response = await fetch(url);

    if (response.ok === false) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    lastResults = data.docs;
    return lastResults;
  } catch (error) {
    lastResults = [];
    return [];
  }
}

export function getBookById(id) {
  return lastResults.find((book) => book.key === id);
}

export function markAsBorrowed(id) {
  borrowedIds.add(id);
}

export function markAsReturned(id) {
  borrowedIds.delete(id);
}

export function isBorrowed(id) {
  return borrowedIds.has(id);
}
