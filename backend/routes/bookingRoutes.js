import express from "express";
import { createBooking, getBookings } from "../controllers/bookingController.js";

const router = express.Router();

// CREATE BOOKING (user side)
router.post("/", createBooking);

// GET BOOKINGS (admin side) ✅ IMPORTANT
router.get("/", getBookings);

export default router;