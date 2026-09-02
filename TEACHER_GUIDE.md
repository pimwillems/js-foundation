# Docentenhandleiding

## Didactische lijn

De volgorde MVC → syntax → geïntegreerd traceren is bewust. De codeerpoging aan het einde van les 1 is **diagnostisch**: studenten horen JavaScript tegen te komen dat ze nog niet volledig kunnen uitleggen. Beoordeel daar dus niet op complete of foutloze code, maar op gerichte observaties, traceerwerk en goede vragen. Les 2 moet herkenbaar antwoord geven op die vragen.

Laat studenten steeds hardop werken in deze volgorde: **voorspellen, traceren, uitleggen, veranderen, verifiëren**. Een werkende app zonder uitleg is hier onvoldoende bewijs; een correcte voorspelling met controleerbaar spoor is waardevoller.

## Les 1 — MVC vóór syntax

### 01 — Working app

- **Doel:** nieuwsgierigheid en een eerste mentaal model van state → actie → scherm.
- **Intro:** laat de app eerst gebruiken zonder broncode; vraag waar de “waarheid” over beschikbaarheid kan staan.
- **Vragen:** waar begint uitvoering, welke zichtbare verandering bewijst een state change, wie hoort weigeren?
- **Misconcepties:** “de HTML onthoudt beschikbaarheid”; “disabled is de domeinregel”.
- **Debrief:** teken samen click → View → Controller → Model → Controller → View.
- **Duur:** 20 minuten.
- **Solution:** observaties na klassikale vergelijking tonen.

### 02 — Tangled code

- **Doel:** kosten van gemengde verantwoordelijkheden herkennen zonder de code karikaturaal slecht te maken.
- **Intro:** noem dit plausibele haastige/AI-code die functioneel begint.
- **Vragen:** hoeveel redenen tot wijzigen heeft `showEverything`; wat gebeurt bij een Return-feature?
- **Misconcepties:** “werkend betekent goed”; “meer bestanden is automatisch MVC”.
- **Debrief:** vergelijk verantwoordelijkheden, dependency direction en testbaarheid.
- **Duur:** 30 minuten.
- **Solution:** pas tonen nadat groepen een eigen splitsingsplan hebben.

### 03 — Classify responsibilities

- **Doel:** laaggrenzen beargumenteren en grijze gebieden herkennen.
- **Intro:** benadruk dat context bij sommige snippets deel van het antwoord is.
- **Vragen:** is een CSS-class domein of presentatie; waar normaliseer je grensinput?
- **Misconcepties:** “alle logica hoort in Controller”; “View mag geen enkele beslissing nemen”.
- **Debrief:** bespreek vooral conversie en zoeken als contractkeuzes.
- **Duur:** 25 minuten.
- **Solution:** direct na groepsdiscussie; accepteer afwijking met goed contract.

### 04 — Trace a click

- **Doel:** normale en geweigerde route in dezelfde architectuur reconstrueren.
- **Intro:** geef alleen pseudocode en laat eerst de zichtbare uitkomst voorspellen.
- **Vragen:** waar verandert type; waar verandert state; waarom kan het foutpad zonder render?
- **Misconcepties:** “iedere stap verandert state”; “een fout hoort in de View besloten te worden”.
- **Debrief:** zet beide routes naast elkaar en markeer het eerste verschil.
- **Duur:** 25 minuten.
- **Solution:** na invullen van beide routes.

### 05 — First attempt

- **Doel:** persoonlijke syntaxgaten zichtbaar maken en vragen voor les 2 verzamelen.
- **Intro:** zeg expliciet dat afmaken niet het hoofddoel of de beoordeling is.
- **Vragen:** welke regel kun je voorspellen maar nog niet verklaren; welke informatie mist?
- **Misconcepties:** “ik kan dit niet, dus ik loop achter”; solution kopiëren als bewijs.
- **Debrief:** cluster leerlogs onder arrays, functies, conditions, DOM/events, modules en render.
- **Duur:** 40 minuten.
- **Solution:** later vrijgeven, bij voorkeur aan het begin van les 2 als leesmateriaal.

## Les 2 — JavaScript in MVC lezen

### 01 — Variables and state

- **Doel:** binding, primitive, object en mutatie onderscheiden.
- **Intro:** koppel iedere waarde aan de Model-state uit les 1.
- **Vragen:** wat kan bij `const book` wel/niet wijzigen; wat geeft `typeof`?
- **Misconcepties:** “een const-waarde kan nooit veranderen”; `var` is nodig voor mutatie.
- **Debrief:** teken binding → object → property.
- **Duur:** 20 minuten.
- **Solution:** na voorspelling en Node-run.

### 02 — Arrays and objects

- **Doel:** collectie, element en property access kunnen aanwijzen.
- **Intro:** gebruik exact de vaste book data shape.
- **Vragen:** welk deel is array; wat retourneert index `1`; wie bezit de collectie?
- **Misconcepties:** array en object als hetzelfde type behandelen; index met ID verwarren.
- **Debrief:** vergelijk positie met domein-ID.
- **Duur:** 20 minuten.
- **Solution:** direct na korte bespreking.

