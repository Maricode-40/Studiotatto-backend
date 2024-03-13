import express from "express";

const router = express.Router();

//  Public routes
router.get("/", (req, res) => {
  res.send("get appointment list");
});

router.get("/:id", (req, res) => {
  res.send("get specific date");
});
//falta definir 3 mas 
export default router;
