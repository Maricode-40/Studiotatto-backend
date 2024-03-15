import express from "express";

const router = express.Router();

//  Public routes
router.get("/", (req, res) => {
  res.send("get appointment list");
});

router.get("/:id", (req, res) => {
  res.send("get details of appointment date");
});

//protected routes

router.post("/", (req, res) => {
  res.send("New appointment");
});

router.put("/:id", (req, res) => {
  res.send("update appointments");
});

router.delete("/:id", (req, res) => {
  res.send("erase appointments");
});
export default router;