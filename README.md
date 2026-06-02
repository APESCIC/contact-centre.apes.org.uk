<p align="center">
  <a href="https://www.apes.org.uk/" target="_blank" rel="noopener noreferrer">
    <img src="https://www.apes.org.uk/APES_logo_3D_440x250.png" alt="APES CIC Logo" width="220">
  </a>
</p>

<h1 align="center">APES Contact Centre</h1>

<p align="center">
  <strong>Public contact routing service for APES CIC enquiries, support routes, rescue pathways, governance contact points and service communications.</strong>
</p>

<p align="center">
  <a href="https://contact-centre.apes.org.uk/"><img alt="Contact Centre" src="https://img.shields.io/badge/contact--centre.apes.org.uk-live-1B5E20"></a>
  <img alt="Status" src="https://img.shields.io/badge/status-active_service-2E7D32">
  <img alt="Theme" src="https://img.shields.io/badge/theme-APES_Habitat-43A047">
  <img alt="Accessibility" src="https://img.shields.io/badge/accessibility-WCAG_AA_target-00796B">
  <img alt="Language" src="https://img.shields.io/badge/language-UK_English-00695C">
</p>

---

## 🌿 Project purpose

The **APES Contact Centre** repository supports the development and maintenance of the public contact routing service for the **Association of Protecting Exotic Species CIC (APES CIC)**.

The contact centre exists to give members of the public, service users, adopters, surrendering owners, volunteers, supporters, partners and stakeholders a clear, accessible and secure way to reach the correct APES CIC person, team, department or division.

Primary goals:

* Improve public access to the correct APES contact route.
* Support animal welfare, rescue, rehabilitation, pet care, adoption, surrender, governance, finance and operational enquiries.
* Reduce misdirected enquiries and avoid unnecessary delays.
* Keep public contact routes consistent with APES CIC branding, values and service standards.
* Build reusable contact, form and routing components that reduce duplication and design drift.
* Maintain strong standards for accessibility, data protection, security and UK compliance.

---

## 🧭 Service areas

The contact centre should develop around task-led public routes rather than generic pages.

| Area | Purpose |
|---|---|
| **General Contact** | Main public enquiry route, signposting and contact guidance. |
| **Animal Welfare** | Urgent and non-urgent animal welfare concerns, rescue signposting and welfare triage routes. |
| **Rescue and Surrender** | Animal rescue, surrender, emergency support and case-routing contact paths. |
| **Adoption and Fostering** | Adoption enquiries, foster enquiries, application guidance and follow-up contact routes. |
| **Pet Care** | Pet care enquiries, clinic routes, client support and service guidance. |
| **Volunteering** | Volunteer enquiries, placements, onboarding questions and support contacts. |
| **Donations and Fundraising** | Donation support, fundraising enquiries, partnership routes and supporter contact. |
| **Governance and Compliance** | Board, statutory, policy, complaints, data protection and governance contact routes. |
| **Website and Technical Support** | Website faults, form issues, helpdesk routing, accessibility and technical contact support. |
| **Help and FAQs** | Public guidance, common questions, service explanations and contact decision support. |

---

## 🎨 APES Habitat design direction

The contact centre should use a **green-led APES Habitat theme**: practical, accessible, welfare-focused and recognisably APES.

### Brand principles

* **Mission-led:** connect major features back to animal welfare, rescue, rehabilitation, education, public support or governance.
* **Friendly and colourful:** use habitat-inspired shapes, animal-welfare cues, rounded cards and service colour bands.
* **Operationally clear:** visual design must never obscure urgent welfare, safeguarding, complaints, data protection or governance routes.
* **Accessible by default:** colour contrast, keyboard navigation, readable typography and plain-language labels are mandatory.
* **Reusable:** use shared tokens, components and templates so new features remain consistent.

### Suggested colour tokens

| Token | Suggested use |
|---|---|
| **Forest Green** | Primary navigation, headers, governance and high-trust areas. |
| **Leaf Green** | Positive states, active indicators, welfare updates and primary buttons. |
| **Mint** | Soft backgrounds, low-pressure information panels and content cards. |
| **Teal** | Shelter, rescue and operational cards. |
| **Sky Blue** | Pet care, guidance, help and knowledge-base content. |
| **Purple** | People, volunteers, training and wellbeing routes. |
| **Coral / Orange** | Calls to action, campaign banners and non-critical warnings. |
| **Warm Sand** | Calm page background accents and break sections. |

---

## 🧩 Recommended repository structure

The exact structure may vary by framework, but the repository should stay easy to navigate.

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── docs/
│   ├── accessibility/
│   ├── architecture/
│   ├── brand/
│   ├── compliance/
│   └── decisions/
├── public/
│   └── assets/
│       └── logo/
├── src/
│   ├── components/
│   ├── config/
│   ├── features/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── utils/
├── tests/
│   ├── accessibility/
│   ├── integration/
│   └── unit/
├── CHANGELOG.md
├── CONTRIBUTING.md
├── README.md
└── SECURITY.md
```

---

## 🚀 Getting started

> Replace the commands below with the confirmed project stack once the framework and package manager are finalised.

### 1. Clone the repository

```bash
git clone <repository-url>
cd contact-centre.apes.org.uk
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create local environment file

