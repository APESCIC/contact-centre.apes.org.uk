# AGENTS.md

# APES CIC Website Working Instructions

These instructions apply to all APES CIC website repositories, website exports, public web pages, intranet pages, microsites, static websites, documentation sites, portal front ends, and any related website code owned or maintained by the Association of Protecting Exotic Species CIC.

Codex and other AI coding agents must follow these instructions before, during, and after making any website change.

---

## 1. Primary rule

Every website update must be planned, versioned, recorded, validated, checked against APES brand standards, checked against APES Newsroom routing rules where relevant, and reflected in relevant GitHub Issues.

Agents must not complete website work without checking whether the following are required:

1. A website Change Log Hub page update.
2. A root-level `CHANGELOG.md` update.
3. A canonical version update.
4. A GitHub Issue start, progress, or completion update.
5. An APES website brand and feature standards review.
6. An APES Newsroom routing check for any news, update, announcement, newsletter, footer, navigation, or article-related change.

A changelog entry is required when the work changes public website content, intranet website content, page structure, forms, buttons, links, menus, navigation, CTAs, styling, layout, themes, branding, visual assets, accessibility, SEO, analytics, tracking, CRM, automation, embedded tools, third-party integrations, scripts, widgets, site configuration, build configuration, deployment configuration, generated website output, security, privacy, safeguarding, legal, compliance, finance, governance, HR, animal welfare content, or any user-visible bug fix.

If there is any uncertainty, assume a changelog entry is required.

---

## 2. APES website brand and feature standards

Apply APES CIC website branding and feature standards to all APES websites and future website work.

These standards apply to:

* `apes.org.uk`
* `apesshelter.org.uk`
* `apespetcare.org.uk`
* APES Newsroom
* CareBase and help or knowledge sites
* APES intranet pages where the same public-facing design pattern is reused
* Future websites, division websites, campaign sites, service sites, portals and microsites

### Brand operating model

APES websites must feel like one connected ecosystem:

* `apes.org.uk` is the parent APES CIC organisation gateway.
* `apesshelter.org.uk` is the Shelter & Rescue service website.
* `apespetcare.org.uk` is the Pet Care Clinic service website.
* APES Newsroom is the central public news destination.
* Future sites must inherit the APES master brand unless a separate brand decision has been formally approved.

### Brand principles

Preserve these principles:

* Recognisable first: every APES site should immediately feel part of the same organisation.
* Teal-led, not colour-cluttered: teal is the repeated APES master brand colour.
* Welfare before sales: donation, sponsorship, booking, shop and service journeys must still communicate animal welfare, trust, accountability and operational competence.
* Plain-language confidence: headings must be direct, active and practical.
* Consistent components: buttons, cards, hubs, filters, alerts, forms, footers, policy links, help routes and CTAs must follow shared patterns.
* Accessible by default: colour contrast, keyboard navigation, readable text sizes, visible focus states and plain language are brand requirements.

### APES colour system

Use these APES website colour tokens unless the website already has approved equivalent variables.

```css
:root {
  --apes-primary-teal: #008C8C;
  --apes-deep-teal: #005F5F;
  --apes-soft-mint: #DDF3EF;
  --apes-leaf-green: #2E7D32;
  --apes-rescue-sage: #A7C957;
  --apes-petcare-aqua: #26B6C8;
  --apes-warm-sand: #F2E9D8;
  --apes-charcoal: #263238;
  --apes-off-white: #F7FAF9;
  --apes-alert-amber: #F9A825;
  --apes-donation-coral: #E76F51;
}
```

Required usage:

