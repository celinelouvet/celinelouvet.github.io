import fs from 'fs';
import path from 'path';

const TARGET_VERSION = '1.22.19';
const filePath = path.join(import.meta.dirname, 'package.json');

const updateVersion = (packages: { engines: { yarn: string } }) => {
  packages.engines.yarn = TARGET_VERSION;

  return packages;
};

const writePackages = (packages: object) => {
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
