# AGENTS.md — Bookshelf App: Assignment Solutions

## Context

This project contains reference solutions for three student assignments in a JavaScript course at Fontys ICT. Each assignment builds on the previous one. Students use these to check their own work after completing the assignment themselves.

The app is a bookshelf app. It is built in plain HTML, CSS, and JavaScript — no frameworks, no bundlers, no npm. Everything must run by opening `index.html` directly in a browser.

---

## Folder structure

Create three folders, each as a self-contained working app:

```
/assignment-01-mvc/
  index.html
  model.js
  view.js
  controller.js
  style.css

/assignment-02-js-logic/
  index.html
  model.js
  view.js
  controller.js
  style.css

/assignment-03-data-apis/
  index.html
  model.js
  view.js
  controller.js
  style.css
```

Each folder must work independently. Do not share files between folders.

---

## Rules that apply to all three assignments

These rules are the entire point of the course. Never break them.

- `model.js` owns all data. No other file touches the data directly.
- `view.js` owns all DOM manipulation. No other file writes to the DOM.
- `controller.js` makes decisions (if/else logic). It calls model functions and view functions. It never touches data or DOM directly.
- No `fetch()` calls in `controller.js` or `view.js` — only in `model.js`.
- No DOM queries or `innerHTML` in `model.js` or `controller.js`.
- Use `const` unless the value needs to change, then use `let`. Never use `var`.
- Use `===` for all comparisons.
- Every function does one thing. If a function does two things, split it.
- All files communicate via `import`/`export`. Use `type="module"` in the script tag.
- Keep the CSS minimal and clean. The UI does not need to be impressive — it needs to be clear.

---

## Assignment 01 — MVC with hardcoded data

**Folder:** `/assignment-01-mvc/`

### What the app does

- Shows a list of books on page load
- Each book has a "Borrow" button
- Clicking "Borrow" marks the book as unavailable and re-renders the list
- If a book is already borrowed, show a message instead

### model.js

- Contains a `let books` array with at least 4 book objects
- Each book has: `id` (number), `title` (string), `author` (string), `available` (boolean)
- Exports: `getBooks()`, `getBookById(id)`, `markAsBorrowed(id)`
- `markAsBorrowed` finds the book by id and sets `available` to `false`
- No DOM code. No fetch. No if/else about whether to borrow — just the data operation.

### view.js

- Exports: `renderBookList(books)`, `showError(message)`, `clearError()`
- `renderBookList` clears the current list and renders a card for each book
- Each card shows: title, author, availability status, and a "Borrow" button
- The "Borrow" button calls `handleBorrow(book.id)` via onclick
- `showError` renders an error message in a dedicated `#error` element
- No data arrays. No fetch. No if/else decisions.

### controller.js

- Imports from `model.js` and `view.js`
- Exports: `handleBorrow(bookId)`
- `handleBorrow` logic:
  - Get book by id from model
  - If book not found: show error, return
  - If book is not available: show error "Already borrowed", return
  - Mark as borrowed (model), clear error, re-render list (view)
- On page load: call `renderBookList(getBooks())`
- All if/else lives here. No DOM. No direct data access.

### index.html

- Minimal layout: a heading, a `#book-list` div, an `#error` div
- One script tag: `<script type="module" src="controller.js"></script>`

---

## Assignment 02 — Extended controller with full logic

**Folder:** `/assignment-02-js-logic/`

This builds on Assignment 01. The model adds a return function. The controller adds return and search features. The view adds a search input.

### model.js

Everything from Assignment 01, plus:
- Exports: `markAsReturned(id)`, `searchBooks(query)`
- `markAsReturned` finds the book by id and sets `available` to `true`
- `searchBooks(query)` filters the books array — case-insensitive match on `title`
- Still no DOM. Still no fetch.

### view.js

