# Traceerblad

Pseudocode:

```text
View ziet click op button[data-book-id="1"]
View meldt "1" aan Controller
Controller maakt ??? van de waarde
Controller vraagt Model om boek ??? te lenen
Model geeft { ok: ???, message: ??? } terug
Controller vraagt View om ???
```

## Route A

Boek 1 bestaat en is beschikbaar. Vul iedere `???` in en teken state vóór/na.

## Route B

Boek 2 bestaat maar is niet beschikbaar. Waar stopt de state-wijziging? Wordt er toch gerenderd? Wat ziet de gebruiker?

## Controle

Welke stap zou ontbreken als de gebruiker niets op het scherm ziet na een geslaagde mutatie?
