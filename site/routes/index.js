const express = require("express");
const router = express.Router();


// ========================
// INDEX
// ========================
router.get("/", (req, res) => {
  res.send("Landing page here");
});

router.get("/index", (req, res) => {
  res.render("index");
});

module.exports = router;