| Colour | Hex | Required use |
|---|---:|---|
| Primary Teal | `#008C8C` | Main APES brand colour. Use for primary buttons, headings, navigation highlights, key icons and section accents. |
| Deep Teal | `#005F5F` | Header/footer backgrounds, high-emphasis text, hover states, governance panels and serious trust content. |
| Soft Mint | `#DDF3EF` | Panels, page callouts, form backgrounds and gentle emphasis areas. |
| Leaf Green | `#2E7D32` | Welfare, sustainability, positive status, success states and safe or approved messages. |
| Rescue Sage | `#A7C957` | Shelter, rescue, rehabilitation and animal-care accents. |
| Pet Care Aqua | `#26B6C8` | Clinic, pet-care, animal health, booking and care-service accents. |
| Warm Sand | `#F2E9D8` | Advice panels, adoption guidance, care notes and non-urgent education. |
| Charcoal | `#263238` | Main body text. Use instead of pure black. |
| Off White | `#F7FAF9` | Primary page or card background where white feels too stark. |
| Alert Amber | `#F9A825` | Warnings, urgent but non-critical notices and attention prompts. |
| Donation Coral | `#E76F51` | Donation, urgent appeal and fundraising accents only. |

### Typography and content style

* Use a modern, clear sans-serif.
* Body text must be readable and no smaller than 16px equivalent on websites.
* Tone must be professional, compassionate, non-judgemental, practical and operationally competent.
* Use sentence case for headings and buttons unless a formal service name requires title case.
* Avoid internal jargon where the public user needs a simple action.
* Remove placeholder and generic template copy before live publication.

---

## 3. Central Newsroom and news routing standard

APES Newsroom must be treated as the single public destination for news, announcements and updates from APES CIC and all operating divisions.

Individual websites may introduce news in context, but the full article, archive, subscription journey and cross-division discovery experience should sit on `https://www.apesnews.org.uk/`.

Required behaviour:

* Main APES website news navigation should route users to APES Newsroom.
* Shelter & Rescue website news navigation should route users to the Shelter & Rescue context in APES Newsroom.
* Pet Care Clinic website news navigation should route users to the Pet Care Clinic context in APES Newsroom.
* Footer news, newsletter prompts and update CTAs should point to APES Newsroom or its subscription route.
* Legacy `/news/` pages should act as short landing pages that direct visitors to APES Newsroom.

Reusable copy block:

```txt
News and updates from APES CIC and our services are now published through APES Newsroom. Visit APES Newsroom to read the latest organisation updates, Shelter & Rescue news, Pet Care Clinic updates, service notices, appeals and guidance from across the APES network.
```

---

## 4. Planning requirement

At the start of planning, confirm the type of update being worked on.

Determine:

1. Is this a major, minor or patch update?
2. Is this a beta update?
3. Is the update public-facing, internal-only or operational?
4. Which website, page, route, component, form or integration is affected?
5. Does the update affect compliance, safeguarding, accessibility, donations, finance, legal, governance, HR or animal welfare content?
6. Should the Change Log Hub entry be public, internal or both?
7. Does the work comply with APES website brand and feature standards?
8. Does the work affect APES Newsroom routing, news links, newsletter prompts, footer links, navigation or article metadata?
9. Is there a related GitHub Issue?
10. Should the GitHub Issue be updated at the start, during progress and at completion?

If the user has not confirmed the update type, ask:

```txt
Before I make the website change, please confirm the update type: major, minor, or patch. Also confirm whether this is beta, meaning the version should end in b.
```

If the task must proceed without confirmation, make a conservative decision and state the assumption clearly before editing.

Default assumptions:

* Use `patch` for small corrections and fixes.
* Use `minor` for new pages, new content sections, new forms, new workflows or new integrations.
* Use `major` only for substantial redesigns, breaking changes, migrations, URL restructuring or high-risk structural changes.
* Use stable, not beta, unless the user says it is beta, staging, preview, trial, soft launch or not final.

---

## 5. Version numbering standard

All APES CIC website versions must start with `v`.

Stable format:

```txt
vmajor.minor.patch
```

Beta format:

```txt
vmajor.minor.patchb
```

Examples:

```txt
v1.4.2
v1.4.2b
```

Unsupported formats include `1.4.2`, `1.4.2b`, `v1.4.2-beta`, `v1.4.2.beta`, `v1.4.2-b`, `v.1.4.2` and `version 1.4.2`.

### Version source of truth

Identify the canonical website version before changing it. Look in this order:

1. `VERSION`
2. `version.txt`
3. `version.json`
4. `package.json`
5. `CHANGELOG.md`
6. Any documented website release metadata file

If no version file exists, create a root-level `VERSION` file. The `VERSION` file must contain only the version number, including the mandatory `v` prefix.

