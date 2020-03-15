const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Get all merges"
  })
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: "Create new merge"
  })
});

router.get('/:mergeId', (req, res, next) => {
  res.status(200).json({
    message: `Get data for merge with id of ${req.params.mergeId}`
  })
});

router.put('/:mergeId', (req, res, next) => {
  res.status(200).json({
    message: `Update data for merge with id of ${req.params.mergeId}`
  })
});

router.delete('/:mergeId', (req, res, next) => {
  res.status(200).json({
    message: `Delete merge with id of ${req.params.mergeId}`
  })
});


module.exports = router;
