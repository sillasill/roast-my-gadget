import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My smartwatch applauds me for standing up, as if getting off the couch were an Olympic event and not the bare minimum of being alive.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}
if (!/[A-Za-z0-9]/.test(ROAST) || ROAST.trim().length === 0) {
  throw new Error("roast must contain non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
