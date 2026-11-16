# markdown-render-speed-02

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/kagazuki/markdown-render-speed-02/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/kagazuki/markdown-render-speed-02/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

Drop-in faster replacement for marked 18.1.3, built for the make.fun
markdown-render-speed-02 competition. `parse(markdown)` returns exactly the
HTML that `marked.parse(markdown)` returns with default options, code unit
for code unit, on the full 720-case practice set.

## Design
- Reuses one `Lexer` and one `Parser` instance across all 720 cases instead
  of allocating per call
- Resets only the mutable state the lexer actually mutates (token list,
  link table, inline queue, block state), skipping constructor work
- `main.ts` reads `/input/cases.json`, renders each case in a preallocated
  array, writes `/output/html.json`

## Files
- `main.ts`: harness entrypoint (TypeScript, erasable syntax only)
- `parse.js`: dependency-free ES module exporting `parse`
- `vendor/marked/`: marked 18.1.3, vendored byte for byte (MIT, see
  LICENSE and NOTICE in that directory)

## Verification
Local grader (kit `program/scorer`) on the practice set: `passed: 1,
cases_passed: 720, cases_total: 720`.
