import express from "express";
import userRoutes from "./users.routes";
import appointmentsRoutes from "./appointments.routes";
import servicesRoutes from "./services.routes";
import authRoutes from "./auth.routes";

const router = express.Router();

//API routes

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/appointments", appointmentsRoutes);
router.use("/services", servicesRoutes);

export default router;
