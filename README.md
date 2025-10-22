# Next.js GitHub Pages with shadcn/ui Sidebar

This is a [Next.js](https://nextjs.org) project configured for GitHub Pages deployment with a fully-featured shadcn/ui sidebar.

## Features

- ✅ Next.js 15 with TypeScript
- ✅ Tailwind CSS v4
- ✅ shadcn/ui components
- ✅ Collapsible sidebar with expandable menus
- ✅ Mobile responsive design
- ✅ Static export for GitHub Pages
- ✅ Automated deployment via GitHub Actions

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the static site:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages via GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

To enable GitHub Pages:
1. Go to your repository settings
2. Navigate to Pages
3. Set the source to "GitHub Actions"

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - React components including the sidebar
- `components/ui/` - shadcn/ui components
- `lib/` - Utility functions
- `public/` - Static assets

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
