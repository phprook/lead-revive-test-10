# MASTER_PRODUCT_BRIEF

## Product Vision

Build a simple, high-converting real estate lead follow-up landing page that helps a real estate agent or team capture interest from potential buyers, sellers, or past leads who need follow-up.

The page should feel clear, trustworthy, and action-oriented. It should quickly explain why the visitor should respond, provide a simple form, and make the next step obvious.

This is not a full real estate website. It is a focused landing page for lead follow-up.

## Target User

Primary user:

- A real estate agent, broker, or real estate team that wants to follow up with leads.

End visitor:

- A potential home buyer.
- A potential home seller.
- A stale or old lead who previously showed interest.
- Someone who clicked from an email, ad, SMS, or social post.

## Core Problem

Real estate leads often go cold because follow-up is unclear, slow, or too complicated. Agents need a simple page where a lead can quickly raise their hand, share basic contact details, and request the next step.

## V1 Goal

Create a clean, responsive landing page with:

- A strong headline.
- A short explanation.
- A clear call to action.
- A simple lead capture form.
- A basic success state after submission.

V1 should be static/local only unless otherwise approved. No CRM, no email automation, no database, and no admin dashboard yet.

---

# PRODUCT_ROADMAP

## FEATURE_001 — Basic Landing Page Structure

Create the first public homepage with a clean layout, headline, supporting copy, and CTA area.

Purpose:

- Establish the landing page foundation.
- Make the page visually clear and usable on desktop and mobile.

## FEATURE_002 — Lead Capture Form UI

Add the visible form fields needed for a basic real estate lead follow-up.

Suggested fields:

- Full name.
- Email.
- Phone.
- Interest type: Buying, Selling, Both, Not sure.
- Optional message.

Purpose:

- Let visitors submit their interest clearly.

## FEATURE_003 — Client-Side Form Validation

Add simple validation before submission.

Validation should include:

- Required name.
- Required email or phone.
- Valid email format if email is entered.
- Required interest type.

Purpose:

- Prevent empty or unusable submissions.

## FEATURE_004 — Form Submission Success State

Add a simple local submission behavior.

When the form passes validation:

- Show a thank-you message.
- Hide or reset the form.
- Confirm that the agent/team will follow up.

Purpose:

- Give the visitor confidence that their request was received.

No backend storage yet.

## FEATURE_005 — Trust and Conversion Enhancements

Add lightweight supporting content to improve conversion.

Examples:

- “No pressure” reassurance.
- “Quick response” message.
- Three simple benefit bullets.
- Privacy reassurance near the form.

Purpose:

- Make the page more credible without turning it into a full website.

## FEATURE_006 — Basic SEO and Metadata

Add page title, description, and basic metadata.

Purpose:

- Make the page presentable when shared.
- Improve basic discoverability and polish.

---

# TECH_ARCHITECTURE

## Recommended Stack

Use the default simple stack:

- Next.js
- Vercel for deployment later
- GitHub for version control
- Supabase later only if persistent lead storage is approved

## Application Type

A simple single-page landing page.

Recommended route:

- `/` — Main landing page

## Frontend

Use standard Next.js app structure.

Recommended approach:

- Build using React components.
- Keep styling simple.
- Use CSS Modules, global CSS, or Tailwind only if already configured.
- Do not add a component library unless approved.

Suggested component structure:

- `app/page.tsx` — main page composition
- `components/Hero.tsx`
- `components/LeadForm.tsx`
- `components/TrustSection.tsx`

Only create extra components when useful. Do not over-engineer.

## Backend

No backend is required for V1.

The form submission can be handled locally in the browser by showing a success state after validation.

Future backend options if approved:

- Supabase table for lead submissions.
- Email notification integration.
- CRM webhook integration.

Do not implement these in V1 unless explicitly approved.

## Deployment

Deployment target:

- Vercel

Deployment rule:

- Do not touch production unless Alon approves.
- Work should happen in a local/dev branch or preview environment.

## Design Direction

The design should be:

- Clean.
- Professional.
- Trustworthy.
- Mobile-first.
- Easy to scan.
- Focused on one action: submitting the lead form.

Avoid:

- Complex navigation.
- Large real estate search features.
- Property listings.
- Login.
- Admin dashboard.
- CRM features.

---

# DATA_MODEL_SKETCH

## Database Status

No database is needed for V1.

The first version should not store submissions permanently. It should only validate form input and show a success message locally.

## Future Lead Data Concept

If persistent storage is later approved, likely data model:

### `leads`

Possible fields:

