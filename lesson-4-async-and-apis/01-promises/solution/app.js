const steps = document.querySelector("#steps");
const addStep = (text) => {
  const item = document.createElement("li");
  item.textContent = text;
  steps.append(item);
};

function loadBookTitle() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Clean Code"), 500);
  });
}

addStep("1. Verzoek gestart");
const titlePromise = loadBookTitle();
titlePromise.then((title) => addStep(`3. Promise klaar: ${title}`));
addStep("2. Andere code gaat door");

async function inspectReturnValue() {
  const title = await loadBookTitle();
  console.log("await-resultaat:", title);
}
inspectReturnValue();
