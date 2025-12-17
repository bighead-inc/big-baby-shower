#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output dir
cd dist
cp index.html 404.html

echo 'rios.baby' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:bighead-inc/big-baby-shower.git main:gh-pages

cd -
