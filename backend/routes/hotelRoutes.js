import express from "express";
import {
  getHotels,
  createHotel,
} from "../controllers/hotelController.js";

const router = express.Router();

// GET ALL HOTELS
router.get("/", getHotels);

// ADD HOTEL
router.post("/", createHotel);

export default router;