- `id` — unique lead ID
- `full_name` — lead’s name
- `email` — lead’s email address
- `phone` — lead’s phone number
- `interest_type` — buying, selling, both, not_sure
- `message` — optional visitor message
- `source` — optional traffic source, such as email, ad, sms, referral
- `status` — new, contacted, qualified, closed, archived
- `created_at` — submission timestamp
- `updated_at` — last update timestamp

## Future Notes

Possible future table:

### `lead_notes`

Fields:

- `id`
- `lead_id`
- `note`
- `created_at`

Do not build these tables yet.

---

# AI_BUILD_RULES

- Claude must read the full project packet before coding.
- Claude must build only the current feature.
- Claude should not build future roadmap items early.
- Claude must list files it wants to edit before editing.
- ChatGPT makes the final decision.
- Claude and Gemini are advisory only.
- If the same issue fails 3 times, stop and alert Alon.
- Do not touch production.
- Do not expand scope without approval.
- Keep implementation simple and practical.
- Prefer readable code over clever abstractions.
- Do not add authentication unless explicitly approved.
- Do not add a database unless explicitly approved.
- Do not add CRM, email, SMS, or automation integrations unless explicitly approved.
- Do not introduce paid services or third-party dependencies without approval.
- Each feature should be independently buildable and testable.
- After each feature, Claude should summarize what changed and how to test it.

---

# FEATURES

```json
[
  {
    "id": "FEATURE_001",
    "name": "Basic landing page structure",
    "goal": "Create the first public landing page with a clear real estate lead follow-up message.",
    "done_when": [
      "Homepage loads at /",
      "Page includes a clear headline",
      "Page includes a short explanation of the offer",
      "Page includes a visible call-to-action area",
      "Layout is usable on desktop and mobile"
    ],
    "do_not_do": [
      "Do not add form validation yet",
      "Do not add backend storage",
      "Do not add authentication",
      "Do not add property listings",
      "Do not add CRM or email integrations"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_002",
    "name": "Lead capture form UI",
    "goal": "Add a simple lead form so visitors can provide contact information and real estate interest.",
    "done_when": [
      "Form includes full name field",
      "Form includes email field",
      "Form includes phone field",
      "Form includes interest type selection with Buying, Selling, Both, and Not sure options",
      "Form includes optional message field",
      "Form includes a clear submit button"
    ],
    "do_not_do": [
      "Do not submit to a backend",
      "Do not add Supabase",
      "Do not add email notifications",
      "Do not add advanced validation beyond basic field structure"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_003",
    "name": "Client-side form validation",
    "goal": "Prevent unusable form submissions with simple browser-side validation.",
    "done_when": [
      "Full name is required",
      "At least one contact method is required: email or phone",
      "Email format is validated when email is entered",
      "Interest type is required",
      "Helpful error messages appear near the form",
      "Invalid submissions do not show the success state"
    ],
    "do_not_do": [
      "Do not add server-side validation",
      "Do not add database storage",
      "Do not add CAPTCHA",
      "Do not add complex validation libraries unless already present"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_004",
    "name": "Form submission success state",
    "goal": "Show a clear confirmation after a valid form submission.",
    "done_when": [
      "Valid form submission shows a thank-you message",
      "Success message confirms that follow-up will happen soon",
      "Form is either hidden or reset after successful submission",
      "No backend request is made",
      "The visitor understands the next step"
    ],
    "do_not_do": [
      "Do not save submissions permanently",
      "Do not send emails",
      "Do not integrate with CRM",
      "Do not add admin review screens"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_005",
    "name": "Trust and conversion enhancements",
    "goal": "Improve visitor confidence and make the landing page more persuasive without adding complexity.",
    "done_when": [
      "Page includes 2 to 3 short benefit bullets",
      "Page includes a no-pressure reassurance message",
      "Page includes a privacy reassurance near the form",
      "Content remains concise and focused on the lead form",
      "Mobile layout remains clean"
    ],
    "do_not_do": [
      "Do not add testimonials unless real approved copy is provided",
      "Do not add fake reviews",
      "Do not add property search",
      "Do not add multiple pages",
      "Do not make the page feel like a full real estate website"
    ],
    "status": "pending"
  },
  {
    "id": "FEATURE_006",
    "name": "Basic SEO and metadata",
    "goal": "Add basic page metadata so the landing page is polished and shareable.",
    "done_when": [
      "Page has a relevant title",
      "Page has a concise meta description",
      "Metadata matches the landing page purpose",
      "No unnecessary SEO tooling is added"
    ],
    "do_not_do": [
      "Do not add a blog",
      "Do not add advanced analytics",
      "Do not add sitemap automation unless already available",
      "Do not add schema markup unless specifically approved"
    ],
    "status": "pending"
  }
]
```