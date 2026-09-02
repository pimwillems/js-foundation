# 02 — Tangled code

Deze starter werkt, maar data, domeinregels, HTML en events staan door elkaar. Dit lijkt op code die een AI-assistent plausibel voor een beginner kan genereren.

## Voorspel → traceer → leg uit → verander → verifieer

1. **Voorspel:** hoeveel plekken moet je waarschijnlijk aanpassen voor een Return-knop?
2. **Traceer:** volg één klik en markeer reads, writes en DOM-side effects.
3. **Leg uit:** wijs gemengde verantwoordelijkheden aan.
4. **Verander:** noteer een plan voor Model, View en Controller; verander nog niets.
5. **Verifieer:** vergelijk je plan met de solution en test beide versies.

De solution reorganiseert hetzelfde gedrag. Het is geen pleidooi voor extra abstractie: iedere laag heeft één concrete taak.
