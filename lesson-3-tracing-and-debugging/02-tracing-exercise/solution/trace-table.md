# Ingevulde traceertabel

| Stap | Locatie/functie | Invoer + type | State vóór | Return/uitvoer | State na | Side effect |
|---|---|---|---|---|---|---|
| 1 | Browser click | click event, object | boek 1 beschikbaar | event | gelijk | browser dispatcht event |
| 2 | `bindBookAction` callback | action `"borrow"`, ID `"1"`, strings | gelijk | handler-aanroep | gelijk | geen DOM-write |
| 3 | `handleBookAction` | `"borrow"`, `"1"` | gelijk | maakt number `1` | gelijk | geen |
| 4 | `borrowBook` | `1`, number | `available: true` | `{ ok: true, ... }` | `available: false` | state-mutatie |
| 5 | Controller vervolg | result object | gewijzigd | twee View-calls | gelijk | coördinatie |
| 6 | `renderBooks`, `showMessage` | actuele boeken, tekst | gewijzigd | geen nuttige return | gelijk | DOM wordt vervangen en melding getoond |

De Controller roept render opnieuw aan. De listener hangt aan de blijvende `ul`, niet aan vervangen knoppen, en `bindBookAction` draaide alleen in `start`.
