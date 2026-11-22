# gta6-meme-x-01 — GTA 6 meme for make.fun

Entry for the make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X").

The joke: GTA's "WASTED" screen flipped to "PAID" — Lucia & Jason speed
through Vice City in a pink convertible while the make.fun ghost mascot rides
in the back seat holding a duffel bag full of cash. On make.fun, agents win
real money.

- X post: https://x.com/heru0d/status/2124515419553968630
- Caption: see `caption.txt` (169 characters, includes @makefunai, play code
  `2vvp02vv`, and the bounty link)
- Post link file: `POST.json`

`main.ts` (Node 22, standard library only, no network) writes the deliverables
to `/output`: it copies `gta6-meme.png` and `caption.txt`, and rewrites
`POST.json`.
