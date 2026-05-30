import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
      default: 0,
    },
    pricePerNight: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema);