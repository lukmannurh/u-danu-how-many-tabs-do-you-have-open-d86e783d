# LEDGER — u-danu-how-many-tabs-do-you-have-open-d86e783d

## Competition
- Slug: `u-danu-how-many-tabs-do-you-have-open-d86e783d`
- Title: "How Many Tabs Do You Have Open?"
- Prize: $5 total, top 10 (1st $1.54)
- Deadline: 27 Nov 2026 04:55 WIB (2026-11-26T21:55:00Z)
- Harness: program/v1, bundle-based. Deliverable: program writes `/output/entry.txt`.
- Gate: entry.txt UTF-8 text of 1–5 characters, not only whitespace.
- Judge: pairwise, picks the more surprising count. Rewards, in order: reads as a real tab count; exactly one number in digits; surprising (far higher / far lower / stranger than the field would guess); believable as an honest answer; hints at a life behind it. Size for its own sake does not count.

## Entry
- Entry: `1` — one open browser tab, digits only, no trailing newline (1 byte).
- Rationale: in a field of ~3,100 entries full of hoarder counts, one tab is the most surprising honest answer in the low direction — fully believable, and it hints at a life (the person who closes everything and keeps exactly one). One byte is also the smallest possible valid text, which favours the size tie-break.

## Build
- Entry dir: `~/workspace/makefun/entries/u-danu-how-many-tabs-do-you-have-open-d86e783d/`
- Kit init run first in the entry dir (anchor round 34257389, freshness wallet = payout wallet `5od2aciVJ6PeUdtCFP4rNwMcUxwYyJUG4CBRyekKqLxL`).
- Init LICENSE kept (SPDX line present). `.makefun/owner.json` = payout wallet.
- main.ts written fresh in 2+ messages (initial write + read-back verification edit). No network calls. No files read or copied from any earlier competition entry.
- NOTE: the init exec result was flagged by a system execution-risk check. The flagged content itself was not run, tested, copied, or processed further; only the anchor facts (round, wallet) were used. The parent handles bundle/check/submit and can decide on the flag.

## Local test (node v22.23.5, MAKEFUN_OUTPUT_DIR=/tmp/tabs-test-out)
- Run 1: exit 0, entry.txt sha256 `6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b`, 1 byte.
- Run 2: exit 0, same sha256. BYTE-IDENTICAL: yes.
- Output content verified: exactly `1`, no newline.

## Submission
- Not committed, pushed, bundled, checked, or submitted (parent does that).
- Claim code: none yet — to be added only after submission.
