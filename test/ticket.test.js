import assert from "node:assert/strict";
import test from "node:test";

import { normalizeProject, ticketKey } from "../src/ticket.js";

test("normalizeProject trims and uppercases project names", () => {
  assert.equal(normalizeProject(" ops "), "OPS");
});

test("normalizeProject rejects empty project names", () => {
  assert.throws(() => normalizeProject("  "), TypeError);
});

test("ticketKey returns normalized project and number joined by hyphen", () => {
  assert.equal(ticketKey(" ops ", 42), "OPS-0042");
});

test("ticketKey rejects zero", () => {
  assert.throws(() => ticketKey("x", 0), TypeError);
});

test("ticketKey rejects negative numbers", () => {
  assert.throws(() => ticketKey("x", -1), TypeError);
});

test("ticketKey rejects floating point numbers", () => {
  assert.throws(() => ticketKey("x", 3.14), TypeError);
});

test("ticketKey rejects NaN", () => {
  assert.throws(() => ticketKey("x", NaN), TypeError);
});

test("ticketKey rejects non-number strings", () => {
  assert.throws(() => ticketKey("x", "1"), TypeError);
});