### Version bump rules

* **Major:** substantial, breaking, structural, high-risk or materially changes how the website works.
* **Minor:** adds or materially improves functionality or public content without a breaking restructure.
* **Patch:** fixes, corrections, small improvements or low-risk updates.

When a beta becomes stable, remove the trailing `b` without changing the version numbers unless further work has been added.

---

## 6. Change Log Hub and changelog system requirement

All APES websites must have both:

1. A Change Log Hub page on the website being worked on.
2. A root-level `CHANGELOG.md` file in the repository.

These are separate requirements and both must be maintained.

### Website Change Log Hub page

Look for an existing page or route named `change-log`, `changelog`, `change-log-hub`, `updates`, `release-notes` or `site-updates`.

Preferred title:

```txt
Change Log Hub
```

If no page exists, create one using the website's routing conventions. Link it from an appropriate website location unless the user confirms it should remain unlisted.

### Repository `CHANGELOG.md`

Create or update a root-level `CHANGELOG.md` file. It must contain the same release version, date, type pills, summary, detailed changes, affected areas, validation notes and rollback notes as the website Change Log Hub page.

### Synchronisation rule

The website Change Log Hub page and root-level `CHANGELOG.md` must stay aligned. The final response must confirm both records show the same version number and release date.

---

## 7. Change Log Hub page design and behaviour

Build and maintain Change Log Hub pages using the APES green themed pattern:

* Green hero/header panel.
* Current version display.
* Version and status pills.
* Timeline panel.
* Search.
* Filters.
* Expand all and collapse all controls.
* Collapsible version cards.

Required page text:

```txt
Change Log Hub
Track every major release for this website, including updates, fixes, compliance changes, and user-facing improvements.
```

Required filters include at least All releases and Current release. Where useful, also add Stable, Beta, Added, Changed, Fixed, Removed, Security, Compliance, Accessibility, SEO, Forms, Integrations, Public-facing and Internal-only.

Use accessible `<details>` and `<summary>` elements unless the framework has an existing accessible accordion component.

---

## 8. Change Log Hub entry format

Use this structure for each release entry:

```md
## [v0.0.0] - YYYY-MM-DD

<span class="pill pill-version">Version v0.0.0</span>
<span class="pill pill-status">Stable</span>
<span class="pill pill-type">Changed</span>
<span class="pill pill-fix">Fix</span>

### Summary

Briefly explain what changed and why.

### Detailed changes

- Describe each material change in plain English.
- Include affected page names, website areas, components, forms or user journeys.
- Include whether the change is public-facing, internal-only or operational.
- Include any compliance, safeguarding, accessibility, governance, donation, finance or animal welfare relevance.

### Affected areas

- Website:
- Page or route:
- Files changed:
- User groups affected:
- Public impact:
- Internal impact:

### Version decision

- Previous version:
- New version:
- Version type:
- Reason for version bump:

### Validation

- Checks run:
- Manual checks completed:
- Known limitations:
- Rollback notes:
```

Use type pills for Added, Changed, Fixed, Removed, Security and Compliance. Use fix pills where a change repairs a problem.

---

## 9. GitHub Issues progress update requirement

Keep relevant GitHub Issues updated when:

* The work was requested from a GitHub Issue.
* A GitHub Issue is linked in the task, branch, pull request, commit message, project board or planning notes.
* The work clearly relates to an existing GitHub Issue.
* A GitHub Issue is created for the work.
* A website update affects release planning, changelog work, versioning, deployment, validation or follow-up actions.

### Start-of-work update

```md
## Work started

Codex has started work on this issue.

### Planned scope

- Website:
- Area affected:
- Planned update type: major / minor / patch
- Release status: stable / beta
- Expected version:
- Change Log Hub update required: yes / no
- Root `CHANGELOG.md` update required: yes / no
- `VERSION` update required: yes / no

### Notes

- Assumptions:
- Risks:
- Confirmation needed:
```

### Progress update

```md
## Progress update

### Completed

-

### In progress

-

### Blockers or risks

-

### Version and changelog status

- Version:
- Change Log Hub page:
- Root `CHANGELOG.md`:
- `VERSION` file:
```

