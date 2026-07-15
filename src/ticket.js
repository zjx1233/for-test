export function normalizeProject(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError("project must be a non-empty string");
  }
  return value.trim().toUpperCase();
}

export function ticketKey(project, number) {
  const normalizedProject = normalizeProject(project);
  if (typeof number !== "number" || !Number.isInteger(number) || number < 1) {
    throw new TypeError("number must be a positive integer");
  }
  return `${normalizedProject}-${String(number).padStart(4, "0")}`;
}
