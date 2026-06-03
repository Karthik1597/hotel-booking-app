import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const { hotelName, price, checkIn, checkOut, guests } = req.body;

    // ❌ validation (important in production)
    if (!hotelName || !price) {
      return res.status(400).json({
        error: "Missing required booking data",
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      // ✅ line items (Stripe format)
      line_items: [
        {
          price_data: {
            currency: "myr",
            product_data: {
              name: hotelName,
              description: `Guests: ${guests || 1}`,
            },
            unit_amount: Math.round(price * 100), // safety fix
          },
          quantity: 1,
        },
      ],

      // ✅ IMPORTANT: must be full URL (you already fixed env)
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/booking`,

      // 🔥 OPTIONAL: store booking info inside Stripe (VERY useful later)
      metadata: {
        hotelName,
        checkIn,
        checkOut,
        guests: guests ? String(guests) : "1",
      },
    });

    return res.status(200).json({
      url: session.url,
    });

  } catch (error) {
    console.log("Stripe Error:", error.message);

    return res.status(500).json({
      error: error.message,
    });
  }
};