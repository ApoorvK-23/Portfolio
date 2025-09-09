# Apoorv — Data & Business Analytics Portfolio (Next.js + Tailwind)

Professional portfolio with filters, project cards, and case-study pages.

## Quick start
```bash
pnpm i    # or npm i / yarn
pnpm dev  # or npm run dev
```
Then visit http://localhost:3000

## Deploy
1) Push to GitHub.
2) Import into Vercel → assign custom domain (optional).

## Add or edit projects
Edit `data/projects.ts` — add a new object with:
```ts
{
  slug: "new-slug",
  title: "Project title",
  description: "Short 1–2 line summary",
  impact: "Measurable result",
  year: 2025,
  tags: ["Python","ETL"],
  image: "https://...", // or /your-local-image.png in /public
  links: { live: "https://...", repo: "https://..." },
  caseStudy: {
    problem: "What problem did you solve?",
    approach: "How did you solve it? Stack, methods.",
    outcome: "What happened? Metrics.",
    highlights: ["Point A","Point B"]
  }
}
```
The `/projects/[slug]` page is generated automatically.

## Notes
- Design: Tailwind only (no external UI kit). Clean, rounded cards, minimal ink color palette.
- Images: remote images allowed from Unsplash; add other hosts in `next.config.js`.- SEO: basic metadata in `app/layout.tsx`. Add OG images later if needed.
