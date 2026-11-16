# Agent instructions for APES Contact Centre

Cursor's user rules and skills set how work is done here (branches, issues, pull requests, merge, release, deploy, ship gate, decisions and safety). This file describes this repository and fills the named slots below. If anything here disagrees with them, Cursor's rules win and this file is corrected in the same milestone.

Cursor/agent layout standard: https://github.com/apescic-director/Cursor/blob/bmurphy/cursor-agent-standard-81b0/docs/cursor-agent-standards.md

The owner is Bambie Murphy, Director. Write UK English (organisation, behaviour, colour, licence) in the site, docs, issues and pull requests. Never print, paste or commit secrets.

## About the app

APES Contact Centre (`https://contact-centre.apes.org.uk/`) is the public contact routing site for the Association of Protecting Exotic Species CIC (APES CIC). Visitors use guided route finding and division pages to reach the correct enquiry, complaint, rescue, pet care, shop or staff sign-in destination (external helpdesk links).

- Repository: `APESCIC/contact-centre.apes.org.uk`. Work only in this repository.

## Stack and architecture

- Static HTML, CSS and browser JavaScript served from `public/` (no Composer, no Node build for the live site, no database).
- Pages: `public/index.html` (route finder), division pages (`apes-cic.html`, `shelter-rescue.html`, `pet-care-clinic.html`, `pet-shop.html`), `donate.html`, policy pages (`privacy.html`, `terms.html`, `cookies.html`), and Change Log Hub (`changelog.html` plus `public/CHANGELOG.md`).
- Shared assets under `public/assets/` (`css/`, `js/`).
- Canonical site version is `public/VERSION` (currently `v0.2.1`); keep root `VERSION`, `CHANGELOG.md`, `public/CHANGELOG.md`, the Change Log Hub page and footer version text aligned when releasing.

## Local development and preview

| Item | Value |
| --- | --- |
| Clone | `C:\Users\BambieMurphy\Documents\GitHub\contact-centre.apes.org.uk` |
| Herd site | `contact-centre` (link the clone; serve `public/` as the web root) |
| Preview URL | `http://contact-centre.test` |
| Preview command | Open the Herd site (no `scripts\preview.ps1` in this repo yet) |
| HMR port | None |
| Env file | None (static site; ignore aspirational `.env` notes in README until a runtime is added) |
| Database | None |
| Mail | None |

Laravel Herd is the only supported local stack. Do not use Laragon. There is no demo seeder; the site has no application data store.

### Local development with Laravel Herd

This project is a static site Herd can serve from `public/`. Run `herd site:info` for the URL and PHP version if PHP tooling is added later.

- Prefer `herd link` / site settings so the document root is `public/`.
- Use `herd status` if the preview does not respond; `herd list` shows every command (`--json` for structured output).
- Until preview helpers exist, confirm pages load under `http://contact-centre.test` before content work.

## Tests and checks

| Check | Command |
| --- | --- |
| Manual route check | Load `/`, division pages, donate, privacy, terms, cookies and `/changelog.html` locally |
| Version alignment | Confirm `public/VERSION`, footers and Change Log Hub show the same version |
| CI workflows | None in `.github/workflows/` yet |

## Workflow slots

Shipping follows Cursor's `github-milestone-completion` and `ship-gate` skills. This repo fills these slots:

| Slot | Value |
| --- | --- |
| Milestone branch pattern | `milestone/vX-Y-Z-<slug>` (or the milestone issue's named branch until tooling exists) |
| Version files | `public/VERSION`, root `VERSION`, `CHANGELOG.md`, `public/CHANGELOG.md`, footer version strings in `public/*.html` |
| Release tooling | None yet (`gh release create` after ship-gate) |
| Area labels | None; use default labels until area labels are added |
| Issue title prefix | `[Type] Short title` |

Development is tracked only in GitHub issues, sub-issues and versioned milestones — never Linear. An issue is done when its acceptance criteria are committed on the milestone branch; the milestone is done only after one merge commit into `main`, one release and one verified deploy.

## Deploy and health

| Item | Value |
| --- | --- |
| Target | Cloudron (or static host) for `https://contact-centre.apes.org.uk/` — confirm app ID before deploy |
| Cloudron app ID | None recorded in-repo yet |
| Domain | `https://contact-centre.apes.org.uk/` |
| Deploy command | None documented yet (record when confirmed) |
| Deploys | The release tag (never a branch), after ship-gate |
| Auto-deploy couplings | none |
| Health URL | `https://contact-centre.apes.org.uk/` (and `/VERSION` once root/public version files are served consistently) |
| Version field | Body of `public/VERSION` |
| Secrets live in | APES Vault (Bitwarden). Never commit secrets |

Every Cloudron app is production. Read-only checks are fine; mutating or deploy actions follow the Cloudron skills and ship gate.

## Decisions and gotchas

- 2026-11-16: Root `AGENTS.md` rewritten to the APES Cursor/agent template for this static Contact Centre site; Laravel Herd only; standards linked (Refs the Cursor agent-standards cleanup).
- Gotcha: root `VERSION` may lag `public/VERSION` (for example `v0.1.0` vs `v0.2.1`). Prefer `public/VERSION` and footers until they are synced.
- Gotcha: README still describes an aspirational Node/env app layout that is not present in the tree. Follow this file and `public/` for what exists today.
- Website brand, footer, Newsroom routing and Change Log Hub standards for APES public sites still apply to content work; keep them in product pages and changelogs rather than duplicating the long org copy here.

## Where to find things

- Live site: https://contact-centre.apes.org.uk/
- Change log: [CHANGELOG.md](CHANGELOG.md), [public/CHANGELOG.md](public/CHANGELOG.md), [public/changelog.html](public/changelog.html)
- Overview: [README.md](README.md)
- Issue forms: `.github/ISSUE_TEMPLATE/`
