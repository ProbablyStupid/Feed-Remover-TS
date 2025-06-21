@echo off

echo Copying Resources!

copy src\manifest.json dist\manifest.json
robocopy img dist\img

echo Building Typescript

npx esbuild src/content-script.ts --bundle --outfile=dist/content.js --target=es6 --sourcemap

echo Build finished!