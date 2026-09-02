# Wat de referentie zichtbaar maakt

De complete solution is bedoeld om na je diagnostische poging te lezen. Let vooral op:

- `find` kan geen boek vinden, dus het Model controleert dat vóór property access;
- het Model retourneert voor ieder pad een result object;
- de datasetwaarde wordt in de Controller expliciet een number;
- alleen succes veroorzaakt een nieuwe render;
- de View koppelt één listener aan de blijvende lijst.

Gebruik deze punten om je leerlog aan te vullen, niet om je eerste poging achteraf “goed” te maken.
