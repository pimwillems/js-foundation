# Gedocumenteerde problemen

- Zonder `response.ok` kan een 404 ten onrechte als succespad worden verwerkt.
- Loading wordt bij succes of fout niet bewust vervangen door een eindtoestand.
- De catch logt alleen; de gebruiker krijgt geen foutmelding.
- Zowel automatisch als per klik starten kan requests stapelen.
- Het Model kent selectors en muteert DOM, waardoor het niet los testbaar is.
- API-tekst via `innerHTML` kan als markup worden geïnterpreteerd; de solution gebruikt DOM-nodes en `textContent`.
- De gecorrigeerde Controller heeft een startguard en behoudt het Model–View-contract.
