/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const fs = require('fs');
const path = require('path');

const TARGET_VERSION = '1.22.19';
const filePath = path.join(__dirname, 'package.json');

const updateVersion = (packages) => {
  packages.engines.yarn = TARGET_VERSION;

  return packages;
};

const writePackages = (packages) => {
  const content = JSON.stringify(packages, null, 2);
  return fs.promises.writeFile(filePath, content, 'utf8');
};

const forceYarnVersion = () => {
  fs.promises
    .readFile(filePath, 'utf8')
    .then((content) => {
      const packages = JSON.parse(content);
      const newPackages = updateVersion(packages);
      return writePackages(newPackages);
    })
    .then(() => {
      console.log(`Yarn version is forced to ${TARGET_VERSION}`);
    })
    .catch((err) => console.error(`Couldn't force yarn version`, err));
};

forceYarnVersion();
