# Change Log Hub

Track every major release for this website, including updates, fixes, compliance changes, and user-facing improvements.

## [v0.2.1] - 2026-06-03

<span class="pill pill-version">Version v0.2.1</span>
<span class="pill pill-status">Stable</span>
<span class="pill pill-type">Changed</span>
<span class="pill pill-fix">Fix</span>
<span class="pill pill-compliance">Compliance</span>
<span class="pill pill-public">Public-facing</span>

### Summary

Updated the registered office address across the APES Contact Centre website, footer identity blocks, structured data and release records.

### Detailed changes

- Replaced the previous registered office address in the footer on every public page with 40 Morris Street, St Helens, WA9 3EN.
- Updated the homepage structured organisation metadata so the public JSON-LD address matches the rendered footer and canonical release records.
- Bumped the canonical website version from v0.2.0 to v0.2.1 and aligned the Change Log Hub and repository changelog.

### Affected areas

- Website: APES Contact Centre
- Page or route: All public footers, homepage structured data, Change Log Hub and repository release records
- Files changed: Public HTML pages, `VERSION`, `CHANGELOG.md`
- User groups affected: Public visitors, supporters, service users, donors, staff needing sign-in and governance contacts
- Public impact: Registered office information is now current and consistent across the public site
- Internal impact: No routing, donation or staff access logic changed in this patch.

### Version decision

- Previous version: v0.2.0
- New version: v0.2.1
- Version type: Patch, stable
- Reason for version bump: Public-facing address correction affecting footer identity, structured data and release records

### Validation

- Checks run: Static content review plus version and footer consistency checks across all public pages
- Manual checks completed: Footer address review, structured data address review and changelog/version alignment checks
- Known limitations: External destinations such as Donorbox, helpdesk routes and staff sign-in were not changed by this patch
- Rollback notes: Restore the previous site export if the registered office address was updated in error or if downstream compliance records need to be reverted

## [v0.2.0] - 2026-06-02

<span class="pill pill-version">Version v0.2.0</span>
<span class="pill pill-status">Stable</span>
<span class="pill pill-type">Added</span>
<span class="pill pill-type">Changed</span>
<span class="pill pill-compliance">Compliance</span>
<span class="pill pill-accessibility">Accessibility</span>
<span class="pill pill-public">Public-facing</span>

### Summary

Upgraded the APES Contact Centre footer to the structured APES standard, added standalone donation, privacy, terms and cookie pages, and formalised the canonical version and repository changelog records.

### Detailed changes

- Replaced the minimal footer on every public page with a four-card APES footer that includes Donate, Privacy Policy, Terms of Service, Cookie Policy, Staff access and Change Log Hub links.
- Added a standalone donation page explaining how support helps APES CIC, Shelter and Rescue, Pet Care Clinic, Pet Shop, education, governance and public support operations.
- Added a secure donation button that opens the approved Donorbox route in a popup window, with a direct-link fallback when JavaScript is unavailable or the popup is blocked.
- Created public privacy, terms and cookie pages for the Contact Centre so footer governance links remain local, readable and crawlable.
- Created a canonical root-level `VERSION` file and a synchronised root `CHANGELOG.md` aligned to the website Change Log Hub.

### Affected areas

- Website: APES Contact Centre
- Page or route: All public page footers, Change Log Hub, donate, privacy, terms and cookie routes
- Files changed: HTML page templates, `assets/css/styles.css`, `assets/js/common.js`, `VERSION`, `CHANGELOG.md`
- User groups affected: Public visitors, supporters, service users, donors, staff needing sign-in and governance contacts
- Public impact: Clearer governance routes, stronger footer compliance, local legal pages and a dedicated donation journey
- Internal impact: No internal-only workflow logic changed. Existing external service destinations remain the same.

### Version decision

- Previous version: v0.1.0
- New version: v0.2.0
- Version type: Minor, stable
- Reason for version bump: New public routes, a materially expanded footer, compliance-driven navigation and synchronised release records

### Validation

- Checks run: Static HTML, CSS and JavaScript review plus browser verification of footer layout, changelog filters and donation popup handling
- Manual checks completed: Footer link review, version consistency checks, donation popup fallback, keyboard focus review and responsive spot checks
- Known limitations: External Donorbox, helpdesk and staff sign-in destinations can only be validated to the outbound link stage from this static site
- Rollback notes: Revert to the previous site export and remove the v0.2.0 footer and legal-page additions if route, compliance or donor-path issues are found after deployment

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

Stabilised the APES Contact Centre route finder, widened the site shell to 90% on desktop and tablet layouts, added public fallback routes, and introduced formal version and release records for the website.

### Detailed changes

- Updated the shared layout to use a 90% viewport shell on wider screens while keeping mobile spacing readable.
- Aligned shared buttons, focus states and section accents with APES teal-led website styling.
- Improved the homepage guided route finder with clearer step-by-step help, disabled action states, route summaries and live filter feedback.
- Added crawlable direct contact links so essential APES routes remain usable if JavaScript is unavailable.
- Added privacy and release-record links, current version display, and APES CIC company details in the footer.
- Added canonical and Open Graph metadata for the homepage and created the public Change Log Hub.

### Affected areas

- Website: APES Contact Centre
- Page or route: Homepage route finder, division contact pages, footer, and Change Log Hub
- Files changed: Homepage, division pages, footer and Change Log Hub assets
- User groups affected: Public visitors, supporters, service users, staff needing sign-in, and governance or complaint contacts
- Public impact: Better routing clarity, improved accessibility, clearer fallback links and stronger release transparency
- Internal impact: No internal-only workflow changes were introduced. Staff sign-in remains on the existing external route.

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