```bash
cp .env.example .env.local
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Run checks before committing

```bash
npm run lint
npm run test
npm run build
```

---

## 🔐 Environment variables

Do not commit secrets, credentials, API tokens or live service keys.

Document required variables in `.env.example` using safe placeholder values only.

| Variable | Purpose | Required | Example |
|---|---|---:|---|
| `APP_ENV` | Application environment. | Yes | `local` |
| `APP_URL` | Local or deployed application URL. | Yes | `http://localhost:3000` |
| `PUBLIC_CONTACT_CENTRE_URL` | Public contact centre base URL. | Yes | `https://contact-centre.apes.org.uk` |
| `MAIN_APES_URL` | Main APES CIC website. | Yes | `https://www.apes.org.uk` |
| `HELPDESK_PROVIDER_URL` | Helpdesk or ticketing provider endpoint. | If used | `https://helpdesk.example.local` |
| `FORMS_PROVIDER_URL` | Form handling provider endpoint. | If used | `https://forms.example.local` |
| `DATABASE_URL` | Database connection string. | If used | `postgres://user:pass@localhost:5432/contact_centre` |

---

## 🛠 Development workflow

### Branch naming

Use short, descriptive branch names.

```text
feature/contact-route-selector
feature/rescue-enquiry-form
fix/accessibility-focus-state
fix/mobile-navigation-overflow
docs/update-contact-routing-standards
hotfix/form-submission-error
```

### Commit style

Use clear commit messages that describe the change and the reason.

```text
Add contact route selector
Fix keyboard focus state on contact cards
Document rescue enquiry form validation
Improve mobile layout for enquiry categories
Update privacy wording for contact forms
```

### Pull requests

Every pull request should include:

* Summary of the change.
* Reason for the change.
* Screenshots or screen recordings for UI changes.
* Accessibility considerations.
* Security and data protection considerations.
* Testing completed.
* Contact routes, forms, departments or divisions affected.
* Rollback notes where relevant.

Use the templates in:

```text
.github/ISSUE_TEMPLATE/
.github/pull_request_template.md
```

---

## ✅ Definition of done

A feature is not ready to merge until it meets the relevant checklist.

### Functional quality

* [ ] Feature meets the agreed acceptance criteria.
* [ ] User-facing copy is clear, accurate and written in UK English.
* [ ] Empty, loading, success and error states are handled.
* [ ] Mobile and desktop layouts have been checked.
* [ ] Links, buttons and forms behave as expected.
* [ ] Contact routes send users to the correct person, team, department or division.

### Accessibility

* [ ] Normal text meets at least **4.5:1** contrast.
* [ ] Large text and meaningful graphical elements meet at least **3:1** contrast where applicable.
* [ ] Colour is not the only method used to show meaning, status or urgency.
* [ ] Keyboard focus is visible and logical.
* [ ] Form fields have labels, helper text and error messages.
* [ ] Images and icons have suitable accessible names or alternative text.
* [ ] Motion is minimal and respects reduced-motion preferences.

### Data protection and security

* [ ] No secrets, personal data or confidential records are committed.
* [ ] Form submissions collect only necessary information.
* [ ] Safeguarding, welfare, complaints, HR, finance and governance enquiries are treated as sensitive.
* [ ] Logs do not expose personal data or confidential case details.
* [ ] Contact routing does not publish private internal contact information unless approved.
* [ ] Privacy and consent wording has been reviewed where relevant.

### Governance and compliance

* [ ] Policy, finance, complaints, data protection or governance content has an identified owner.
* [ ] Review dates are included where appropriate.
* [ ] Legal, safeguarding or data protection changes have been reviewed by the appropriate lead.
* [ ] Changes align with APES CIC operational standards and UK compliance expectations.

---

## 🧪 Testing expectations

Use the strongest practical test coverage for the type of change.

| Change type | Expected checks |
|---|---|
| UI component | Unit tests, keyboard check, responsive check, contrast check. |
| Form or workflow | Validation tests, error-state tests, success-state tests, routing check. |
| Contact route update | Destination check, wording check, privacy review where relevant. |
| Content update | Link check, spelling check, owner/review-date check where relevant. |
| Authentication or permissions | Access tests, failed-login behaviour, role boundary checks if used. |
| Data handling | Input validation, output escaping, logging review, retention considerations. |

---

## 🧯 Priority issue types

Use the correct issue template so triage is faster.

