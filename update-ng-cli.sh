#!/bin/sh

npm uninstall angular-cli -g
npm cache clean
npm install angular-cli@latest -g

rm -rf node_modules dist tmp
npm install angular-cli@latest --save-dev

