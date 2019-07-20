# Webpack Caman

This is an example project showing how to include CamanJS in a web project.

The npm repository for caman brings in NodeJS dependencies (fibers, fs) which are not required for web target.

Using with webpack requires use of the import-loader to include the caman js files as web targets. 

Easier to work with caman.js files downloaded rather than the npm install in this instance.

standalone.html shows include of caman via script tag.
webpack config shows how to build the project into a dist folder

# Usage

## Install
* Clone repo
* npm install
* npm run build

## Run application
* npm run start

Web page should open in browser window (localhost:9000)

Click the button to load the Image. Subsequent clicks brighten the image using caman.