### 03 — Functions

- **Doel:** declaration/arrow, parameter/argument en returnwaarde lezen.
- **Intro:** laat twee syntactische vormen met hetzelfde domeinobject zien.
- **Vragen:** wat is binnen de functie beschikbaar; welke functie heeft alleen een side effect?
- **Misconcepties:** iedere functie heeft input én nuttige output; arrows zijn altijd beter.
- **Debrief:** benoem contract per functie, niet voorkeursstijl.
- **Duur:** 25 minuten.
- **Solution:** na trace.

### 04 — Conditions

- **Doel:** guards en expliciete result objects begrijpen.
- **Intro:** start met onbekend, verkeerd en onbeschikbaar boek.
- **Vragen:** welk early returnpunt wordt bereikt; waarom `===` en `!==`?
- **Misconcepties:** alle conditions diep nesten; truthy verwarren met domeingeldigheid.
- **Debrief:** orden guards van onmogelijk naar succes.
- **Duur:** 25 minuten.
- **Solution:** na drie voorspellingen.

### 05 — Array methods

- **Doel:** `find`, `forEach` en `map` op returngedrag onderscheiden.
- **Intro:** vraag niet “welke is beter”, maar “welk resultaat heb je nodig”.
- **Vragen:** wat retourneert `find` zonder match; waar wordt het map-resultaat gebruikt?
- **Misconcepties:** `forEach` en `map` zijn uitwisselbaar; `find` vindt altijd iets.
- **Debrief:** laat returnwaarden in de console zien.
- **Duur:** 30 minuten.
- **Solution:** na eigen titellijst.

### 06 — DOM rendering

- **Doel:** DOM-selectie, template literals en render-side effect volgen.
- **Intro:** laat eerst verwachte DOM tekenen.
- **Vragen:** wat is input van render; welke presentatiekeuze mag hier blijven?
- **Misconcepties:** innerHTML is state; alle logic in View is verboden.
- **Debrief:** scheid data, HTML-representatie en domeinregel.
- **Duur:** 25 minuten.
- **Solution:** na Elements-inspectie.

### 07 — Events

- **Doel:** event object en dataset string expliciet traceren.
- **Intro:** schrijf `"1" !== 1` zichtbaar op zonder het antwoord verder voor te doen.
- **Vragen:** waarom `closest`; welk type gaat de Controller in?
- **Misconcepties:** dataset levert numbers; listener moet na iedere render opnieuw.
- **Debrief:** tel listeners en wijs de blijvende ancestor aan.
- **Duur:** 30 minuten.
- **Solution:** na consolebewijs.

### 08 — Modules

- **Doel:** entry point, import/export en eenrichtingsafhankelijkheden begrijpen.
- **Intro:** begin bij de script-tag en volg alleen imports.
- **Vragen:** wie maakt instanties; waarom importeert View Controller niet?
- **Misconcepties:** ieder bestand start vanzelf; imports zijn globale variabelen.
- **Debrief:** teken de dependency tree.
- **Duur:** 25 minuten.
- **Solution:** na eigen importfix.

### 09 — Complete Borrow feature

- **Doel:** alle les-2-concepten in één werkende stroom verbinden.
- **Intro:** laat studenten eerst succes, ontbrekend en al uitgeleend voorspellen.
- **Vragen:** waar normaliseer je ID; wanneer rendert View opnieuw; blijft state gelijk bij weigering?
- **Misconcepties:** altijd renderen verbergt fouten; View mag `available` zetten.
- **Debrief:** traceer één volledig result object.
- **Duur:** 45 minuten.
- **Solution:** na test van minimaal drie paden.

### 10 — AI review challenge

- **Doel:** werkende indruk scheiden van type-, runtime- en architectuurproblemen.
- **Intro:** verbied de eerste tien minuten wijzigingen; alleen bewijs verzamelen.
- **Vragen:** wat faalt eerst; welke defecten blijven verborgen; welke fix voorkomt een klasse bugs?
- **Misconcepties:** alles herschrijven is sneller; AI-code is correct als syntax geldig is.
- **Debrief:** groepeer zeven defecten en bespreek minimale fixes.
- **Duur:** 45 minuten.
- **Solution:** later tonen, na ingevuld reviewwerkblad.

## Les 3 — Traceren en debuggen

### 01 — Complete MVC app

- **Doel:** een schone Borrow/Return/Search-referentie kunnen uitleggen.
- **Intro:** laat dependency direction reconstrueren vóór gebruik.
- **Vragen:** waar leeft query; waarom result objects; waar ontstaat empty state?
- **Misconcepties:** filter vervangt brondata; Controller genereert HTML.
- **Debrief:** loop één actie per laag door.
- **Duur:** 30 minuten.
- **Solution:** beschikbaar als referentie; starter is experimenteerkopie.

### 02 — Tracing exercise

