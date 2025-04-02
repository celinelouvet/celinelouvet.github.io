import * as React from 'react';

export const useApi = () => {
  const get = React.useMemo(
    () => async (path: string) =>
      fetch(`${__API_BASE_URL__}${path}`, {
        method: 'GET',
        headers: { 'Accepted-Type': 'application/json' },
        cache: 'no-store',
      }),
    [],
  );

  const post = React.useMemo(
    () => async (path: string, body: Record<string, unknown>) =>
      fetch(`${__API_BASE_URL__}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        cache: 'no-store',
      }),
    [],
  );
  return React.useMemo(() => ({ get, post }), [get, post]);
};
