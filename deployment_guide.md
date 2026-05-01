# Sunberg Deployment & Version Control Guide

This guide outlines the process for managing and publishing the Sunberg project using Git and GitHub Pages.

## 🚀 Live Site
The project is published at:
**[https://Alexandr123123123.github.io/sunberg/](https://Alexandr123123123.github.io/sunberg/)**

---

## 🛠 Managing Changes (Commits)

To save and sync your code changes, follow these steps in your terminal:

1. **Stage your changes**:
   ```bash
   git add .
   ```
   *This prepares all modified files for the next commit.*

2. **Commit your changes**:
   ```bash
   git commit -m "Describe what you changed"
   ```
   *This saves a snapshot of your work with a clear description.*

3. **Push to GitHub**:
   ```bash
   git push
   ```
   *This syncs your local commits with the remote repository on GitHub.*

---

## 🌐 Publishing New Versions

When you are ready to update the live website, run the following command:

```bash
npm run deploy
```

### What this command does:
1. **Builds the project**: It runs `npm run build` to create an optimized production version of your site in the `dist` folder.
2. **Deploys to GitHub Pages**: It uses the `gh-pages` package to push the contents of the `dist` folder to a special branch named `gh-pages` in your repository.
3. **Goes Live**: GitHub Pages automatically detects the update and refreshes your live site (usually takes 1-2 minutes).

---

## 📝 Important Notes
- **Vite Config**: Ensure `base: '/sunberg/'` remains in your `vite.config.js` for proper asset paths.
- **Router**: The project currently uses `BrowserRouter`. If you experience 404 errors on page refresh, consider switching to `HashRouter` in `main.jsx`.
