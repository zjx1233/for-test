export function normalizeProject(value) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new TypeError("project must be a non-empty string");
  }
  return value.trim().toUpperCase();
}

export function ticketKey(project, number) {
  const normalizedProject = normalizeProject(project);
  if (!Number.isInteger(number) || number <= 0) {
    throw new TypeError("number must be a positive integer");
  }
  return `${normalizedProject}-${number}`;
}
