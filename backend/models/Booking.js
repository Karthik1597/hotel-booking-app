import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true,
    },

    checkIn: {
      type: String,
      required: true,
    },

    checkOut: {
      type: String,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      default: "Paid",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);