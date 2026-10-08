# Swapnil Devkate Portfolio — Next.js

A modular, responsive, dark portfolio built with Next.js 16.4, React 19.3 and Tailwind CSS 4.

## Structure

```text
app/
  globals.css
  layout.jsx
  page.jsx
  robots.js
  sitemap.js
components/
  ContactLink.jsx
  HomeSection.jsx
  Navbar.jsx
  ProjectsSection.jsx
  ReachOutSection.jsx
  SectionHeading.jsx
  TechnologiesSection.jsx
  icons.jsx
data/
  site.js
public/
  favicon.svg
  images/profile-placeholder.svg
  Swapnil_Devkate_Resume.pdf
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## SEO deployment setting

Set this environment variable to the exact final public URL of the portfolio before deploying:

```text
NEXT_PUBLIC_SITE_URL=https://your-final-domain.example
```

The value is used for canonical URLs, Open Graph URLs, Person/ProfilePage JSON-LD, sitemap.xml and robots.txt.

## Profile photo

Replace `public/images/profile-placeholder.svg` with a real profile photo named `profile.jpg` once the final photo is selected, and update the profile image path in `app/page.jsx` if needed.
