import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));

/**
 * Next 16 writes RSC payloads for a route into `__next.<segment>/__PAGE__.txt`,
 * but the client prefetches `__next.<segment>.__PAGE__.txt` next to the HTML.
 * A normal Next server handles that mapping; a static host like GitHub Pages
 * does not. Copy the payload to the dotted name it asks for.
 */
function normalizeRscPayloads(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const full = join(directory, entry.name);
    if (entry.name.startsWith("__next.") && !entry.name.endsWith(".txt")) {
      for (const file of readdirSync(full)) {
        const source = join(full, file);
        if (!statSync(source).isFile()) continue;
        copyFileSync(source, join(directory, `${entry.name}.${file}`));
      }
    }

    normalizeRscPayloads(full);
  }
}

if (!existsSync(root)) {
  console.error(`No static export at ${root}. Run "next build" first.`);
  process.exit(1);
}

normalizeRscPayloads(root);
