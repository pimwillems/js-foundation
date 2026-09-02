# Beargumenteerde indeling

| Gedrag of fragment | Indeling | Redenering |
|---|---|---|
| Beschikbaarheid controleren | Model | Dit is een domeinregel, onafhankelijk van de DOM. |
| CSS-class voor status kiezen | View | Een kleine presentatiebeslissing mag in de View. |
| Foutmelding in `#message` plaatsen | View | Dit is een DOM-side effect; de tekst kan door de Controller worden aangeleverd. |
| Datasetwaarde omzetten naar getal | Controller | In deze cursus normaliseert de Controller invoer aan de grens. De View zou ook een getal kunnen rapporteren als dat contract expliciet is; dus bespreekbaar. |
| Boek zoeken | Model | Als dit state voor een domeinoperatie doorzoekt. Zonder context kan een zoekactie voor weergave ook anders worden ontworpen. |
| Klik ontvangen en Model starten | Controller | De View rapporteert de klik; de Controller coördineert de actie. |
| State muteren én HTML maken | Gemengd | Model-state en View-side effect zitten in één fragment. Splits mutatie en render. |
| Onbekend boek weigeren | Model | Het Model bewaakt geldige operaties. |
