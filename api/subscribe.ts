export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  if (!apiKey || !listId) {
    return res.status(500).json({ error: 'Klaviyo configuration is missing' });
  }

  const headers = {
    'Authorization': `Klaviyo-API-Key ${apiKey}`,
    'accept': 'application/vnd.api+json',
    'content-type': 'application/vnd.api+json',
    'revision': '2024-10-15',
  };

  try {
    // Step 1: Create or retrieve the profile
    const profileRes = await fetch('https://a.klaviyo.com/api/profiles/', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: { email },
        },
      }),
    });

    let profileId: string;

    if (profileRes.status === 201) {
      const profileData = await profileRes.json();
      profileId = profileData.data.id;
    } else if (profileRes.status === 409) {
      const conflictData = await profileRes.json();
      profileId = conflictData.errors?.[0]?.meta?.duplicate_profile_id;
      if (!profileId) {
        return res.status(500).json({ error: 'Profile conflict but no duplicate ID returned' });
      }
    } else {
      const errData = await profileRes.json().catch(() => ({}));
      const message = errData?.errors?.[0]?.detail || errData?.detail || 'Failed to create profile';
      return res.status(500).json({ error: message });
    }

    // Step 2: Subscribe the profile to the list
    const subscribeRes = await fetch(
      `https://a.klaviyo.com/api/lists/${listId}/relationships/profiles/`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          data: [{ type: 'profile', id: profileId }],
        }),
      }
    );

    // 204 = added, 409 = already in list — both are success from the user's perspective
    if (subscribeRes.status === 204 || subscribeRes.status === 409) {
      return res.status(200).json({ message: 'Subscribed successfully' });
    }

    const errData = await subscribeRes.json().catch(() => ({}));
    const message = errData?.errors?.[0]?.detail || errData?.detail || 'Failed to subscribe to list';
    return res.status(500).json({ error: message });

  } catch (error: any) {
    console.error('Klaviyo subscribe error:', error);
    return res.status(500).json({ error: error.message || 'Subscription failed' });
  }
}
