import express from "express";
import {
  getHotels,
  createHotel,
  deleteHotel,   // ✅ ADD THIS
} from "../controllers/hotelController.js";

const router = express.Router();

// GET ALL HOTELS
router.get("/", getHotels);

// ADD HOTEL
router.post("/", createHotel);

// EDIT
router.put("/:id", updateHotel);

// DELETE HOTEL
router.delete("/:id", deleteHotel);

export default router;