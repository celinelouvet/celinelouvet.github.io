export const log = (message: string, metadata: Record<string, string>) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/logger`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, metadata }),
    cache: 'no-store',
  }).catch((res) => console.log('Error logging: ', res));