| Issue type | Use when |
|---|---|
| **Bug** | Something is broken or behaving unexpectedly. |
| **Feature Request** | A new contact route, service page, form or workflow is needed. |
| **Routing Update** | A person, team, department, division or service route needs changing. |
| **Compliance / Governance** | The change relates to complaints, statutory information, policy, board, finance or audit. |
| **Security / Privacy** | The change affects access control, personal data, logs, form handling or confidential information. |
| **Content Update** | The change is primarily wording, guidance, links or document structure. |
| **Urgent Public Access** | Public users cannot reach an important contact route or urgent support pathway. |

---

## 🧱 Component standards

Reusable components should be preferred over one-off layouts.

Recommended component families:

* Contact route cards.
* Enquiry category cards.
* Quick action buttons.
* Alert banners.
* Service hub cards.
* Status chips.
* Form fields and validation summaries.
* Confirmation panels.
* Help and FAQ accordions.
* Empty states with APES-themed illustrations.

Component requirements:

* Use shared design tokens.
* Support keyboard interaction.
* Avoid hard-coded colours where a token exists.
* Include accessible names for icons and controls.
* Work on mobile, tablet and desktop widths.
* Document important props, variants and usage constraints.

---

## 📚 Documentation standards

Keep documentation close to the code and update it in the same pull request as the relevant change.

Recommended documents:

| Document | Purpose |
|---|---|
| `docs/architecture/overview.md` | System overview, major services and integration points. |
| `docs/brand/theme-guide.md` | APES Habitat theme, logo usage, colour tokens and component rules. |
| `docs/accessibility/checklist.md` | Accessibility testing workflow and acceptance checks. |
| `docs/compliance/data-protection.md` | Data handling, privacy and retention notes. |
| `docs/compliance/contact-routing.md` | Routing ownership, review standards and escalation rules. |
| `docs/decisions/` | Architecture decision records and reasoning. |
| `SECURITY.md` | How to report security concerns safely. |
| `CONTRIBUTING.md` | Contributor expectations and development workflow. |

---

## 🛡 Security and responsible disclosure

Do not open public issues containing:

* Credentials, API keys or tokens.
* Personal data.
* Safeguarding details.
* Animal welfare case details.
* Contact form submissions.
* Security details that could create immediate operational risk.
* HR, finance, governance or legal correspondence.
* Internal-only contact routing that should not be public.

Report sensitive concerns through the approved APES internal route or by contacting the responsible lead directly.

For repository security guidance, maintain a separate `SECURITY.md` file.

---

## 🧑‍🤝‍🧑 Contributors and access

This repository is intended for authorised APES CIC directors, staff, volunteers, contractors and approved collaborators.

Access should follow least-privilege principles:

* Give users the minimum role needed for their work.
* Remove access when a role ends or no longer requires repository access.
* Protect the default branch.
* Require pull request review for material changes.
* Treat welfare, safeguarding, complaints, governance, HR and finance information as sensitive by default.

---

## 📈 Roadmap themes

Current development should prioritise:

1. **Theme foundation**: APES Habitat palette, typography, layout tokens and component rules.
2. **Homepage contact hub**: welcome hero, quick actions, enquiry category cards, urgent notices and search.
3. **Service contact routes**: Animal Welfare, Rescue and Surrender, Adoption, Fostering, Pet Care, Volunteering, Donations, Governance and Website Support.
4. **Forms and workflows**: clearer labels, progress states, confirmation pages, routing checks and mobile checks.
5. **Support layer**: FAQs, contact decision support, helpdesk signposting and service guidance.
6. **Launch quality**: accessibility review, mobile review, broken-link checks, privacy review and deployment checklist.

---

## 📏 Success measures

The contact centre should be judged by practical outcomes.

| Measure | Target |
|---|---|
| Contact clarity | Users can identify the correct route within 10 seconds. |
| Routing accuracy | Enquiries reach the correct person, team, department or division. |
| Form reliability | Public forms submit successfully and show clear confirmation messages. |
| Search reduction | Fewer repeated “who do I contact...” requests. |
| Compliance visibility | Privacy, complaints, data protection and governance routes are clear. |
| Accessibility | Core pages pass WCAG AA contrast checks. |
| Consistency | Major contact routes follow the same theme and component rules. |
| Mobile usability | Core contact workflows are usable on phones. |

---

## 🏢 Organisation

**Association of Protecting Exotic Species CIC (APES CIC)**  
CIC No: `16253848`  
Registered Office: `40 Morris Street, St Helens, WA9 3EN`  
Website: <https://www.apes.org.uk/>  
Contact Centre: <https://contact-centre.apes.org.uk/>  
Telephone: `0300 302 0998`

---

## 📄 Licence and reuse

This repository and its contents are maintained for APES CIC website development, contact routing and service delivery.

Unless a separate licence file states otherwise, do not reuse APES CIC branding, public service materials, source code, operational workflows, contact routing logic or service materials outside authorised APES CIC purposes.

---

<p align="center">
  <strong>Built to support people, protect animals and keep APES contact routes clear, compliant and accessible.</strong>
</p>