### End-of-work update

```md
## Work completed

### Summary

-

### Release details

- Version:
- Release status:
- Update type:

### Changelog and version records

- Change Log Hub page:
- Root `CHANGELOG.md`:
- `VERSION` file:

### Validation

- Automated checks:
- Manual checks:
- Result:

### Files or areas changed

-

### Rollback notes

-

### Follow-up

- Issue status recommendation: close / keep open / needs review
- Remaining actions:
```

Do not close issues unless explicitly instructed or repository workflow clearly permits it.

---

## 10. Required workflow

For every website task:

1. Understand the change and identify website, files, user-visible impact, technical impact, risk level, version bump, beta status, Change Log Hub location, brand impact, Newsroom routing impact and related GitHub Issue.
2. Confirm or infer update type and beta status.
3. Make only the required website change. Avoid bulk rewrites, formatting-only churn and unrelated generated-file changes.
4. Update the canonical version file.
5. Update the website Change Log Hub page and root-level `CHANGELOG.md`.
6. Validate using available build, tests, linting, link checks, accessibility checks, manual page review, form validation and sitemap or robots checks.
7. Post final GitHub Issue update where relevant, then provide a final response covering version, changelog, validation, brand compliance, Newsroom routing and unresolved risks.

---

## 11. Generated website export rule

Generated files must be treated carefully.

Do not:

* Reformat entire generated HTML, CSS, JS, XML or JSON files.
* Rewrite unrelated generated sections.
* Update platform-generated module versions.
* Update third-party widget versions.
* Update CDN asset versions.
* Change embedded CRM or form scripts unless the task requires it.
* Change generated sitemaps unless the task concerns sitemap, SEO, indexing or URL changes.

Keep diffs narrow, prefer source files over generated output where the source exists, and record generated-output changes clearly in release records.

---

## 12. Commit and pull request guidance

Recommended PR checklist:

```md
## Website release checklist

- [ ] Confirmed update type: major, minor, or patch
- [ ] Confirmed beta status
- [ ] Updated related GitHub Issue at start of work
- [ ] Updated related GitHub Issue during meaningful progress, if applicable
- [ ] Posted final related GitHub Issue update
- [ ] Checked APES website brand and feature standards
- [ ] Checked APES Newsroom routing where news, updates, newsletter, footer, or navigation is affected
- [ ] Updated canonical version file
- [ ] Created or updated website Change Log Hub page
- [ ] Created or updated root-level `CHANGELOG.md`
- [ ] Added pill tags for change type and fixes
- [ ] Listed affected website areas
- [ ] Listed validation checks
- [ ] Included rollback notes
- [ ] Avoided unrelated generated-file rewrites
- [ ] Confirmed no third-party/platform versions were changed accidentally
```

Recommended commit messages:

```txt
website: update change log hub for v0.0.0
website: add volunteer page and bump to v0.2.0
website: fix donation link and bump to v0.1.3
website: add beta boarding form and bump to v0.3.0b
```

---

## 13. Final self-check before completion

Before finishing any website task, check:

1. Update type identified.
2. Beta status confirmed or inferred.
3. Canonical version updated.
4. Website Change Log Hub page updated.
5. Root-level `CHANGELOG.md` updated.
6. Detailed change notes added.
7. Version, status, type and fix pills added where relevant.
8. Unrelated generated-file changes avoided.
9. Third-party or platform version strings not changed accidentally.
10. Validation run or limitations stated.
11. Rollback notes included.
12. Changelog system created or corrected where missing or incorrect.
13. APES website brand and feature standards checked.
14. APES Newsroom routing checked where relevant.
15. Related GitHub Issue updated at start, meaningful progress and end where applicable.

---

## 14. Non-negotiable instruction

Do not treat changelog, version updates, APES brand compliance, APES Newsroom routing or related GitHub Issue updates as optional for website work.

If website files change, the website Change Log Hub page, root-level `CHANGELOG.md`, canonical version, APES brand and feature standards, APES Newsroom routing where relevant and related GitHub Issue must be checked.

Use UK English throughout website content, changelog entries, issue updates and release notes.
