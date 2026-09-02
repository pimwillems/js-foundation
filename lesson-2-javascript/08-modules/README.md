# 08 — Modules en entry point

`main.js` is het beginpunt en verbindt modules. Imports wijzen naar exports; modules voorkomen impliciete globals.

1. Voorspel welk bestand als eerste uitvoert.
2. Traceer import → export → functie-aanroep.
3. Leg uit waarom de View de Controller niet importeert.
4. Repareer de ontbrekende import in de starter.
5. Verifieer via de server en Network/Console.

De solution houdt de richting `main.js → controller.js → model.js/view.js`.
