# 01 — Wat vertegenwoordigt een Promise?

Een Promise vertegenwoordigt een resultaat dat nu nog niet beschikbaar hoeft te zijn. `await` pauzeert de huidige async functie, niet de hele browser.

1. Voorspel de volgorde van de console en zichtbare teksten.
2. Traceer Promise: pending → fulfilled.
3. Leg uit wat `loadBookTitle` teruggeeft vóór het resultaat klaar is.
4. Verander de vertraging in starter.
5. Verifieer via de lokale server.

De solution gebruikt zowel `.then` als `await` ter vergelijking; geen van beide is “magisch synchroon”.
