// Alien Field Notes: The Two Day Earth Review — make.fun one-liner entry.
// An alien's two-star review of Earth, written to /output/entry.txt.
// Fixed text, no input and no randomness, so the output is identical each run.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW = "Earth: beautiful sunsets, excellent snacks, but the locals " +
  "stare at glowing rectangles all day and call it 'being social.' " +
  "Two stars.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");

console.log(`Wrote ${REVIEW.length} characters to /output/entry.txt`);
