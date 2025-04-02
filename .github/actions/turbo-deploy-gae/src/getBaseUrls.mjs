//@ts-check

/** @type {(content: string, version: string) => {app: string, api: string}} */
export const getBaseUrls = (env, version) => {
  const baseUrl =
    env === 'prod'
      ? 'https://celine.louvet.me'
      : `https://${version}-dot-celinelouvet-cv.ew.r.appspot.com`;
  const apiBaseUrl =
    env === 'prod'
      ? `https://api-dot-celinelouvet-cv.ew.r.appspot.com`
      : `https://${version}-dot-api-dot-celinelouvet-cv.ew.r.appspot.com`;

  return {
    app: baseUrl,
    api: apiBaseUrl,
  };
};
