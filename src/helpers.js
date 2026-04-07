// JavaScript SonarQube issue examples (non-accessibility rules)

// ═══════════════════════════════════════════════════
// javascript:S1186 — Functions should not be empty
// An empty function body provides no behavior and is likely unfinished code.
// ════════════════════════════════════════════════════
export function validateInput(value) {
}

export function onTimeout(event) {
}

// ═══════════════════════════════════════════════════
// javascript:S1854 — Dead stores should be removed
// The first assignment is never read before being overwritten.
// ════════════════════════════════════════════════════
export function computeTotal(items) {
  let sum = 100; // dead store — overwritten before being read
  sum = items.reduce((acc, item) => acc + item.price, 0);
  return sum;
}

export function resolveStatus(code) {
  let label = "pending"; // dead store — overwritten before being read
  label = code === 0 ? "success" : "failure";
  return label;
}

// ═══════════════════════════════════════════════════
// javascript:S1764 — Identical expressions should not be used on both sides
//                    of a binary operator
// ════════════════════════════════════════════════════
export function isValidScore(score) {
  return score >= 0 && score >= 0; // identical conditions on both sides of &&
}

export function isAdminUser(role) {
  return role === "admin" || role === "admin"; // identical on both sides of ||
}

// ═══════════════════════════════════════════════════
// javascript:S2201 — Return values from functions without side effects
//                    should not be ignored
// ════════════════════════════════════════════════════
export function sanitizeText(text) {
  text.trim();              // return value of trim() discarded
  text.replace(/[<>]/g, ""); // return value of replace() discarded
  return text;
}

export function removeDuplicates(items) {
  items.filter((v, i, a) => a.indexOf(v) === i); // filter result discarded
  return items;
}

// ═══════════════════════════════════════════════════
// javascript:S4144 — Functions should not have identical implementations
// ════════════════════════════════════════════════════
export function getFullName(first, last) {
  return `${first} ${last}`.trim();
}

export function getDisplayName(first, last) {
  return `${first} ${last}`.trim(); // identical implementation as getFullName
}