Everything from Assignment 01, plus:
- Each book card has both a "Borrow" button and a "Return" button
- "Return" button calls `handleReturn(book.id)` via onclick — only show it when `available` is false
- "Borrow" button only shows when `available` is true
- Exports: `renderBookList(books)`, `showError(message)`, `clearError()`, `getSearchQuery()`
- `getSearchQuery()` returns the current value of the `#search-input` field
- No logic. No data. No fetch.

### controller.js

Everything from Assignment 01, plus:
- Exports: `handleBorrow(bookId)`, `handleReturn(bookId)`, `handleSearch()`
- `handleReturn` logic:
  - Get book by id
  - If not found: show error, return
  - If already available: show error "This book is not borrowed", return
  - Mark as returned (model), clear error, re-render list (view)
- `handleSearch` logic:
  - Get query from view using `getSearchQuery()`
  - Call `searchBooks(query)` from model
  - If results empty: show error "No books found"
  - Otherwise: clear error, render filtered list
- Search input calls `handleSearch()` on every `input` event (live search)
- All if/else here. No DOM. No direct data access.

### index.html

- Adds a `#search-input` text field above the book list
- Search input has `oninput="handleSearch()"` — but since we use modules, wire this up via `addEventListener` in controller.js instead
- One script tag: `<script type="module" src="controller.js"></script>`

---

## Assignment 03 — Real data from the Open Library API

**Folder:** `/assignment-03-data-apis/`

This replaces the hardcoded array with real API data. The controller and view change as little as possible — that's the point.

### model.js

- Remove the hardcoded books array
- Exports: `searchBooks(query)`, `getBookById(id)`, `markAsBorrowed(id)`, `markAsReturned(id)`
- `searchBooks(query)` fetches from the Open Library API:
  ```
  https://openlibrary.org/search.json?q={encodedQuery}&limit=10
  ```
  - Returns `data.docs` array on success
  - Returns `[]` on error
  - Wraps fetch in try/catch
  - Checks `response.ok` and throws if false
  - Is an `async` function
- Because books now come from the API and have no local `available` state, maintain a local `borrowedIds` Set to track which book ids are currently borrowed
- `getBookById(id)` searches the last fetched results (cache the last search result in a module-level variable)
- `markAsBorrowed(id)` adds id to `borrowedIds`
- `markAsReturned(id)` removes id from `borrowedIds`
- Export a helper `isBorrowed(id)` that returns true if the id is in `borrowedIds`
- No DOM. No decisions about what to show.

### view.js

- `renderBookList(books)` now receives Open Library book objects
- Each book from the API has: `key` (use as id), `title`, `author_name` (array), `first_publish_year`
- Show: title, first author (`author_name[0]`), first publish year
- Show borrow/return buttons based on `isBorrowed(book.key)` — import this from model.js
- Exports: `renderBookList(books)`, `showError(message)`, `clearError()`, `showLoading()`, `hideLoading()`, `getSearchQuery()`
- `showLoading()` shows a loading indicator in `#book-list`
- `hideLoading()` clears it
- No fetch. No decisions.

### controller.js

- `handleSearch` is now `async`
- Flow: show loading → call `searchBooks(query)` → hide loading → render or show error
- `handleBorrow` and `handleReturn` still work the same way — call model, re-render
- Re-render after borrow/return by re-running the last search (cache the last query in a module-level variable in controller.js)
- All if/else here. No DOM. No fetch.

### index.html

- Same as Assignment 02
- One script tag: `<script type="module" src="controller.js"></script>`

---

## What to verify before finishing

Run through this checklist for each assignment before considering it done:

- [ ] Opening `index.html` directly in a browser works without errors in the console
- [ ] No `fetch()` exists in `controller.js` or `view.js`
- [ ] No `innerHTML`, `querySelector`, or `document.` exists in `model.js` or `controller.js`
- [ ] No `var` anywhere
- [ ] No `==` comparisons (only `===`)
- [ ] Every exported function has exactly one job
- [ ] Assignment 03 shows a loading state while the API call is in progress
- [ ] Assignment 03 handles a failed fetch gracefully (no uncaught errors, user sees a message)
- [ ] All three apps run independently — no shared files between folders
