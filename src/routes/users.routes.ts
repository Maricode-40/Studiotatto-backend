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

router.delete("/appointments", (req, res) => {
  res.send("delete appointments");
});

//protected routes depend of the role
router.get("/", (req, res) => {
  res.send("get users");
});

router.get("/:id", (req, res) => {
  res.send("get user by id ");
});

router.put("/:id", (req, res) => {
  res.send("put user by id ");
});

router.delete("/:id", (req, res) => {
  res.send("delete user by id ");
});

router.get("/:id/appointments", (req, res) => {
  res.send("get user appointments by user id  ");
});

router.put("/:id/role", (req, res) => {
  res.send("modify role by user id");
});

export default router;
