# Keren Setton

Built with [Astro](https://astro.build).

## Getting started

```bash
npm install
npm run dev
```

## Content management

Run `npm run cms` to open the admin panel at `http://localhost:4321/admin`.
Edit the artist name, bio, exhibitions, press, and projects there — no code needed.

For production, enable **Netlify Identity** and **Git Gateway** in your Netlify
dashboard, then visit `/admin` on the live site to log in.

## Commands

| Command           | Action                                        |
|------------------|-----------------------------------------------|
| `npm run dev`   | Start dev server at localhost:4321            |
| `npm run cms`   | Start CMS + dev server (opens /admin)         |
| `npm run build` | Build to `dist/`                            |
| `npm run preview` | Preview the production build               |

## Deploying

Run `npm run build` then connect the repo to Netlify or Vercel.
