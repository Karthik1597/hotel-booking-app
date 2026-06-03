import Stripe from "stripe";
import Booking from "../models/Booking.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// CREATE PAYMENT
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

      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/booking`,
    });

    // TEMP STORE DATA (IMPORTANT)
    // we will save after success later
    global.bookingTemp = {
      hotelName,
      price,
      checkIn,
      checkOut,
      guests
    };

    res.json({ url: session.url });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Stripe error" });
  }
};