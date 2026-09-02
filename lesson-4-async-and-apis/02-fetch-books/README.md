# 02 — Boeken fetchen en JSON parsen

`fetch` geeft een Response-Promise. Een HTTP-fout maakt die Promise niet automatisch rejected: controleer `response.ok`. `response.json()` is ook asynchroon.

1. Voorspel type/waarde in iedere stap.
2. Traceer fetch → Response → ok-check → JSON → books.
3. Leg uit waarom de ok-check vóór JSON staat.
4. Maak de TODO's af.
5. Verifieer via de server en Network.

De solution gebruikt alleen het lokale `/shared/books.json`.
