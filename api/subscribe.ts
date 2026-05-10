export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { email } = req.body;
  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  if (!apiKey || !listId) {
    return res.status(500).json({ error: 'Klaviyo configuration is missing' });
  }

  try {
    const response = await fetch(
      `https://a.klaviyo.com/api/v2/list/${listId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data?.detail || data?.error || 'Subscription failed' });
    }

    return res.status(200).json({ message: 'Subscribed successfully' });
  } catch (error: any) {
    console.error('Klaviyo subscribe error:', error);
    return res.status(500).json({ error: error.message || 'Subscription failed' });
  }
}
