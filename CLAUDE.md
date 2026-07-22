# Learning-A.I.-Tools — GitHub workflow

This repo is **public** on GitHub (`JishnuKaushik/Learning-A.I.-Tools`). Treat every push as
permanent and world-readable.

## Privacy — check before every stage/commit

- Scan new/changed files for real name, student/roll ID, section, or other identifying info —
  including baked into HTML/JS/data, not just images. Replace with placeholder values (e.g.
  `STUDENT NAME`, `00XXX000`) rather than excluding the file, so the project still demos correctly.
- Screenshots or reference assets captured from a logged-in personal account (grades, fees,
  attendance, transactions, timetables tied to a real identity) must never be committed — add them
  to `.gitignore` instead.
- Secrets/credentials (`.env`, keys, tokens, API keys) are always gitignored, never committed.
- If it's unclear whether something is sensitive, ask before staging or pushing — don't decide
  unilaterally.

## Commit style

- One logical change per commit — don't bundle unrelated edits together.
- Never add Claude/AI as a co-author or in a commit trailer.
- Never use `--no-verify` or force-push without an explicit request.

## Before every push

- Review `git status` and the actual diff for anything unexpected — new untracked dirs, modified
  files that weren't intentional.
- Confirm with the user before running `git push` to this public remote.
