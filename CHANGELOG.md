# CHANGELOG

## [v0.1.0] - 2026-06-02

<span class="pill pill-version">Version v0.1.0</span>
<span class="pill pill-status">Stable</span>
<span class="pill pill-type">Changed</span>
<span class="pill pill-fix">Fix</span>
<span class="pill pill-accessibility">Accessibility</span>
<span class="pill pill-compliance">Compliance</span>
<span class="pill pill-seo">SEO</span>
<span class="pill pill-public">Public-facing</span>

### Summary

Stabilised the APES Contact Centre route finder, widened the shared site shell to 90% on desktop and tablet layouts, added public fallback contact links, and introduced formal version and release records for the website.

### Detailed changes

- Updated the shared layout to use a 90% viewport shell on wider screens while preserving readable mobile spacing.
- Aligned shared buttons, focus states and section accents with APES teal-led website styling.
- Improved the homepage guided route finder with clearer step-by-step help, disabled action states, route summaries and live filter feedback.
- Added crawlable direct contact links so essential APES routes remain usable if JavaScript is unavailable.
- Added privacy and release-record links, current version display, and APES CIC company details in the footer.
- Added canonical and Open Graph metadata for the homepage and created the public Change Log Hub page.

### Affected areas

- Website: APES Contact Centre
- Page or route: Homepage route finder, division contact pages, footer, and Change Log Hub
- Files changed: Static HTML pages, shared CSS, route-finder JavaScript, and changelog assets
- User groups affected: Public visitors, supporters, service users, staff needing sign-in, and governance or complaint contacts
- Public impact: Better routing clarity, improved accessibility, clearer fallback links and stronger release transparency
- Internal impact: No internal-only workflow changes were introduced. Staff sign-in remains on the existing external route

### Version decision

- Previous version: No formal tracked version
- New version: v0.1.0
- Version type: Patch, stable
- Reason for version bump: Public-facing fixes, accessibility improvements, SEO metadata updates and first formal release records

### Validation

- Checks run: Static HTML, CSS and JavaScript review plus manual browser verification of layout and route interactions
- Manual checks completed: Guided route selection, filter reset behaviour, footer link review, changelog filters, and responsive layout spot checks
- Known limitations: External helpdesk destinations and staff sign-in redirects can only be validated as far as the public links allow from this static site
- Rollback notes: Revert to the previous site export if route links, interactive filters, or footer compliance details are found to be incorrect after deployment
