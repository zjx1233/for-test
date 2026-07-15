import assert from "node:assert/strict";
import test from "node:test";

import { normalizeProject, ticketKey } from "../src/ticket.js";

test("normalizeProject trims and uppercases project names", () => {
  assert.equal(normalizeProject(" ops "), "OPS");
});

test("normalizeProject rejects empty project names", () => {
  assert.throws(() => normalizeProject("  "), TypeError);
});

test("ticketKey returns hyphenated zero-padded result", () => {
  assert.equal(ticketKey("ops", 7), "OPS-0007");
});

test("ticketKey trims and uppercases project via normalizeProject", () => {
  assert.equal(ticketKey(" ops ", 7), "OPS-0007");
});

test("ticketKey throws TypeError for non-integer (float)", () => {
  assert.throws(() => ticketKey("ops", 7.5), TypeError);
});

test("ticketKey throws TypeError for zero", () => {
  assert.throws(() => ticketKey("ops", 0), TypeError);
});

test("ticketKey throws TypeError for negative", () => {
  assert.throws(() => ticketKey("ops", -3), TypeError);
});

test("ticketKey throws TypeError for NaN", () => {
  assert.throws(() => ticketKey("ops", NaN), TypeError);
});

test("ticketKey throws TypeError for non-number (string)", () => {
  assert.throws(() => ticketKey("ops", "7"), TypeError);
});
