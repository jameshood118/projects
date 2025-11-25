#!/usr/bin/env sh

# abort on errors
set -e

# build
# Vite builds to the 'dist' folder by default
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# Note: Vite projects often use 'main' instead of 'master' for the default branch.
# Verify your default branch name if the push fails.
git push -f git@github.com:jameshood118/projects.git main:gh-pages

cd -