const stripe = require('stripe')('sk_test_51OVW2EKCsGTF23ib6RUB2Qi4ZGqUoHFu5aOgTWo3HXdbKQ3tbqeOUALFpsD8ZWUIL6lGYwaJbnbL35llPFQijJ1c00X0qSjr3n');

const session = await stripe.checkout.sessions.create({
  mode: 'payment',
  ui_mode: 'embedded',
  return_url: 'https://anusorn29.store',
  line_items: [
    {
      price: '{{PRICE_ID}}',
      quantity: 1,
    },
  ],
  custom_fields: [
    {
      key: 'engraving',
      label: {
        type: 'custom',
        custom: 'Personalized engraving',
      },
      type: 'text',
    },
  ],
});