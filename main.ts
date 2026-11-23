// gta6-meme-x-01 — program that writes the meme deliverables to /output.
// Node 22, standard library only, no network.
// The meme image (gta6-meme.png) and caption are committed in this repo;
// main.ts copies them to /output together with POST.json.
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const out = "/output";

await mkdir(out, { recursive: true });
await copyFile(join(root, "gta6-meme.png"), join(out, "gta6-meme.png"));
const caption = await readFile(join(root, "caption.txt"), "utf8");
await writeFile(join(out, "caption.txt"), caption);
const post = JSON.parse(await readFile(join(root, "POST.json"), "utf8"));
await writeFile(join(out, "POST.json"), JSON.stringify(post, null, 2) + "\n");

// Verify what was written: the image bytes must match the source,
// the caption must be non-empty, and POST.json must name an X post URL.
const writtenPng = await readFile(join(out, "gta6-meme.png"));
const sourcePng = await readFile(join(root, "gta6-meme.png"));
if (!writtenPng.equals(sourcePng)) throw new Error("gta6-meme.png mismatch after copy");
if (caption.trim().length === 0) throw new Error("caption.txt is empty");
if (typeof post.post !== "string" || !post.post.startsWith("https://x.com/")) throw new Error("POST.json has no X post URL");
console.log(`verified /output: gta6-meme.png ${writtenPng.length} bytes, caption ${caption.trim().length} chars, post ${post.post}`);
console.log("wrote /output/gta6-meme.png, /output/caption.txt, /output/POST.json");
