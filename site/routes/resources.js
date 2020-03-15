const express = require("express");
const router = express.Router();


// =======================
// RESOURCES
// =======================
router.get("/", (req, res) => {
  res.send("Resource Index");
});

router.get("/new", (req, res) => {
  res.send("Show new resource form");
});

router.post("/", (req, res) => {
  res.send("Actually create new resource");
});

router.get("/:id", (req, res) => {
  res.send(`Show page for resource with ID of ${req.params.id}`);
});

router.get("/:id/edit", (req, res) => {
  res.send(`Show page to edit resource with ID of ${req.params.id}`);
});

router.get("/:id/merges/new", (req, res) => {
  res.send(`Show page to create a new merge for resource with ID of ${req.params.id}`);
});

module.exports = router;
