# 04 — API-backed Model

Vervang hard-coded begindata door lokale `fetch` zonder het Controller–View-contract te breken.

1. Voorspel loading → succes en loading → fout.
2. Traceer `main.js → Controller.start → Model.loadBooks → Controller → View`.
3. Leg uit waarom alleen het Model de URL en `fetch` kent.
4. Maak Model en Controller-TODO's af.
5. Verifieer laden, Borrow, herhaald starten en console.

De View bouwt DOM-nodes en gebruikt `textContent` voor ontvangen data.
