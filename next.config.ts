import type { NextConfig } from "next";

// X-Frame-Options ALLOWALL lets the platform embed the live preview in an iframe.
// Keep this — removing it breaks the preview pane.
const nextConfig: NextConfig = {
  // Don't advertise the framework/version in every response.
  poweredByHeader: false,
  // Google fetches /google<token>.html to verify this app's Search Console
  // property. The path is whatever Google issued, so it is read from the
  // environment rather than hardcoded, and no rewrite exists until one is.
  async rewrites() {
    const token = process.env.GSC_SITE_VERIFICATION_TOKEN;
    if (!token) return [];
    return [{ source: `/${token}`, destination: "/api/site-verification" }];
  },

  // The preview is served from a tunnel hostname, not localhost — and Next 16
  // BLOCKS cross-origin requests to dev-only assets and endpoints by default.
  // The casualty is the HMR websocket: the upgrade is refused, the dev client
  // waits on a socket that never opens, and hydration therefore never runs. The
  // page renders perfectly from the server and then NOTHING is clickable, with
  // no console error and no failed request to explain it — because nothing
  // crashed, the client runtime simply never started. `afterInteractive` scripts
  // die the same way.
  //
  // Next 15 only warned about this, which is why it surfaced the moment the
  // template moved to 16. Both entries are needed: the wildcard matches a single
  // label, so `*.modal.host` alone does not cover the `.w.` in a preview host.
  allowedDevOrigins: ["*.modal.host", "*.w.modal.host"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          // Stop browsers guessing content types (e.g. running an upload as script).
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Don't leak full URLs (with query strings) to other sites.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // The site never needs these browser features.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          // Always use HTTPS once a browser has seen the site over HTTPS.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          // A narrow CSP that cannot break the page: no plugins, no <base> hijack,
          // and forms may only post back to this site. (No frame-ancestors, because
          // the platform preview has to frame the site.)
          {
            key: "Content-Security-Policy",
            value: "base-uri 'self'; object-src 'none'; form-action 'self'",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
