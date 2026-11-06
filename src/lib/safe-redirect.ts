/**
 * Turn an untrusted "where to go next" value (e.g. `?after=`) into a same-origin
 * path, or "/" when it is anything else.
 *
 * Without this, `/auth/complete?after=javascript:alert(document.cookie)` runs
 * script on this origin via `location.replace`, and `?after=https://evil.example`
 * (or `//evil.example`) turns the sign-in flow into an open redirect.
 */
export function safeAfterPath(value: string | null | undefined, origin: string): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) {
    return "/";
  }
  try {
    const url = new URL(value, origin);
    if (url.origin !== origin) return "/";
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return "/";
  }
}
