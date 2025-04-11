# GitHub Pages Deployment Guide

This document provides instructions for deploying your game developer portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Basic knowledge of Git commands

## Deployment Steps

1. **Create a GitHub repository**
   - Go to [GitHub](https://github.com) and sign in to your account
   - Click on the "+" icon in the top right corner and select "New repository"
   - Name your repository `gamedev-portfolio` (or any name you prefer)
   - Make sure the repository is public if you want to use the free GitHub Pages
   - Click "Create repository"

2. **Initialize Git in your project (if not already done)**
   ```bash
   cd gamedev-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. **Connect your local repository to GitHub**
   ```bash
   git remote add origin https://github.com/your-username/gamedev-portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**
   - The project is already configured with the necessary scripts in package.json
   - Run the following command to deploy:
   ```bash
   npm run deploy
   ```
   or if you're using pnpm:
   ```bash
   pnpm run deploy
   ```

5. **Configure GitHub Pages in repository settings**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Ensure the source is set to "gh-pages branch"
   - Your site will be published at `https://your-username.github.io/gamedev-portfolio/`

## Important Configuration Notes

1. **Update homepage in package.json**
   - Before deploying, make sure to update the `homepage` field in package.json with your actual GitHub username:
   ```json
   "homepage": "https://your-username.github.io/gamedev-portfolio"
   ```

2. **Router Configuration**
   - The site uses React Router, which requires special configuration for GitHub Pages
   - The `basename` prop is already set in the Router component to handle GitHub Pages routing

## Troubleshooting

- If your styles are missing, check that all asset paths are relative
- If routes don't work, ensure the Router's basename matches your repository name
- If images don't appear, verify that image paths are correct relative to the build directory

## Updating Your Site

To update your site after making changes:

1. Make your changes to the code
2. Commit your changes: `git commit -am "Description of changes"`
3. Run the deploy command again: `npm run deploy` or `pnpm run deploy`
4. The changes will be automatically published to GitHub Pages

Your portfolio site should now be live at `https://your-username.github.io/gamedev-portfolio/`!
