@echo off

if not exist dist mkdir dist

echo Copying Resources!

copy src\manifest.json dist\manifest.json
copy src\popup.html dist\popup.html
copy src\popup.js dist\popup.js
robocopy img dist\img

echo Building Typescript

npx esbuild src/content-script.ts --bundle --outfile=dist/content.js --target=es6 --sourcemap

echo Build finished!