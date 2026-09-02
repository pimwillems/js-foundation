# Gedocumenteerde defecten

- **String/number mismatch:** dataset geeft tekst; de Controller gebruikt `Number`.
- **State-mutatie in de View/alles-in-één script:** de solution plaatst de domeinoperatie in het Model.
- **Geen render:** na succes rendert de Controller actuele state.
- **Ontbrekende functie:** meldingen gaan via de bestaande, geïmporteerde View.
- **Dubbele listeners:** event delegation wordt één keer in `start` gekoppeld, niet in render.
- **Ongebruikt `map`-resultaat:** de solution gebruikt de teruggegeven array via `join`.
- **`find` kan `undefined` zijn:** het Model controleert dit vóór property access.
