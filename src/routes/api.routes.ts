import express from "express";
import userRoutes from "./users.routes";
import appointmentsRoutes from "./appointments.routes"

const router = express.Router();

//API routes

router.use("/users", userRoutes);
router.use("/appointments", appointmentsRoutes);


export default router;
