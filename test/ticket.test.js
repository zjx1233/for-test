import assert from "node:assert/strict";
import test from "node:test";

import { normalizeProject } from "../src/ticket.js";

test("normalizeProject trims and uppercases project names", () => {
  assert.equal(normalizeProject(" ops "), "OPS");
});

test("normalizeProject rejects empty project names", () => {
  assert.throws(() => normalizeProject("  "), TypeError);
});
