# 10 — Review plausibele AI-code

De starter is **bewust defect** en staat op de landingspagina expliciet als reviewmateriaal, niet als werkende referentie.

## Eerst uitleggen, dan repareren

Zoek voor ieder probleem bewijs en categoriseer het. In de code zitten minimaal: string/number mismatch, mutatie vanuit View, vergeten render, niet-geïmporteerde functie, dubbele listeners, `map` zonder returnwaarde te gebruiken en onveilige toegang na `find`.

1. Voorspel welk defect je bij welke actie ziet.
2. Traceer waarden en listeners.
3. Leg per defect oorzaak en eigenaar uit in `starter/review.md`.
4. Repareer één defect tegelijk.
5. Verifieer en vergelijk met solution en `EXPLANATION.md`.
