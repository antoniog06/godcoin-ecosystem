#!/bin/bash

echo "🔄 Syncing web/index.html → docs/index.html"

cp web/index.html docs/index.html

git add docs/index.html
git commit -m "Sync web changes to docs for live deployment"
git push origin main

echo "✅ Synced and pushed to GitHub Pages!"
echo "🌐 Visit: https://antoniog06.github.io/godcoin-ecosystem/?nocache=1"
