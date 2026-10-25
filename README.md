# Jawed Alam — Portfolio

A personal portfolio built with Vite and deployed to GitHub Pages.

The site includes a **Projects & Writing** page, a dedicated page with the complete competitive-coding article, and a home-page résumé download. The résumé PDF is served from `public/Jawed-Alam-Resume.pdf`.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Vite uses `/` as its base path because this repository is published as the `zjaweds.github.io` user site.

Technology logos used in the animated orbit are bundled locally in `public/icons/`, so they do not depend on a third-party icon server at runtime.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site when changes are pushed to `master`, or when manually started from the Actions tab. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

The contact section links to [GitHub](https://github.com/zjaweds) and [LinkedIn](https://www.linkedin.com/in/zjaweds).
