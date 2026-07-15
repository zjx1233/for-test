import assert from "node:assert/strict";
import test from "node:test";

import { normalizeProject, ticketKey } from "../src/ticket.js";

test("normalizeProject trims and uppercases project names", () => {
  assert.equal(normalizeProject(" ops "), "OPS");
});

test("normalizeProject rejects empty project names", () => {
  assert.throws(() => normalizeProject("  "), TypeError);
});

test("ticketKey returns normalized project and zero-padded number joined by hyphen", () => {
  assert.equal(ticketKey(" ops ", 7), "OPS-0007");
  assert.equal(ticketKey("dev", 1), "DEV-0001");
  assert.equal(ticketKey("  QA  ", 42), "QA-0042");
});

test("ticketKey throws TypeError when number is not an integer", () => {
  assert.throws(() => ticketKey("ops", 3.14), TypeError);
  assert.throws(() => ticketKey("ops", NaN), TypeError);
});

test("ticketKey throws TypeError when number is zero or negative", () => {
  assert.throws(() => ticketKey("ops", 0), TypeError);
  assert.throws(() => ticketKey("ops", -1), TypeError);
});

test("ticketKey throws TypeError when number is not a numeric type", () => {
  assert.throws(() => ticketKey("ops", "7"), TypeError);
  assert.throws(() => ticketKey("ops", null), TypeError);
  assert.throws(() => ticketKey("ops", undefined), TypeError);
});
