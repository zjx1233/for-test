import assert from "node:assert/strict";
import test from "node:test";

import { normalizeProject, ticketKey } from "../src/ticket.js";

test("normalizeProject trims and uppercases project names", () => {
  assert.equal(normalizeProject(" ops "), "OPS");
});

test("normalizeProject rejects empty project names", () => {
  assert.throws(() => normalizeProject("  "), TypeError);
});

test("ticketKey joins normalized project and number with hyphen", () => {
  assert.equal(ticketKey(" ops ", 42), "OPS-42");
});

test("ticketKey rejects non-integer number", () => {
  assert.throws(() => ticketKey("ops", 3.14), TypeError);
});

test("ticketKey rejects zero", () => {
  assert.throws(() => ticketKey("ops", 0), TypeError);
});

test("ticketKey rejects negative number", () => {
  assert.throws(() => ticketKey("ops", -1), TypeError);
});

test("ticketKey rejects non-number type", () => {
  assert.throws(() => ticketKey("ops", "42"), TypeError);
});
