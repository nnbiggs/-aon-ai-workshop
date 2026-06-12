// Shared constants for the custom password gate.
// The password check happens only on the server (API route), so the
// password itself is never shipped to the client.

export const GATE_COOKIE = "pwc_gate";

// The token stored in the cookie once a visitor enters the correct password.
// This is an opaque value compared in middleware — not the password itself.
export const GATE_TOKEN = "pwc-aon-2026-granted";

// The expected password. Can be overridden via env var without a code change.
export const SITE_PASSWORD = process.env.SITE_PASSWORD ?? "PwCAON2026";
