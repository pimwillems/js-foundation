# Uitwerking

## Route A

De View meldt de string `"1"`. De Controller maakt met `Number` het getal `1`. Het Model vindt het boek, zet `available` van `true` naar `false` en retourneert `{ ok: true, message: "Boek geleend." }`. De Controller vraagt de View de actuele boeken te renderen en toont de succesmelding.

## Route B

De Controller maakt van `"2"` het getal `2`. Het Model vindt het boek maar weigert vóór mutatie: `{ ok: false, message: "Dit boek is al uitgeleend." }`. De state blijft gelijk. De Controller toont de foutmelding; opnieuw renderen is niet nodig omdat de state niet wijzigde.

Zonder render na een geslaagde mutatie verandert de state wel, maar blijft oude HTML zichtbaar.
