# JS Foundations — Bookshelf App: Assignment Solutions

> ℹ️ **These are *possible* solutions, not the only correct ones.** They show one clean way to solve each assignment. Your own solution may look different — different function names, different HTML structure, a different way of wiring events — and still be completely valid, as long as it follows the MVC rules below and passes the self-checks. Don't treat these files as the answer key to reproduce line by line; compare the *approach*, not the exact code.

Reference solutions for the three JavaScript course assignments at Fontys ICT. Each assignment builds on the previous one. Use these to check your own work **after** completing the assignment yourself.

The app is a bookshelf built in plain HTML, CSS, and JavaScript — no frameworks, no bundlers, no npm.

## The assignments

| Folder | Topic | What it adds |
|---|---|---|
| `assignment-01-mvc/` | MVC with hardcoded data | Book list, borrow flow, strict model/view/controller split |
| `assignment-02-js-logic/` | Extended controller logic | Return flow, live case-insensitive title search |
| `assignment-03-data-apis/` | Real data from an API | Open Library search, loading state, error handling, borrowed-state tracking |

Each folder is a self-contained working app. No files are shared between folders.

## How to run

> ⚠️ **You cannot just double-click `index.html`.** These apps use ES modules (`<script type="module">` with `import`/`export`), and Chrome, Firefox, and Edge block module imports from `file://` URLs. You'll get a blank page and CORS errors in the console. You need to serve the files over HTTP with a local server — any of the options below takes under a minute. (Safari is the one browser that allows `file://` modules, but don't rely on it.)

**Option 1 — VS Code Live Server (recommended):**

1. Install the "Live Server" extension in VS Code.
2. Open this project folder in VS Code.
3. Right-click the `index.html` of the assignment you want → **Open with Live Server**.

**Option 2 — Python (preinstalled on macOS/Linux):**

```sh
cd assignment-01-mvc        # or 02 / 03
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

**Option 3 — Node:**

```sh
npx serve assignment-01-mvc   # or 02 / 03
```

For assignment 03 you also need an internet connection — it fetches live data from the Open Library API. Type a search term (e.g. "dune") to see results.

## How the code is organized

Every assignment follows the same strict MVC rules — this separation is the entire point of the course:

- **`model.js`** owns all data. Only file allowed to `fetch()`. No DOM code, no decisions.
- **`view.js`** owns all DOM manipulation. No data, no fetch, no decisions.
- **`controller.js`** makes all decisions (`if`/`else`). Calls model and view functions. Never touches data or the DOM directly.

One wiring detail worth understanding: buttons and the search input need to trigger controller handlers, but only the view may touch the DOM. So `view.js` imports the handler functions from `controller.js` and attaches them with `addEventListener`. That is a circular import (`controller → view → controller`), which is safe here because ES modules hoist function declarations and `controller.js` is the entry point.

## Checking your own work

Quick self-checks that apply to all three assignments:

- Opening the app (via a local server!) shows no errors in the browser console.
- No `fetch()` in `controller.js` or `view.js`.
- No `innerHTML`, `querySelector`, or `document.` in `model.js` or `controller.js`.
- No `var`, no `==` — only `const`/`let` and `===`.
- Every exported function does exactly one thing.
- Assignment 03: a loading indicator shows while the API call runs, and a failed fetch shows a message instead of crashing.
