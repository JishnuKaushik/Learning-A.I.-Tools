# Webpage Project

A webpage built and refined through an iterative screenshot-compare-fix loop, rather than a one-shot build.

## Stack

No framework chosen yet. Default to plain HTML/CSS/JS (no build step) unless a feature genuinely needs
components or routing — that keeps the screenshot loop below fast (edit file, refresh, screenshot).
If the project later needs React/Vite or Next.js, update this section and note why.

## Project layout

- `index.html`, `styles.css`, `script.js` (or framework equivalent) — the actual site
- `reference/` — target design images dropped in by the user; each screenshot loop compares against these
- `.progress.md` — running log of what's been tried each loop and what's still off (create on first loop)

## The build loop

This project is built by repeating the following loop, not by writing everything once:

1. **Read the target.** Look at the image(s) in `reference/` for the section/page being worked on. If a
   file name suggests which page/state it's for (e.g. `reference/home-mobile.png`), scope the comparison
   to that page/state. If there's no reference image yet for what's being built, ask before guessing at
   layout details that matter (exact colors, spacing) — proceed on best judgment for anything minor.
2. **Implement or adjust** the smallest change that should move the page closer to the reference.
3. **Run it and take a screenshot.** Use the `run` skill to launch the page and capture a screenshot of
   the current state. Don't skip this — a code change that "should" match the reference is not the same
   as one that's been visually verified.
4. **Compare screenshot to reference.** Look at both side by side. Check layout/spacing, colors and
   typography, content, responsive behavior (compare at the reference's implied viewport size), and any
   interactive states the reference implies (hover, focus, error, etc.).
5. **Check for errors.** Look at console/network errors and broken rendering in the same pass — fix these
   before or alongside visual differences, since a JS error can itself cause the visual mismatch.
6. **Log the diff.** Append a short entry to `.progress.md`: what was compared, what matched, what didn't,
   what was changed. This is what keeps successive loops from re-litigating the same fixed issues or
   silently reverting a prior fix.
7. **Repeat from step 1** until the screenshot matches the reference closely enough that remaining
   differences are trivial (sub-pixel, font-rendering) — then move to the next page/section/reference
   image, or stop if none remain.

## Rules for the loop

- Never declare a page "done" without an actual screenshot taken *after* the last edit. A plausible-looking
  diff is not verification.
- If three loops in a row make no visible progress on the same issue, stop and describe the blocker instead
  of continuing to guess — likely the reference is ambiguous, or the issue isn't actually visual (e.g. a
  data/state bug).
- Prefer small, single-purpose edits per loop over large rewrites — it keeps each screenshot diff
  attributable to one change.
- If no reference image exists yet for something being built, say so explicitly rather than inventing
  pixel-level details and presenting the result as "matching."

## Adding a new reference

Drop the image into `reference/` with a name describing the page/state and viewport it targets
(e.g. `reference/pricing-desktop.png`, `reference/nav-mobile-open.png`). The next loop will pick it up.