- **Doel:** events, types, calls, state en side effects in één spoor vastleggen.
- **Intro:** demonstreer één tabelrij, niet de hele route.
- **Vragen:** wat verandert vóór/na Model; waardoor start render; waarom geen dubbele listener?
- **Misconcepties:** returnwaarde en side effect verwarren; DOM als Model-state noteren.
- **Debrief:** vergelijk succesvolle en geweigerde trace.
- **Duur:** 35 minuten.
- **Solution:** na volledig ingevulde tabel.

### 03 — Debugging challenge

- **Doel:** acht bugs isoleren met kleine bewijzen en minimale fixes.
- **Intro:** wijs ieder duo één scenario toe en laat later uitwisselen.
- **Vragen:** wat is het eerste afwijkende feit; hoe bewijs je de oorzaak; wat test de fix?
- **Misconcepties:** meerdere dingen tegelijk wijzigen; console wissen zonder observatie.
- **Debrief:** orden naar selector, type, control flow, render, listener, laag, undefined en data source.
- **Duur:** 55 minuten.
- **Solution:** scenario voor scenario na peer-uitleg; hints eerder toegestaan.

### 04 — Search feature

- **Doel:** afgeleide weergave bouwen zonder broncollectie te muteren.
- **Intro:** zoek eerst steeds smaller en wis daarna de query.
- **Vragen:** welke state blijft bestaan; waar komt input binnen; waar wordt gefilterd?
- **Misconcepties:** `books = filteredBooks`; filteren in View omdat het “voor weergave” is.
- **Debrief:** controleer herstellen na wissen.
- **Duur:** 40 minuten.
- **Solution:** na empty- en reset-test.

### 05 — AI-generated Return review

- **Doel:** functionele, architecturale en onderhoudsbevindingen onderscheiden.
- **Intro:** presenteer alleen het fictieve verzoek en generated change.
- **Vragen:** wat gebeurt bij onbekend/al beschikbaar boek; welke globals veronderstelt inline code?
- **Misconcepties:** een korte patch is onderhoudbaar; `innerHTML +=` voegt alleen een node toe.
- **Debrief:** koppel iedere categorie aan concreet risico.
- **Duur:** 45 minuten.
- **Solution:** na reviewwerkblad, niet direct.

## Les 4 — Async en API's (optioneel)

### 01 — Promises

- **Doel:** pending/fulfilled en uitvoervolgorde voorspellen.
- **Intro:** laat 1 en 2 verschijnen vóór 3.
- **Vragen:** wat retourneert de async operatie direct; wat pauzeert `await`?
- **Misconcepties:** de hele browser wacht; Promise is de uiteindelijke data zelf.
- **Debrief:** tijdlijn met call stack en later resultaat.
- **Duur:** 25 minuten.
- **Solution:** na voorspelde volgorde.

### 02 — Fetch books

- **Doel:** Response, ok-check en JSON parsing onderscheiden.
- **Intro:** gebruik Network bij het lokale JSON-bestand.
- **Vragen:** welke twee awaits; waarom reject een 404 niet vanzelf als gewenste applicatiefout?
- **Misconcepties:** `fetch` retourneert direct books; JSON parsing is synchroon.
- **Debrief:** noteer types per tussenvariabele.
- **Duur:** 30 minuten.
- **Solution:** na eigen foutpad.

### 03 — Loading and errors

- **Doel:** loading, data, empty en error als expliciete UI-states behandelen.
- **Intro:** laat succes en lokale 404 naast elkaar draaien.
- **Vragen:** hoe eindigt loading bij throw; wat ziet de gebruiker?
- **Misconcepties:** console-error is gebruikersfeedback; finally is alleen voor fouten.
- **Debrief:** teken alle eindtoestanden.
- **Duur:** 35 minuten.
- **Solution:** na beide knoppen getest zijn.

### 04 — API-backed Model

- **Doel:** datasource wisselen met behoud van MVC-contract.
- **Intro:** vergelijk publieke methodes met de synchrone Model-versie.
- **Vragen:** wie kent URL/Response; waarom async Controller.start; hoe voorkom je dubbel starten?
- **Misconcepties:** View moet weten dat data remote is; Model mag DOM loading tonen.
- **Debrief:** markeer wat veranderde en vooral wat gelijk bleef.
- **Duur:** 45 minuten.
- **Solution:** na contractvergelijking.

### 05 — Final AI review

- **Doel:** async lifecycle, architectuur en veilige rendering gezamenlijk reviewen.
- **Intro:** laat eerst risico's noteren zonder uitvoering.
- **Vragen:** wat gebeurt bij non-ok; wanneer eindigt loading; kan API-tekst markup worden?
- **Misconcepties:** catch zonder UI is voldoende; lokale JSON is altijd vertrouwd; dubbel laden is onschuldig.
- **Debrief:** laat iedere fix koppelen aan één geverifieerd risico.
- **Duur:** 50 minuten.
- **Solution:** pas na complete review; gebruik als afsluitende referentie.
