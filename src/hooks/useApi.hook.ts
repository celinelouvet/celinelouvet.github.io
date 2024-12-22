export const useApi = () => {
  return {
    get: async (path: string) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`, {
        method: 'GET',
        headers: { 'Accepted-Type': 'application/json' },
        cache: 'no-store',
      });
    },

    post: async (path: string, body: Record<string, unknown>) => {
      return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        cache: 'no-store',
      });
    },
  };
};
