import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'NILIUM Fragrance Candle',
                description: 'Quiet luxury soy wax candle',
              },
              unit_amount: 5000, // $50.00
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.VITE_SITE_URL}/success`,
        cancel_url: `${process.env.VITE_SITE_URL}/cancel`,
      });

      res.status(200).json({ id: session.id });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}