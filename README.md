# Portfolio

A modern React portfolio application built with Vite, TypeScript, and TailwindCSS.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Here's how to set it up:

### Automatic Deployment (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site when you push to main

3. **Access your site**:
   Your site will be available at: `https://[username].github.io/Portfolio/`

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
- `server/` - Express backend (not used in GitHub Pages deployment)
- `shared/` - Shared TypeScript types
- `public/` - Static assets

### Configuration Files

- `vite.config.ts` - Main Vite configuration for development
- `vite.config.pages.ts` - GitHub Pages specific configuration
- `.github/workflows/deploy.yml` - GitHub Actions deployment workflow

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Radix UI
- **Routing**: React Router 6
- **Deployment**: GitHub Pages, GitHub Actions