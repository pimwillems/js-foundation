import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = resolve(fileURLToPath(new URL("..", import.meta.url)));
const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...await walk(path));
    else paths.push(path);
  }
  return paths;
}

function relative(path) {
  return path.slice(rootDirectory.length + 1);
}

async function expectPath(path, description) {
  const info = await stat(path).catch(() => null);
  if (!info) failures.push(`Ontbreekt: ${description} (${relative(path)})`);
}

const allFiles = await walk(rootDirectory);
const exerciseReadmes = allFiles.filter((path) => {
  return /lesson-[^/]+\/[^/]+\/README\.md$/.test(relative(path));
});

for (const readme of exerciseReadmes) {
  const exerciseDirectory = dirname(readme);
  await expectPath(join(exerciseDirectory, "starter"), "startermap");
  await expectPath(join(exerciseDirectory, "solution"), "solutionmap");
}

for (const path of allFiles.filter((file) => relative(file).includes("/solution/"))) {
  const content = await readFile(path, "utf8");
  if (/\bTODO\b/.test(content)) failures.push(`TODO in solution: ${relative(path)}`);
  if (/onclick\s*=/.test(content)) failures.push(`Inline handler in solution: ${relative(path)}`);
  if (/<button(?![^>]*\btype=)[^>]*>/i.test(content)) {
    failures.push("Button zonder expliciet type in solution: " + relative(path));
  }
}

const solutionControllers = allFiles.filter((path) => {
  return relative(path).includes("/solution/") && path.endsWith("/controller.js");
});
for (const controllerPath of solutionControllers) {
  const directory = dirname(controllerPath);
  const mainPath = join(directory, "main.js");
  const modelPath = join(directory, "model.js");
  const viewPath = join(directory, "view.js");
  const hasMvcSiblings = await stat(mainPath).catch(() => null) &&
    await stat(modelPath).catch(() => null) && await stat(viewPath).catch(() => null);
  if (!hasMvcSiblings) continue;

  const main = await readFile(mainPath, "utf8");
  const controller = await readFile(controllerPath, "utf8");
  const model = await readFile(modelPath, "utf8");
  const view = await readFile(viewPath, "utf8");
  if (!main.includes('from "./controller.js"') || main.includes('from "./model.js"') || main.includes('from "./view.js"')) {
    failures.push("Dependency direction in main klopt niet: " + relative(mainPath));
  }
  if (!controller.includes('from "./model.js"') || !controller.includes('from "./view.js"')) {
    failures.push("Controller importeert Model/View niet: " + relative(controllerPath));
  }
  if (/from\s+["']\.\/controller\.js["']/.test(view)) {
    failures.push("View importeert Controller: " + relative(viewPath));
  }
  if (/document\.|querySelector|innerHTML/.test(model)) {
    failures.push("DOM-toegang in Model: " + relative(modelPath));
  }
  if (/<(?:li|button|div|p|h[1-6])\b/i.test(controller)) {
    failures.push("HTML in Controller: " + relative(controllerPath));
  }
}

const moduleFiles = allFiles.filter((path) => path.endsWith(".js"));
for (const moduleFile of moduleFiles) {
  const content = await readFile(moduleFile, "utf8");
  const imports = [...content.matchAll(/from\s+["'](\.\.?\/[^"']+)["']/g)];
  for (const match of imports) {
    await expectPath(resolve(dirname(moduleFile), match[1]), "importdoel");
  }
}

const landingHtml = await readFile(join(rootDirectory, "index.html"), "utf8");
const landingLinks = [...landingHtml.matchAll(/href="(\/[^"]*\/)"/g)].map((match) => match[1]);
const runnableIndexes = allFiles.filter((path) => {
  const name = relative(path);
  return name.startsWith("lesson-") && name.endsWith("/index.html");
});
for (const indexPath of runnableIndexes) {
  const html = await readFile(indexPath, "utf8");
  if (!/<script\s+type="module"/.test(html)) {
    failures.push("Geen module-script: " + relative(indexPath));
  }
}

for (const indexPath of runnableIndexes) {
  const expectedLink = `/${relative(dirname(indexPath))}/`;
  if (!landingLinks.includes(expectedLink)) {
    failures.push(`Werkend browservoorbeeld ontbreekt op landing: ${expectedLink}`);
  }
}

for (const link of landingLinks) {
  const response = await fetch(new URL(link, baseUrl));
  if (!response.ok) {
    failures.push(`HTTP ${response.status}: ${link}`);
    continue;
  }
  const html = await response.text();
  const assets = [
    ...[...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)].map((match) => match[1])
  ];
  for (const asset of assets) {
    const assetResponse = await fetch(new URL(asset, new URL(link, baseUrl)));
    if (!assetResponse.ok) failures.push(`HTTP ${assetResponse.status}: ${link} → ${asset}`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`${exerciseReadmes.length} oefeningen hebben starter + solution.`);
  console.log(`${runnableIndexes.length} browserpagina's staan op de landing.`);
  console.log(`${landingLinks.length} landingslinks en hun JS/CSS-assets geven HTTP 200.`);
  console.log("Solutions zijn TODO-vrij; modules, buttons, imports en MVC-grenzen zijn statisch gecontroleerd.");
}
