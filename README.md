# 🎬 Streaming App (Next.js 14 + OMDb API)

A modern Netflix-style streaming dashboard built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, and **OMDb API**.  
The app features a Hero Banner, multiple movie rows, dynamic movie detail pages, and a live search system with instant filtering.

🚀 **Live Demo:** https://your-vercel-app-link.vercel.app  
📦 **Tech Stack:** Next.js 14, React, TypeScript, Tailwind, OMDb API

---

## 🔥 Features

### 🎥 Hero Banner
- Displays a featured movie with a cinematic design  
- Smooth gradient overlay  
- Quick access to details  

### 🎞 Multiple Movie Rows
- Batman Collection  
- Avengers Collection  
- Comedy  
- Horror  
- Horizontal scroll with animations  

### 🔍 Live Search Bar
- Search movies in real-time  
- Debounced search  
- Displays results instantly  
- Uses secure API Route backend  

### 📝 Movie Detail Page
- Poster + Plot  
- Release date, Genre, Rating  
- Clean & professional UI  

### 🖼 Clean UI / UX
- Tailwind-based Netflix theme  
- Professional design  
- Fully responsive  
- Smooth animations  

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **OMDb API**
- **React Icons**
- **Vercel Deployment**

---


## Project structure

    streaming-app/
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



---

## 🔧 Installation & Setup

### 1. Clone the repo

```bash
    git clone https://github.com/<your-username>/streaming-app.git
    cd streaming-app


### 2. Install dependencies
npm install


or

pnpm install

### 3. Create .env.local
OMDB_API_KEY=your_api_key_here

▶️ Run the project
npm run dev


App runs at:

http://localhost:3000

☁️ Deployment (Vercel)

This project is fully deployable via Vercel:

Push your code to GitHub

Go to Vercel → New Project

Select repo

Add environment variable:
OMDB_API_KEY=your_key

🤖 AI Tools Used

ChatGPT (architecture guidance, debugging, and UI improvements)

Read explanation inside AI_Report.md

✨ Author

Jagadeesh Kumar
Frontend / Full-Stack Developer
Portfolio: https://vercel.com/jagadeesh-kmrs-projects/jagadeesh-portfolio-web


---

# 🎉 README Ready!

If you'd like, I can also generate:

- **AI_Report.md**  
- **License file**  
- **Better project description for LinkedIn**  
- **Tags for your GitHub repo**  

Just tell me what you need!

