# Chandan Gowda K S - React portfolio

A standalone React + TypeScript + Vite project. Includes portrait, local fonts,
typing animation, section reveals, pause/resume, mobile menu, toolkit tabs,
project filters and expandable details. No backend or API keys are required.

## Run locally
Install Node.js 22 LTS, then open a terminal in this folder:

```sh
npm install
npm run dev
```

Open the local address printed by Vite. Production check:

```sh
npm run build
npm run preview
```

`dist/` contains the ready-to-upload website. `npm ci` can replace `npm install`
for an exact install from the included package-lock.json.

## Vercel
1. Push this folder's contents to your own GitHub repository.
2. In Vercel, choose Add New > Project and import that repository.
3. Use framework preset Vite, root directory `.`, build command `npm run build`,
   and output directory `dist`. Choose Node.js 22 if asked.
4. Click Deploy. Add your custom domain in the project's Settings > Domains.

## Netlify
1. Push this folder's contents to your own GitHub repository.
2. In Netlify, add/import a project from that repository.
3. Use build command `npm run build`, publish directory `dist`, and Node.js 22.
4. Deploy. Alternatively, run the build locally and drag the whole `dist` folder
   into Netlify's manual deploy area. Do not upload `src` as the built website.

## GitHub Pages
1. Create a GitHub repository and push this folder's contents to its `main` branch.
   Include the hidden `.github/workflows/deploy.yml` folder and file.
2. Go to repository Settings > Pages. Under Build and deployment, choose
   GitHub Actions as Source.
3. Push a commit to `main`, or run Deploy portfolio to GitHub Pages manually in
   the Actions tab. Wait for the workflow to succeed; its deployment gives the URL.
4. `vite.config.ts` uses relative asset paths, so both a repository path and a
   custom domain work. There is no client-side router needing rewrite rules.

## Edit content
- `src/App.tsx`: name, biography, skills, project descriptions and links.
- `src/style.css`: colors, layout and animation.
- `public/images/portrait.jpg`: replace with your portrait, keeping the filename.
- `index.html`: page title, description and theme color.
- `public/documents/`: bundled original resume and Delta course certificate.

Email: chanduchess122@gmail.com
LinkedIn: https://www.linkedin.com/in/chandan-gowda-k-s/
PG Finder: https://pg-finder-15fd.onrender.com/listings/

The PG Finder URL reached Render's waking-up screen during verification, but
its listings did not finish loading. It may take time to start; check the app's
Render service if it continues to stay on that screen. This does not prevent
this portfolio from building or deploying.

The supplied resume and Apna College Delta (Full Stack Web Development) certificate
are bundled in `public/documents/`. Resume download buttons and the course
certificate link use relative asset paths and work on repository-based hosting.
The research paper is not supplied. The resume contains a research award
certificate link, but its document contents were not verified, so it is not
linked on the project card yet. Project artwork is labeled as illustrative concepts, not
screenshots of the apps. Email is a mailto link, not a server-backed contact form.

Deployment references:
- https://vercel.com/docs/frameworks/frontend/vite
- https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/
- https://vite.dev/guide/static-deploy.html

The portrait is personal content. Review the site before making it public.
