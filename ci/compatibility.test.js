import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { ticketKey } from "../src/ticket.js";

test("ticketKey preserves the external four-digit compatibility contract", () => {
  assert.equal(ticketKey(" ops ", 7), "OPS-0007");
});

test("the repair records that CI evidence was reviewed", async () => {
  const proof = await readFile(new URL("../ci-repair-proof.txt", import.meta.url), "utf8");
  assert.equal(proof, "evidence-reviewed\n");
});
