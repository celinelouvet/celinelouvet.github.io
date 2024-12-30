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
export const readFolderArg = () => {
  const folderArg = process.argv.find((arg) => arg.startsWith('--folder='));
  const folder = Boolean(folderArg) ? folderArg.split('=')[1] : undefined;

  if (folder === undefined) {
    throw new Error(`Unknown folder: ${folder}`);
  }

  console.log(`\tFolder: ${folder}`);
  return folder;
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
