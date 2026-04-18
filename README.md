# Portfolio

A modern React portfolio application built with Vite, TypeScript, and TailwindCSS.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Here's how to set it up:

### Enable GitHub Pages

1. Push the repo to GitHub.
2. In GitHub repo settings → **Pages**:
   - **Build and deployment**: select **Deploy from a branch**
   - **Branch**: select `gh-pages` / `(root)`
3. Your site will be available at: `https://[username].github.io/Portfolio/`

### Manual Deployment

If you prefer to deploy manually:

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Install gh-pages**:
   ```bash
   pnpm add -D gh-pages
   ```

3. **Deploy**:
   ```bash
   pnpm run deploy
   ```

### Local Development

To run the project locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The development server will run on `http://localhost:8080`

### Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run build:github-pages` - Build specifically for GitHub Pages
- `pnpm run deploy` - Build and deploy to GitHub Pages
- `pnpm run preview` - Preview production build locally

### Project Structure

- `client/` - React frontend application
- `public/` - Static assets

### Configuration Files

- `vite.config.ts` - Main Vite configuration for development
- `vite.config.pages.ts` - GitHub Pages specific configuration

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Radix UI
- **Routing**: React Router 6
- **Deployment**: GitHub Pages, GitHub Actions