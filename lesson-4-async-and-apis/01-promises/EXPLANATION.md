# Belangrijk verschil

De solution retourneert direct een Promise. Stap 2 verschijnt voordat de timer de Promise vervult en stap 3 toevoegt. De extra async functie laat zien dat `await` de uiteindelijke titel oplevert binnen die functie, terwijl andere browsercode kan doorgaan.
