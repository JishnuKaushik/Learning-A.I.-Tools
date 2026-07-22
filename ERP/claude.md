# NCU ERP Project

An ERP (Enrollment/campus admin) web app for The NorthCap University (NCU), built and refined through an
iterative screenshot-compare-fix loop, rather than a one-shot build.

## Two reference sources

This project pulls from two different references, and they answer different questions — don't mix them up:

- `reference/ncu-brand/` — screenshots of the **current live NCU ERP** (mycampus.ncuindia.edu: Dashboard,
  Attendance Summary, Faculty Feedback, Admit Card, My Exams, Minor Test Marks, Results, Fee Payment,
  Transaction Summary), plus a `style` file with the live Bootstrap CSS variables it uses (primary blue
  `#0d6efd`, grays, fonts, border-radius, shadows, etc.). This governs **style and the current baseline**:
  NCU's actual color palette, fonts, logo, header/sidebar treatment, and what modules/data already exist
  today. The rebuild should look like it belongs to NCU and should account for the real modules/fields
  visible here (course codes, attendance columns, fee heads, etc.) rather than inventing generic ones.
- `reference/erp-target/` — image(s) of a different, similar ERP system to model the **redesign** on. This
  governs **structure**: page layout, navigation pattern, dashboard/widget composition, table and form
  design, overall UX quality bar to aim for.

When the two conflict (e.g. the target ERP uses a sidebar color NCU's current site never uses), style wins
from `ncu-brand` and structure/layout wins from `erp-target` — reskin the target's layout in NCU's actual
visual language, don't copy the target's colors wholesale.

If a needed reference image hasn't been shared yet, say so explicitly and ask, rather than guessing at
layout or brand details that matter.

## Scope

**Student portal only.** The current NCU ERP is entirely student-facing — there's no admin/teacher/parent
data in `ncu-brand/` to redesign from. The `erp-target` (PreSkool) reference includes Admin, Teacher, and
Parent dashboards too, but those are out of scope here — use them only as extra style/pattern inspiration
where a student-portal page needs a widget type PreSkool's Student Dashboard doesn't otherwise cover.
Don't build Admin/Teacher/Parent pages.

## Page inventory (current → rebuild)

Nine pages, each rebuilt in PreSkool's richer visual language but keeping NCU's actual data/fields:

| # | Current page (`ncu-brand`) | Structural model (`erp-target`) | Notes |
|---|---|---|---|
| 1 | Dashboard (timetable + backlog courses) | `student-dashboard.html` | Landing page; build first — sets sidebar/header/card language for all others |
| 2 | Attendance Summary | `student-dashboard.html` attendance widget + `student-details.html` tables | Currently an empty table shell; needs real present/absent/LOA/on-duty columns |
| 3 | Faculty Feedback | `students.html` / `teacher-grid.html` list pattern | Table of course/faculty/feedback-status links |
| 4 | Admit Card | (no direct PreSkool equivalent — improvise a document/card view) | Currently shows a "WARNING" toast + empty body in the current site |
| 5 | My Exams | `student-dashboard.html` "Schedules"/exams widget | Currently "0 exams scheduled" empty state |
| 6 | Minor Test Marks (PMT) | `student-dashboard.html` "Exam Result" bar chart + `teacher-dashboard.html` "Student Marks" table | Course/test/max/obtained marks table |
| 7 | Results | `parent-dashboard.html` "Exam Result" table | Session/semester → Download DGS links |
| 8 | Fee Payment | (no direct PreSkool page — improvise using its card/table style) | Fee head breakdown table + payment gateway panel (Canara Bank) |
| 9 | Transaction Summary | `parent-dashboard.html` "Fees Reminder" card style, adapted into a list | Downloadable receipts + colored payment history cards |

## Stack

Plain HTML/CSS/JS, no build step — one HTML file per page (`dashboard.html`, `attendance.html`,
`feedback.html`, `admit-card.html`, `exams.html`, `minor-marks.html`, `results.html`, `fees.html`,
`transactions.html`), sharing `styles.css` and `script.js`. Sidebar/header markup is duplicated across
pages rather than templated, since there's no build step.

Charts (donut/line/bar, seen throughout `erp-target`) use **Chart.js via CDN** `<script>` tag — still no
bundler/build step, just an extra script include. The NCU logo is recreated in HTML/CSS (wordmark +
CSS-drawn arc), not extracted from the reference screenshots as an image asset.

## Project layout

- `dashboard.html`, `attendance.html`, `feedback.html`, `admit-card.html`, `exams.html`, `minor-marks.html`,
  `results.html`, `fees.html`, `transactions.html`, `styles.css`, `script.js` — the actual app
- `reference/ncu-brand/` — current live NCU ERP screenshots + style (brand/baseline reference)
- `reference/erp-target/` — PreSkool template screenshots + style (structure/redesign reference)
- `.progress.md` — running log of what's been tried each loop and what's still off (create on first loop)

## The build loop

This project is built by repeating the following loop, not by writing everything once:

1. **Read the target(s).** Look at the relevant images in `reference/ncu-brand/` and/or
   `reference/erp-target/` for the page/section/module being worked on. Identify what's a style question
   (→ ncu-brand) vs. a structure question (→ erp-target).
2. **List the tasks.** Break the page/module into a short todo list of concrete changes needed to move
   toward both references.
3. **Implement or adjust** the smallest change that should move the page closer to the references.
4. **Run it and take a screenshot.** Use the `run` skill to launch the app and capture a screenshot of
   the current state. Don't skip this — a code change that "should" match the reference is not the same
   as one that's been visually verified.
5. **Compare screenshot to both references.** Check layout/spacing and module structure against
   `erp-target`, and colors/typography/branding against `ncu-brand`. Also check responsive behavior and any
   interactive states the references imply (hover, focus, error, active nav item, etc.).
6. **Check for errors.** Look at console/network errors and broken rendering in the same pass — fix these
   before or alongside visual differences, since a JS error can itself cause the visual mismatch.
7. **Log the diff.** Append a short entry to `.progress.md`: what was compared, what matched, what didn't,
   what was changed. This is what keeps successive loops from re-litigating the same fixed issues or
   silently reverting a prior fix.
8. **Write the next todo list** based on the comparison — what's still off, in priority order.
9. **Repeat from step 3** until the screenshot matches both references closely enough that remaining
   differences are trivial — then move to the next page/module, or stop if none remain.

## Rules for the loop

- Never declare a page/module "done" without an actual screenshot taken *after* the last edit. A
  plausible-looking diff is not verification.
- If three loops in a row make no visible progress on the same issue, stop and describe the blocker instead
  of continuing to guess — likely a reference is ambiguous, or the issue isn't actually visual (e.g. a
  data/state bug).
- Prefer small, single-purpose edits per loop over large rewrites — it keeps each screenshot diff
  attributable to one change.
- If no reference image exists yet for something being built, say so explicitly rather than inventing
  pixel-level details and presenting the result as "matching."

## Adding a new reference

Drop NCU brand/style images into `reference/ncu-brand/` and ERP structure/layout images into
`reference/erp-target/`, named for the page/state they show (e.g. `reference/ncu-brand/home-header.png`,
`reference/erp-target/dashboard-desktop.png`). The next loop will pick them up.
