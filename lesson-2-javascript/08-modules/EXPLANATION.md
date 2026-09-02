# Belangrijk verschil

De solution importeert alleen `start` in `main.js` en roept die met de begindata aan. De Controller importeert Model- en View-functies; de View importeert de Controller niet. Daardoor blijft de dependency direction uitlegbaar en ontstaan geen circulaire imports.
