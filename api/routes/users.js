const express = require('express');
const router = express.Router()


// ===============================
// GENERAL USER ROUTES
// ===============================

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /api/users"
  })
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "Created new user",
    userDate: {
      id: "id here",
      other: "other info, etc."
    }
  })
});

router.get('/query', (req, res, next) => {
  res.status(200).json({
    message: "This is the query endpoint",
    query: req.query
  })
});


// ===============================
// SPECIFIC USER ROUTES
// ===============================
router.get('/:userId', (req, res, next) => {
  res.status(200).json({
    message: "Get individual user data",
    id: req.params.userId
  })
});

router.put('/:userId', (req, res, next) => {
  res.status(200).json({
    message: `Updating user with id of ${req.params.id}`,
    updatedData: "Updated user data here"
  })
});

router.delete('/:userId', (req, res, next) => {
  res.status(200).json({
    message: `Deleted user with id of ${req.params.id}`
  })
});

router.get('/:userId/resources', (req, res, next) => {
  res.status(200).json({
    message: `Get all resources for user with id of ${req.params.userId}`
  })
});

router.get('/:userId/units', (req, res, next) => {
  res.status(200).json({
    message: `Get all units for user with id of ${req.params.userId}`
  })
});

router.get('/:userId/comments', (req, res, next) => {
  res.status(200).json({
    message: `Get all comments for user with id of ${req.params.userId}`
  })
});

router.get('/:userId/stars', (req, res, next) => {
  res.status(200).json({
    message: `Get all stars for user with id of ${req.params.userId}`
  })
});

router.get('/:userId/profile', (req, res, next) => {
  res.status(200).json({
    message: `Get profile data for user with id of ${req.params.userId}`
  })
});

router.post('/:userId/follow/:otherUserId', (req, res, next) => {
  res.status(200).json({
    message: `Add user with id of ${req.params.otherUserId} to list of following for user with id of ${req.params.userId}.
    Also add ${req.params.userId} to to ${req.params.otherUserId}'s list of followers'`
  })
});


module.exports = router;
