# Architecturale opbrengst

Alleen de interne implementatie van het Model en de async start van de Controller veranderen. De View rendert nog steeds een array en kent bron, URL, Response en JSON niet. De `started`-guard voorkomt dubbele requests en listeners.
