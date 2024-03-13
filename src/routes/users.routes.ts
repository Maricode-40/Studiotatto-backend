import express from "express";

const router = express.Router();
//users
router.get("/profile", (req, res) => {
  res.send("get profile");
});

router.put("/profile", (req, res) => {
  res.send("put profile");
});

router.get("/appointments", (req, res) => {
  res.send("get appointments");
});

router.get("/services", (req, res) => {
  res.send("get services");
});

router.post("/appointments", (req, res) => {
  res.send("post appointments");
});

router.delete("/services", (req, res) => {
  res.send("delete services");
});

export default router;
