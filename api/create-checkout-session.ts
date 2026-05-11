import Stripe from 'stripe';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return res.status(500).json({ error: 'Stripe is not configured' });
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' });

  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'No items provided for checkout' });
    }

    const line_items = items.map((item: any) => {
      const currency = (item.currency || 'chf').toLowerCase();
      const price = Number(item.price);
      const quantity = Number(item.quantity) || 1;

      if (!item.name || !price || price <= 0) {
        throw new Error('Invalid item data');
      }

      return {
        price_data: {
          currency,
          product_data: {
            name: item.name,
            description: item.description || 'NILIUM product',
          },
          unit_amount: Math.round(price * 100),
        },
        quantity,
      };
    });

    const baseUrl = process.env.VITE_SITE_URL || 'http://localhost:5173';
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      shipping_address_collection: {
        allowed_countries: ['CH', 'DE', 'AT', 'FR', 'IT', 'GB'],
      },
      phone_number_collection: { enabled: true },
    });

    res.status(200).json({ url: session.url, id: session.id });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    res.status(500).json({ error: err.message || 'Unable to create checkout session' });
  }
}
