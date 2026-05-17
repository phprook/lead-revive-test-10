# Build report — FEATURE_006: Basic SEO and metadata

## Summary
Replaced the default `create-next-app` page metadata in the root layout
with a relevant title and concise description that match the real
estate lead follow-up landing page. No new tooling, libraries, or
files added.

## Files changed
- `src/app/layout.tsx` — updated the `metadata` export:
  - `title`: "Thinking about your next move? | Real Estate Lead Follow-Up"
  - `description`: short summary of the offer — a local agent follows
    up with the next step, no pressure or obligation.

## Done-when checks
- ✅ Page has a relevant title (mirrors the on-page headline and
  clarifies purpose).
- ✅ Page has a concise meta description (one sentence, ~160 chars).
- ✅ Metadata matches the landing page purpose (real estate lead
  follow-up, reassurance tone consistent with page copy).
- ✅ No unnecessary SEO tooling added.

## Do-not-do checks
- ✅ No blog added.
- ✅ No analytics added.
- ✅ No sitemap automation added.
- ✅ No schema/JSON-LD markup added.

## Verification
- `npx tsc --noEmit` passes with no errors.
