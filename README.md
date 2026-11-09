# Kaldershot Design — Premium portfolio starter

A responsive, static portfolio built with plain **HTML, CSS and JavaScript**. No build tools or dependencies required (other than optional Google Fonts).

## Preview locally

Open `index.html` in a browser. For the most accurate preview, use VS Code Live Server or run `python -m http.server 8000` from this directory and open `http://localhost:8000`.

## Add your actual portfolio images

Add these files (JPG recommended, 1800–2400 pixels wide; optimize to WebP/JPG ideally under 350 KB when possible):

- `assets/projects/greenhorizons.jpg`
- `assets/projects/jp-identity.jpg`
- `assets/projects/youngs.jpg`
- `assets/projects/holiday-card.jpg`
- `assets/projects/design-review.jpg`
- `assets/projects/giveback.jpg`
- `assets/portrait.jpg` (optional)

Every project already has a typographic fallback, so the site looks intentional even without the images. The starter deliberately **does not claim** unverified Instagram work or reuse copyrighted photos. Replace the artwork with your own project images.

## Update case studies

Open `script.js` and edit the `projects` object. Each project contains:

- `title`: display name
- `lead`: short project description
- `services`: areas of work
- `story`: design challenge and your contribution
- `outcome`: impact, lessons, or measured results
- `image`: path to hero image

For premium leads, add **3–6 strong images per project**, your role, challenge, approach and real outcomes. The supplied modal is a starter with one hero image; you can expand its HTML/JS into full project pages as your content grows.

## Edit the site

- `index.html`: headlines, services, links, projects, contact copy.
- `styles.css`: colours at the top under `:root`, layout and design system.
- `script.js`: project case studies, filtering, menu, modal.

Search the HTML for `kevin.mccallum.1.km@gmail.com` and replace it if you prefer a professional domain email. Make sure case-study descriptions are accurate and that you have permission to display client work.

## Publish on GitHub Pages

1. Create a new public GitHub repository (for example `kaldershot-portfolio`).
2. Upload **the contents of this folder** into the repository root (`index.html` must be at root).
3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**. Save.
5. Visit the GitHub Pages URL shown in Settings → Pages after it deploys.
6. Optionally add a custom domain in Pages and update your domain DNS records using GitHub's instructions.

## Before launch

- Replace placeholder typographic project artwork with approved portfolio imagery.
- Confirm all project descriptions, scope and measured results.
- Replace the generic `KM` portrait treatment with your own photograph if wanted.
- Add a favicon and share preview (`og:image`) if available.
- Test on desktop and mobile, including filtering, modals and all links.
- Consider a custom domain and domain email for a higher-end presentation.

**Note:** The referenced Adobe Portfolio and Instagram pages did not permit reliable direct retrieval in this session. Project categories are informed by previously discussed work and must be reviewed before publishing.
