const express = require("express");
const router = express.Router();


// =======================
// USERS
// =======================
router.get("/new", (req, res) => {
  res.send("Show user registration page");
});

router.post("/", (req, res) => {
  res.send("Actually create new user");
});

router.get("/:id", (req, res) => {
  res.send(`Show PUBLIC user page for user with ID of ${req.params.id}`);
});

router.get("/:id/edit", (req, res) => {
  res.send(`Show PRIVATE form to edit user with ID of ${req.params.id}`);
});

router.get("/:id/mergereview", (req, res) => {
  res.send(`Show PRIVATE page that lists all merge requests for any units/resources that user with ID of ${req.params.id} administers.`);
});

router.get("/:id/createdmerges", (req, res) => {
  res.send(`Show PRIVATE page that lists all merge requests created by user with ID of ${req.params.id}`);
});

module.exports = router;
