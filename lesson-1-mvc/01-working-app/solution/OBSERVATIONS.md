# Mogelijke observaties

- `main.js` levert de begindata, maakt de Controller en start de app.
- De Controller importeert en maakt het Model en de View; die twee importeren elkaar of de Controller niet.
- De View vangt de klik op en geeft een ID door. De datasetwaarde is eerst tekst.
- De Controller zet het ID om naar een getal en roept het Model aan.
- Het Model bepaalt of lenen mag en verandert alleen bij succes de state.
- De Controller laat daarna opnieuw renderen en toont bij mislukking de foutmelding.

De betekenisvolle route is: **click → View → Controller → Model → Controller → View**.
