import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../out/", import.meta.url)));
const port = Number(process.env.PORT || 3008);
const rawBasePath = (
  process.env.NEXT_PUBLIC_BASE_PATH ??
  process.env.PAGES_BASE_PATH ??
  ""
).replace(/\/+$/, "");
const basePath =
  !rawBasePath || rawBasePath === "/"
    ? ""
    : rawBasePath.startsWith("/")
      ? rawBasePath
      : `/${rawBasePath}`;

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

function sendFile(res, file, status = 200) {
  const ext = extname(file).toLowerCase();
  const cache =
    file.includes(`${join("_next", "static")}`) || file.includes("/_next/static/")
      ? "public, max-age=31536000, immutable"
      : "no-cache";
  res.writeHead(status, {
    "content-type": types[ext] || "application/octet-stream",
    "cache-control": cache,
  });
  createReadStream(file).pipe(res);
}

if (!existsSync(root)) {
  console.error(`No static export at ${root}. Run "npm run build" first.`);
  process.exit(1);
}

const server = createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(req.url || "/", `http://${req.headers.host || "localhost"}`)
        .pathname,
    );
  } catch {
    res.writeHead(400).end("Bad request");
    return;
  }

  if (basePath) {
    if (pathname === basePath) {
      res.writeHead(301, { location: `${basePath}/` }).end();
      return;
    }
    if (!pathname.startsWith(`${basePath}/`)) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end(`Not found. This build expects ${basePath}/.`);
      return;
    }
    pathname = pathname.slice(basePath.length) || "/";
  }

  const requested = pathname.endsWith("/")
    ? join(pathname, "index.html")
    : pathname;
  let file = resolve(join(root, requested));

  if (!file.startsWith(root)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  if (existsSync(file) && statSync(file).isDirectory()) {
    file = join(file, "index.html");
  }

  if (!existsSync(file) || !statSync(file).isFile()) {
    const htmlFile = `${file}.html`;
    if (existsSync(htmlFile) && statSync(htmlFile).isFile()) {
      file = htmlFile;
    } else {
      const notFound = join(root, "404.html");
      if (existsSync(notFound)) {
        sendFile(res, notFound, 404);
      } else {
        res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
        res.end("Not found");
      }
      return;
    }
  }

  sendFile(res, file);
});

server.listen(port, () => {
  const path = basePath ? `${basePath}/` : "/";
  console.log(`Static export: http://localhost:${port}${path}`);
});
