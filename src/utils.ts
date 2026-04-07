// TypeScript SonarQube issue examples (non-accessibility rules)

// ═══════════════════════════════════════════════════
// typescript:S1186 — Functions should not be empty
// An empty function body provides no behavior and is likely unfinished code.
// ════════════════════════════════════════════════════
export function processUserData(data: string): void {
}

export function onError(error: Error): void {
}

// ═══════════════════════════════════════════════════
// typescript:S1854 — Dead stores should be removed
// The first assignment is never read before being overwritten.
// ════════════════════════════════════════════════════
export function calculateDiscount(price: number, rate: number): number {
  let result = price * 0.05; // dead store — overwritten before being read
  result = price * rate;
  return result;
}

export function buildMessage(code: number): string {
  let message = "Unknown error"; // dead store — overwritten before being read
  message = `Error code: ${code}`;
  return message;
}

// ═══════════════════════════════════════════════════
// typescript:S1764 — Identical expressions should not be used on both sides
//                    of a binary operator
// ════════════════════════════════════════════════════
export function isEligible(score: number): boolean {
  return score > 50 && score > 50; // identical conditions on both sides of &&
}

export function hasPermission(role: string): boolean {
  return role === "admin" || role === "admin"; // identical on both sides of ||
}

// ═══════════════════════════════════════════════════
// typescript:S2201 — Return values from functions without side effects
//                    should not be ignored
// ════════════════════════════════════════════════════
export function normalizeInput(input: string): string {
  input.trim();        // return value of trim() discarded
  input.toUpperCase(); // return value of toUpperCase() discarded
  return input;
}

export function deduplicateList(items: number[]): number[] {
  items.filter((v, i, a) => a.indexOf(v) === i); // filter result discarded
  return items;
}

// ═══════════════════════════════════════════════════
// typescript:S4144 — Functions should not have identical implementations
// ════════════════════════════════════════════════════
export function formatFirstName(name: string): string {
  return name.trim().toLowerCase();
}

export function formatLastName(name: string): string {
  return name.trim().toLowerCase(); // identical implementation as formatFirstName
}
