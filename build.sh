#!/bin/bash

set -e

npm install

echo "Copying resources"

cp src/manifest.json dist/manifest.json
cp src/popup.html dist/popup.html
cp src/popup.js dist/popup.js
cp -r img dist/img

echo "Building Typescript"

npx esbuild src/content-script.ts --bundle --outfile=dist/content.js --target=es6 --sourcemap

echo "Build finished!"