const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Unit = require("../models/unit");


// ===============================
// GENERIC UNIT ROUTES
// ===============================
router.get('/', (req, res, next) => {
  const limit = req.query.limit || 20;
  Unit.find({}).limit(limit)
  .exec((err, foundUnits) => {
    if (err) {
      res.status(500).json({
        err
      })
    } else {
      res.status(200).json(foundUnits)
    }
  })
  res.status(200).json({
    message: "Handling GET requests to /api/units"
  })
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: "Handling POST requests to /api/units"
  })
});

router.get('/query', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /api/query",
    data: req.query
  })
});

// ==========================
// SPECIFIC UNIT ROUTES
// ==========================
router.get('/:unitId', (req, res, next) => {
  res.status(200).json({
    message: `Show details of unit with id of ${req.params.unitId}`
  })
});

router.put('/:unitId', (req, res, next) => {
  res.status(200).json({
    message: `Update unit with id of ${req.params.unitId}`
  })
});

router.delete('/:unitId', (req, res, next) => {
  res.status(200).json({
    message: `Delete unit with id of ${req.params.unitId}`
  })
});

// ==========================
// SPECIFIC UNIT METHODS
// ==========================
router.get('/:unitId/standards', (req, res, next) => {
  res.status(200).json({
    message: `Show standards of unit with id of ${req.params.unitId}`
  })
});

router.put('/:unitId/standards', (req, res, next) => {
  res.status(200).json({
    message: `Update standards of unit with id of ${req.params.unitId}`
  })
});

router.get('/:unitId/resources', (req, res, next) => {
  res.status(200).json({
    message: `Show resources of unit with id of ${req.params.unitId}`
  })
});

router.put('/:unitId/resources', (req, res, next) => {
  res.status(200).json({
    message: `Update resources of unit with id of ${req.params.unitId}`
  })
});

router.get('/:unitId/comments', (req, res, next) => {
  res.status(200).json({
    message: `Show comments of unit with id of ${req.params.unitId}`
  })
});

router.put('/:unitId/comments', (req, res, next) => {
  res.status(200).json({
    message: `Update comments of unit with id of ${req.params.unitId}`
  })
});

router.get('/:unitId/pendingmerges', (req, res, next) => {
  res.status(200).json({
    message: `Show pending merges of unit with id of ${req.params.unitId}`
  })
});

router.put('/:unitId/pendingmerges', (req, res, next) => {
  res.status(200).json({
    message: `Update pendingMerges of unit with id of ${req.params.unitId}`
  })
});

router.get('/:unitId/acceptedmerges', (req, res, next) => {
  res.status(200).json({
    message: `Show accepted merges of unit with id of ${req.params.unitId}`
  })
});

router.put('/:unitId/acceptedmerges', (req, res, next) => {
  res.status(200).json({
    message: `Update acceptedMerges of unit with id of ${req.params.unitId}`
  })
});

router.get('/:unitId/rejectedmerges', (req, res, next) => {
  res.status(200).json({
    message: `Show rejected merges of unit with id of ${req.params.unitId}`
  })
});

router.put('/:unitId/rejectedmerges', (req, res, next) => {
  res.status(200).json({
    message: `Update rejectedMerges of unit with id of ${req.params.unitId}`
  })
});


module.exports = router;
