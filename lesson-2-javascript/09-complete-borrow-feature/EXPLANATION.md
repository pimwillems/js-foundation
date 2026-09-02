# Verschillen

- Het Model zoekt veilig en controleert ontbrekend en onbeschikbaar vóór mutatie.
- De Controller converteert de datasetstring expliciet met `Number`.
- Alleen na succesvolle state-wijziging vraagt de Controller om een nieuwe render.
- De View muteert nooit de boekenarray en de gedelegeerde listener wordt slechts één keer gekoppeld.
