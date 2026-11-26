// The Self-Checkout Is Judging You — entry program.
// Writes exactly one funny line, in the voice of a smug self-checkout machine,
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Twelve yoghurts, no spoon, no shame — please place your dignity in the bagging area.";

// The entry line: one setup, one sting, punchline at the end.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  // Explicit utf8 so the gate reads the file exactly as written.
  writeFileSync("/output/entry.txt", entry, { encoding: "utf8" });
  console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
}

writeEntry();
