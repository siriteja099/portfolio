# Siri Teja Gokarakonda — Portfolio

Next.js (static export) + TypeScript + Tailwind CSS. No backend, no paid services.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # outputs the static site to ./out
```

## Publish for free (GitHub Pages — recommended)
1. Create a **public** GitHub repo named `portfolio` and push this folder to the `main` branch.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Push any change; the workflow in `.github/workflows/deploy.yml` builds and publishes.
4. Your URL: `https://<your-github-username>.github.io/portfolio/`

### Alternatives (also free)
- **Vercel / Netlify / Cloudflare Pages:** import the repo, build command `npm run build`, output directory `out`. Do not set `NEXT_PUBLIC_BASE_PATH`. Set `NEXT_PUBLIC_SITE_URL` to your final URL (e.g. `https://siriteja.vercel.app`) so share previews, sitemap and canonical links are correct.

## Updating content
| What | Where |
|---|---|
| Name, title, intro, email, phone, LinkedIn, GitHub, summary | `lib/data.ts` → `profile` |
| Skills | `lib/data.ts` → `skillGroups` |
| Experience (add employer name here when you want it shown) | `lib/data.ts` → `experience` |
| Projects (add `link: "https://…"` support by editing `components/Projects.tsx`) | `lib/data.ts` → `projects` |
| Education / certifications | `lib/data.ts` → `education`, `certifications` |
| **Resume** | Replace `public/Siri_Teja_Gokarakonda_Resume.pdf` (keep the file name) |
| **Photos** | Replace `public/images/siri-hero.webp` (4:5, ~960×1200) and `siri-about.webp` (4:5, ~760×950) |
| Social preview image | `public/og.png` (1200×630) |
| Colours | CSS variables at the top of `app/globals.css` |

After editing, commit and push — the site redeploys automatically.

## Contact form
The site is static, so the form opens the visitor's email app with the message pre-filled. For in-page submissions, connect a free form service (e.g. Formspree) in `components/Contact.tsx`.
