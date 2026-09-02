# Oorzaken

1. Selector en bestaande ID verschillen.
2. Dataset-ID is string, model-ID number.
3. De functie retourneert impliciet `undefined`.
4. Model-state muteert zonder View-render.
5. Listener wordt bij iedere render opnieuw gekoppeld.
6. De View voert een domeinregel en mutatie uit.
7. `find` geeft `undefined`; property access crasht.
8. Zoeken filtert telkens de vorige zichtbare subset in plaats van de broncollectie.
