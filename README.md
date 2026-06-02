# Luis Mario Bracamontes — Portfolio

Personal portfolio site built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theming**: next-themes (dark/light mode)
- **i18n**: Custom context-based EN/ES localization

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (auto-generates project media index) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run gen:media` | Regenerate `src/data/projectMedia.generated.ts` from `public/` assets |

## Project Media

Project images and videos live under `public/images/projects/<slug>/` and `public/videos/projects/<slug>/`. Run `npm run gen:media` (or just `npm run dev`) to regenerate the auto-generated media index after adding new assets.

## Structure

```
src/
├── app/          # Next.js pages and layout
├── components/
│   ├── layout/   # Navbar, Footer
│   ├── sections/ # Page sections (Hero, About, Skills, Projects, etc.)
│   └── ui/       # Reusable components (ProjectCard, etc.)
├── context/      # Language context
├── data/         # Projects data and generated media index
└── lib/          # Utilities
```
