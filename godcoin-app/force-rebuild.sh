#!/bin/bash

echo "⚙️ Forcing GitHub Pages rebuild..."

# Add a harmless HTML comment with timestamp to docs/index.html
echo "<!-- rebuild triggered on $(date) -->" >> docs/index.html

# Add, commit, and push the change
git add docs/index.html
git commit -m "Force GitHub Pages rebuild with timestamp"
git push origin main

echo "✅ Rebuild triggered! Check your site shortly at:"
echo "https://antoniog06.github.io/godcoin-ecosystem/"
