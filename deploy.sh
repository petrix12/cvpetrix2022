#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# Vía SSH
# git push -f git@github.com:petrix12/cvpetrix2022.git master:gh-pages

git push -f https://github.com/petrix12/cvpetrix2022.git master:gh-pages

cd -