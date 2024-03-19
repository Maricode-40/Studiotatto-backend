import express from "express";
import { userController } from "../controllers/userController";

const router = express.Router();

//  user routes 
router.post("/",  (req, res) => {
  res.send( "New Appointment")
});
router.put("/:id", (req, res) => {
  res.send("update appointments");
});

router.delete("/:id", (req, res) => {
  res.send("erase appointments");
});


//protected routes

router.get("/", (req, res) => {
  res.send("get appointment list");
});

router.get("/:id", (req, res) => {
  res.send("get details of appointment date");
});


export default router;
