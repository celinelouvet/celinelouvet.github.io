import { Datastore } from '@google-cloud/datastore';

import { KIND } from './kind';

export const purgeAll = async () => {
  console.log('Purging all survey results');

  const datastore = new Datastore();

  const query = datastore
    .createQuery(KIND)
    .filter('version', process.env.VERSION_NAME);

  const [surveyResults] = await datastore.runQuery(query);

  return datastore.delete(surveyResults.map((result) => result[datastore.KEY]));
};
