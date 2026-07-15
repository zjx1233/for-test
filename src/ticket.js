export function normalizeProject(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError("project must be a non-empty string");
  }
  return value.trim().toUpperCase();
}
