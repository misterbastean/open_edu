const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Get all comments"
  })
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "Create new comment"
  })
});

router.get('/query', (req, res, next) => {
  res.status(200).json({
    message: `Query comments`,
    data: req.query
  })
});

router.get('/:commentId', (req, res, next) => {
  res.status(200).json({
    message: `Get comment with id of ${req.params.commentId}`
  })
});

router.put('/:commentId', (req, res, next) => {
  res.status(200).json({
    message: `Update comment with id of ${req.params.commentId}`
  })
});

router.delete('/:commentId', (req, res, next) => {
  res.status(200).json({
    message: `Delete comment with id of ${req.params.commentId}`
  })
});

module.exports = router;
