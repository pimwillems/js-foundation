const steps = document.querySelector("#steps");
const addStep = (text) => steps.insertAdjacentHTML("beforeend", `<li>${text}</li>`);

function loadBookTitle() {
  // TODO: return een Promise die na 500ms "Clean Code" resolve't.
}

addStep("1. Verzoek gestart");
const titlePromise = loadBookTitle();
// TODO: gebruik then om stap 3 met de titel toe te voegen.
addStep("2. Andere code gaat door");
