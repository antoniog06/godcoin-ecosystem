#!/bin/bash

echo "🔁 Syncing latest live website into native app..."

# Step 1: Copy docs to web
cp -r docs/* web/
echo "✅ Copied docs/ to web/"

# Step 2: Sync with Capacitor
npx cap sync
echo "✅ Capacitor sync complete"

# Step 3: Push live website to GitHub Pages
echo "🌍 Deploying latest changes to GitHub Pages..."

git add docs/
git commit -m "Deploy latest live site + sync to native app"
git push origin main

echo "✅ GitHub Pages updated!"

echo "🚀 All done! Native app + live site now in sync."
