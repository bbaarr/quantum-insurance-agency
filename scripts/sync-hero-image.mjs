/**
 * The hero's building photograph is the original site's own asset (1600×893).
 * The repo carries a 480px copy of the same photo, which goes soft on a wide
 * retina screen, so the build swaps in the full-size original when it can.
 *
 * The download is best-effort: if the source is unreachable, the file that is
 * already in public/ is kept and the build carries on untouched.
 */
import { stat, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCE = "https://quantum-insurance-demo.imaginesites.app/quantum-skyline.webp";
const TARGET = path.join(process.cwd(), "public", "quantum-skyline.webp");
const FULL_SIZE_MIN_BYTES = 50_000;

async function size(file) {
  try {
    return (await stat(file)).size;
  } catch {
    return 0;
  }
}

const current = await size(TARGET);
if (current >= FULL_SIZE_MIN_BYTES) {
  console.log(`[hero image] ${TARGET} is already the full-size original (${current} bytes).`);
} else {
  try {
    const response = await fetch(SOURCE, { signal: AbortSignal.timeout(20_000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length < FULL_SIZE_MIN_BYTES) throw new Error(`unexpected size ${bytes.length}`);
    await writeFile(TARGET, bytes);
    console.log(`[hero image] downloaded the original ${bytes.length}-byte photograph.`);
  } catch (error) {
    console.warn(`[hero image] keeping the existing copy — ${error.message}`);
  }
}
