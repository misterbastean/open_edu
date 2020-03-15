const express = require("express");
const router = express.Router();


// ========================
// UNITS
// ========================
router.get("/", (req, res) => {
  res.send("Unit Index");
});

router.get("/new", (req, res) => {
  res.send("Show new unit form");
});

router.post("/", (req, res) => {
  res.send("Actually create new unit");
});

router.get("/:id", (req, res) => {
  res.send(`Show page for unit with ID of ${req.params.id}`);
});

router.get("/:id/edit", (req, res) => {
  res.send(`Show page to edit unit with ID of ${req.params.id}`);
});

router.get("/:id/merges/new", (req, res) => {
  res.send(`Show page to create a new merge for unit with ID of ${req.params.id}`);
});



module.exports = router;
