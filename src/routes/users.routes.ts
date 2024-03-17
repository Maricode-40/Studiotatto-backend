import express from "express";
import { userController } from "../controllers/userController";
import { auth } from "../middlewares/auth";
import { authorize } from "../middlewares/authorize";

const router = express.Router();

//users
router.get("/profile", auth, userController.getProfile);

router.put("/profile", auth, userController.updateProfile);

router.get("/appointments", auth, userController.getUserAppointments);

router.get("/services", (req, res) => {
  res.send("get services");
});

router.post("/appointments", (req, res) => {
  res.send("New appointmets");
});

router.delete("/services", (req, res) => {
  res.send("delete services");
});

router.delete("/appointments", (req, res) => {
  res.send("delete appointments");
});

//protected routes depend of the role
router.post("/", userController.create);

router.get("/", auth, authorize(["superadmin"]), userController.getAll);

router.get("/:id", userController.getById);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

router.get("/:id/appointments", userController.getUserAppointmentsbyId);

router.put("/:id/role", userController.updateRolebyId);

export default router;
