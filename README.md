# JavaScript Foundations

Deze repository helpt beginnende Front End Development-studenten JavaScript **lezen, traceren, debuggen en beoordelen**. Je bouwt steeds aan dezelfde bibliotheekapp. De ongebruikelijke volgorde is bewust: in les 1 onderzoek je MVC voordat je alle syntax kent. De vragen die dat oproept, worden in les 2 beantwoord.

## Benodigd

- Node.js 20 of nieuwer
- Een moderne browser met Developer Tools
- Een code-editor

Er zijn geen npm-packages of globale installaties nodig.

## Starten

```bash
npm run serve
```

Open daarna <http://localhost:3000>. Kies op de landingspagina een voorbeeld. Open module-gebaseerde HTML-bestanden niet rechtstreeks via `file://`: browsers blokkeren dan vaak imports of `fetch`.

## Werken met oefeningen

Elke oefening heeft een `README.md` en twee mappen:

- `starter/`: je startpunt, met structuur en gerichte `TODO`-markeringen;
- `solution/`: een complete uitwerking die je na de oefening kunt bestuderen.

Lees eerst de voorspel- en traceervragen. Pas daarna code aan. Een oplossing is geen modelantwoord om blind over te nemen: vergelijk de uitvoering met je eigen uitleg.

## MVC-richting in de complete apps

```text
main.js
   ↓
controller.js
   ├── model.js
   └── view.js
```

`main.js` levert begindata en start de Controller. Het Model bezit state en domeinregels, de View bezit DOM en presentatie, en de Controller coördineert acties en nieuwe renders. De View importeert de Controller nooit.

## Cursusoverzicht

1. **MVC vóór syntax** — verantwoordelijkheden herkennen en een klik volgen.
2. **JavaScript in MVC lezen** — taalconcepten gebruiken om de vragen uit les 1 te beantwoorden.
3. **Traceren en debuggen** — één compleet mentaal model opbouwen.
4. **Async en API's (optioneel)** — dezelfde architectuur behouden terwijl data asynchroon wordt geladen.

Docenten vinden de didactische keuzes in [TEACHER_GUIDE.md](./TEACHER_GUIDE.md). Gebruik [REVIEW_CHECKLIST.md](./REVIEW_CHECKLIST.md) bij elke code-review.
