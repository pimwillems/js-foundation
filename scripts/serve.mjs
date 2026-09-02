import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number(process.env.PORT ?? 3000);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function safePath(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const requestedPath = resolve(rootDirectory, `.${decodedPath}`);
  if (requestedPath !== rootDirectory && !requestedPath.startsWith(`${rootDirectory}${sep}`)) {
    return null;
  }
  return requestedPath;
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
    let requestedPath = safePath(url.pathname);
    if (!requestedPath) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    const info = await stat(requestedPath).catch(() => null);
    if (info?.isDirectory()) requestedPath = resolve(requestedPath, "index.html");
    const body = await readFile(requestedPath);
    response.writeHead(200, {
      "Content-Type": contentTypes[extname(requestedPath)] ?? "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(body);
  } catch (error) {
    const status = error?.code === "ENOENT" ? 404 : 500;
    response.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(status === 404 ? "Bestand niet gevonden" : "Serverfout");
  }
});

server.listen(port, () => {
  console.log(`JavaScript Foundations: http://localhost:${port}`);
});
