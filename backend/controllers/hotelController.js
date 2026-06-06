import Hotel from "../models/Hotel.js";

// GET ALL HOTELS
export const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ADD HOTEL
export const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);

    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};