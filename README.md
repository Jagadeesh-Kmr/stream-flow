Project structure
my-streaming-dashboard/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx            # Homepage (Server Component)
│  ├─ globals.css
│  ├─ the-movie/
│  │  └─ [id]/
│  │     └─ page.tsx      # Dynamic detail page (Server Component)
│  └─ components/
│     ├─ Header.tsx       # Client Component (navigation)
│     ├─ HeroBanner.tsx   # Server or Client as needed
│     ├─ MovieRow.tsx     # Client Component (horizontal scroll)
│     └─ MovieCard.tsx    # Client Component for each poster
├─ public/
│  └─ favicon.ico
├─ types/
│  └─ movie.ts            # TypeScript interfaces
├─ .env.local
├─ next.config.js
├─ package.json
├─ tailwind.config.js
├─ README.md
└─ AI_Report.md
