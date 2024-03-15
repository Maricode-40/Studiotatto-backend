import express from "express";

const router = express.Router();

//  Public routes
router.get("/", (req, res) => {
  res.send("get Service List");
});

router.get("/:id", (req, res) => {
  res.send("Details of Services");
});

//protected routes

router.post("/", (req, res) => {
  res.send("New Services");
});

router.put("/:id", (req, res) => {
  res.send("Update Services");
});

router.delete("/:id", (req, res) => {
  res.send("Erase Services");
});
export default router;
