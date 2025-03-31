/* eslint-disable no-undef */

const ACCEPTED_ENVS = ['prod', 'staging'];

/** @type {() => string} */
export const readEnvArg = () => {
  const envArg = process.argv.find((arg) => arg.startsWith('--env='));
  const env = Boolean(envArg) ? envArg.split('=')[1] : undefined;

  if (env === undefined) {
    throw new Error(`Environment is not provided`);
  }
  if (!ACCEPTED_ENVS.includes(env)) {
    throw new Error(`Unknown environment: ${env}`);
  }

  console.log(`\tEnvironment: ${env}`);
  return env;
};

/** @type {() => string} */
export const readAppVersionArg = () => {
  const versionArg = process.argv.find((arg) => arg.startsWith('--version='));
  const version = Boolean(versionArg) ? versionArg.split('=')[1] : undefined;

  if (version === undefined) {
    throw new Error(`Unknown version: ${version}`);
  }

  console.log(`\tVersion: ${version}`);
  return version;
};

/** @type {() => string} */
export const readServiceArg = () => {
  const nameArg = process.argv.find((arg) => arg.startsWith('--service='));
  const name = Boolean(nameArg) ? nameArg.split('=')[1] : 'default';

  console.log(`\tVersion: ${name}`);
  return name;
};

/** @type {() => string} */
export const readRootFolderArg = () => {
  const rootFolderArg = process.argv.find((arg) => arg.startsWith('--root='));
  const rootFolder = Boolean(rootFolderArg)
    ? rootFolderArg.split('=')[1]
    : undefined;

  if (rootFolder === undefined) {
    throw new Error(`Unknown root folder: ${rootFolder}`);
  }

  console.log(`\tRoot folder: ${rootFolder}`);
  return rootFolder;
};

/** @type {() => string} */
export const readDistFolderArg = () => {
  const distFolderArg = process.argv.find((arg) => arg.startsWith('--dist='));
  const distFolder = Boolean(distFolderArg)
    ? distFolderArg.split('=')[1]
    : undefined;

  if (distFolder === undefined) {
    throw new Error(`Unknown dist folder: ${distFolder}`);
  }

  console.log(`\tDist folder: ${distFolder}`);
  return distFolder;
};

/** @type {() => string} */
export const readTestUrlArg = () => {
  const testUrlArg = process.argv.find((arg) => arg.startsWith('--testUrl='));
  const testUrl = Boolean(testUrlArg) ? testUrlArg.split('=')[1] : undefined;

  if (testUrl === undefined) {
    throw new Error(`Unknown url: ${testUrl}`);
  }

  console.log(`\tTest URL: ${testUrl}`);
  return testUrl;
};
