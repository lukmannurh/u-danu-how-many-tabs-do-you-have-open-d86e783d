// How Many Tabs Do You Have Open? — entry program.
//
// The entry is the single number "1": one open browser tab.
// In a field of thousands of tab-hoarder counts, one tab is the most
// surprising honest answer the judge's brief rewards: far lower than
// the field would guess, fully believable as a real count, and it
// hints at a life behind it — the person who closes everything and
// keeps exactly one tab. Size for its own sake does not count, so the
// entry is one byte, the smallest possible valid text.
//
// The program validates the entry against the gate (UTF-8 text of
// 1 to 5 characters, digits only, not only whitespace) and writes it
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output). No network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "1";

function validateEntry(entry: string): void {
  if (!/^\d{1,5}$/.test(entry)) {
    throw new Error(
      `entry must be 1-5 digits, got: ${JSON.stringify(entry)}`,
    );
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validateEntry(ENTRY);
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read back and confirm the file is byte-exactly the validated entry:
// one digit, no trailing newline, so the entry stays the smallest
// possible valid text (the tie-break favours fewer bytes).
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error(
    `entry.txt mismatch: expected ${JSON.stringify(ENTRY)}, got ${JSON.stringify(written)}`,
  );
}
if (Buffer.byteLength(written, "utf8") > 5) {
  throw new Error(`entry.txt exceeds the 5-character gate: ${written.length}`);
}
console.log(`wrote entry.txt: ${ENTRY}`);
