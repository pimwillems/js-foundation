# 07 — Events en dataset

Een event object beschrijft wat er gebeurde. `dataset.bookId` is altijd een string, ook als HTML `data-book-id="1"` bevat.

1. Voorspel `typeof rawBookId`.
2. Traceer click → event → button → dataset → `Number`.
3. Leg uit waarom `===` zonder conversie niet matcht.
4. Maak de TODO af met één gedelegeerde listener.
5. Verifieer in de console en klik ook buiten de knop.

De listener staat buiten render en wordt één keer gekoppeld.
