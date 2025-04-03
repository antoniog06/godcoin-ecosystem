#!/bin/bash

echo "CLEANING AND DEPLOYING..."

# 1. Clean docs folder fully and recreate it
rm -rf docs
mkdir docs

# 2. Copy content from web to docs/
cp -r web/* docs/

# 3. Add changes
git add docs/
git commit -m "Deploy updated GODCOIN site to GitHub Pages"
git push origin main

echo "✅ Deployment complete! Visit:"
echo "https://antoniog06.github.io/godcoin-ecosystem/"
