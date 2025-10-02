# megselvtonie.github.io

Dette er koden bak [megselvtonie.me](https://megselvtonie.me) – min personlige nettside laget med [Astro](https://astro.build/) og publisert på GitHub Pages.

## ✨ Hva nettsiden inneholder

- **Forside** med personlige tekster, eksperimenter og små komponenter (dato-tagger, besøkstellere osv.)
- **Kortspill-bibliotek** (`/spill`) med egne sider for hvert spill. Spillkortene rendres via `GameCard.astro` og har metadata (spillere, tid, vanskelighetsgrad, tags, anbefalt).
- **Blogg** (`/blog`) og poster skrevet i Markdown med eget layout.
- **WIP-siden** (`/wip`) som fungerer som testlab for komponenter jeg bygger.
- **Om-siden** med litt info om meg selv og hvorfor jeg koder denne siden.

## 🧩 Viktige komponenter

- `GameCard.astro` → viser spillkort med tittel, undertittel, cover, chips med metadata.
- `DateTag.astro` → viser publiseringsdatoer i norsk format (f.eks. "i går kl. 18:25", "søn 07 sep 18.25").
- `PageView.astro` → henter data fra [hitscounter.dev](https://hitscounter.dev) og viser antall besøk.
- `TimeCounter.astro` → teller hvor mye tid som har gått siden en bestemt dato (og sammenligner med hundeår, måneturer osv.).
- `Breadcrumb` (eksperimentert med, men endt opp med manuell løsning via `export const breadcrumb`).

## 🎨 Design og typografi

- Global typografi definert i `global.css` med `clamp()` for responsive størrelser.
- Heading-skala H1–H4 med justert line-height og spacing for bedre lesbarhet.
- Smal kolonne (`70ch`) for tekstinnhold for å øke lesbarhet.
- Navigasjon med hamburger på mobil og aktiv-link markering.
- Footer med sosiale lenker (Letterboxd, Instagram, GitHub) og e-post som genereres i JS.

## 🚀 Utvikling

### Lokalt

For å kjøre prosjektet lokalt:

```bash
npm install
npm run dev
```

📖 Commit-regler

Jeg prøver å følge Conventional Commits
:

feat: for nye funksjoner/innhold

fix: for feilrettinger

style: for justeringer i CSS eller typografi

refactor: for større omskrivinger

docs: for README eller dokumentasjon

chore: for småting, config, CI/CD
