const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Router user GET");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json("Router user POST");
});

router.put("/", (req, res) => {
  res.json("Router user PUT");
});

router.delete("/", (req, res) => {
  res.json("Router user DELETE");
});

module.exports = router;
