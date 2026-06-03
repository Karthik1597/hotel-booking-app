import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { hotelName, price, checkIn, checkOut, guests } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "myr",
            product_data: {
              name: hotelName,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],

      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/booking`,
    });

    return res.json({ url: session.url });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};