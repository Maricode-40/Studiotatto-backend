import express from "express";
import { appointmentController } from "../controllers/appointmentController";
import { auth } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

const router = express.Router();

//  User routes
//New Appointment
router.post("/", auth, appointmentController.create);

//update appointments
router.put("/:id", auth, appointmentController.update);

//erase appointments
router.delete("/:id", auth, appointmentController.delete);

//protected routes
//get appointment list
router.get("/", auth, authorize(["superadmin"]), appointmentController.getAll);

//get details of appointment date- BY ID
router.get(
  "/:id",
  auth,
  //authorize(["superadmin"]),
  appointmentController.getAll
);

export default router;
