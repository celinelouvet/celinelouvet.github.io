//@ts-check

import { readTestUrlArg } from './readArgs.mjs';

const ACCEPTED_STATUS_CODES = [200, 204];

/** @type {(url: string) => Promise<void>} */
const testDeployment = async (url) => {
  const { status } = await fetch(url);

  if (!ACCEPTED_STATUS_CODES.includes(status)) {
    throw new Error(`Request failed: status code is ${status}`);
  }

  console.log(`\t→ Status is ${status}`);
};

/** @type {() => Promise<void>} */
const run = async () => {
  const testUrl = readTestUrlArg();

  await testDeployment(testUrl);
};

run().catch((error) => {
  console.error(`ERROR -`, error.message);
  process.exit(1);
});
