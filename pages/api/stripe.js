// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require('stripe')(
  'sk_test_51IVEgYEPejRluWxLQtuVRwiUkGJHmztuubzqjf6bPc0SJ8Q7JShj3KxHB4DQjaiuAfO9eCnn4ZK6rHkqRftgAWM400lv9hFz0x'
);

export default async function handler(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Payment',
          },
          unit_amount: req.body.amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'https://america.foundation/success',
    cancel_url: 'https://america.foundation/cancel',
  });

  res.redirect(303, session.url);
}
