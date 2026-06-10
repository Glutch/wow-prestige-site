<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Lovely Stack project

This project was built with the **Lovely Stack** skill (`building-lovely-stack`).
Any future work must reuse the same skill — it defines the stack, file layout,
and server/client component boundaries.

Key conventions:
- Next.js App Router, Server Components by default; TypeScript only; `@/` alias
- Bun for all package management (never npm/yarn/pnpm)
- One concern per file — no megafiles

## Project specifics

- **Static content site** — no database, no auth, no AI. Don't add layers.
- **Class data is generated, never hand-edited.** `src/data/classes.json` comes
  from the addon repo (`../wow-prestige-classes`) via `bun run data`. The
  addon's `Data.lua` + `Trials/*.lua` are the single source of truth.
- **Item tooltips** (`src/data/items.ts`) hold verified Classic Era values —
  verify against classic.wowhead.com before editing; never guess stats.
- Icons: Wowhead CDN via `iconUrl()` in `src/lib/wow.ts`; hero art is
  hotlinked zamimg screenshots.
- Theme: dark stone + Ironforge gold, Cinzel display + Alegreya body, WoW
  quality colors as tokens in `globals.css`.
