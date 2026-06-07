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

// EDIT HOTEL
export const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE HOTEL
export const deleteHotel = async (req, res) => {
  try {
    const adminKey = req.headers.authorization;

    // simple admin protection
    if (adminKey !== "admin123") {
      return res.status(403).json({ message: "No permission to delete" });
    }

    await Hotel.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};