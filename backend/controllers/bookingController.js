import Booking from "../models/Booking.js";

export const saveBooking = async (req, res) => {
  try {
    const bookingData = global.bookingTemp;

    if (!bookingData) {
      return res.status(400).json({ message: "No booking data" });
    }

    const newBooking = new Booking(bookingData);
    await newBooking.save();

    global.bookingTemp = null;

    res.json({ message: "Booking saved" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error saving booking" });
  }
};