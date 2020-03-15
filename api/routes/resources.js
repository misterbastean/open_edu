const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

// Multer config
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/resources');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + "_" + file.originalname)
  }
});
const upload = multer({storage});


const Resource = require('../models/resource');


// ===============================
// GENERIC RESOURCE ROUTES
// ===============================
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /api/resources"
  })
});

router.post('/', upload.single('resourceFile'), (req, res, next) => {
  // Create new resource model
  const resource = new Resource({
    _id: new mongoose.Types.ObjectId(),
    dateCreated: new Date(),
    owner: req.body.owner,
	  imageUrl: req.body.imageUrl,
	  title: req.body.title,
	  description: req.body.description,
	  linkUrl: req.body.linkUrl,
	  grades: req.body.grades,
	  subject: req.body.subject,
	  standards: req.body.standards
  });
  // Save resource to DB
  resource.save().then(result => {
    // send response
    res.status(201).json({
      message: "Resource Created",
      resource
    })
  })
  .catch(err => {
    res.status(500).json({
      message: "We done goofed...",
      error: err
    })
  });
});

router.get('/query', (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /api/query",
    data: req.query
  })
});

// ==========================
// SPECIFIC RESOURCE ROUTES
// ==========================
router.get('/:resourceId', (req, res, next) => {
  const id = req.params.resourceId
  Resource.findById(id)
  .exec()
  .then((doc) => {
    res.status(200).json(doc)
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({error: err})
  })

});

router.put('/:resourceId', (req, res, next) => {
  res.status(200).json({
    message: `Update resource with id of ${req.params.resourceId}`
  })
});

router.delete('/:resourceId', (req, res, next) => {
  res.status(200).json({
    message: `Delete resource with id of ${req.params.resourceId}`
  })
});

// ==========================
// SPECIFIC RESOURCE METHODS
// ==========================
router.get('/:resourceId/standards', (req, res, next) => {
  res.status(200).json({
    message: `Show standards of resource with id of ${req.params.resourceId}`
  })
});

router.put('/:resourceId/standards', (req, res, next) => {
  res.status(200).json({
    message: `Update standards of resource with id of ${req.params.resourceId}`
  })
});

router.get('/:resourceId/comments', (req, res, next) => {
  res.status(200).json({
    message: `Show comments of resource with id of ${req.params.resourceId}`
  })
});

router.put('/:resourceId/comments', (req, res, next) => {
  res.status(200).json({
    message: `Update comments of resource with id of ${req.params.resourceId}`
  })
});

router.get('/:resourceId/pendingmerges', (req, res, next) => {
  res.status(200).json({
    message: `Show pending merges of resource with id of ${req.params.resourceId}`
  })
});

router.put('/:resourceId/pendingmerges', (req, res, next) => {
  res.status(200).json({
    message: `Update pendingMerges of resource with id of ${req.params.resourceId}`
  })
});

router.get('/:resourceId/acceptedmerges', (req, res, next) => {
  res.status(200).json({
    message: `Show accepted merges of resource with id of ${req.params.resourceId}`
  })
});

router.put('/:resourceId/acceptedmerges', (req, res, next) => {
  res.status(200).json({
    message: `Update acceptedMerges of resource with id of ${req.params.resourceId}`
  })
});

router.get('/:resourceId/rejectedmerges', (req, res, next) => {
  res.status(200).json({
    message: `Show rejected merges of resource with id of ${req.params.resourceId}`
  })
});

router.put('/:resourceId/rejectedmerges', (req, res, next) => {
  res.status(200).json({
    message: `Update rejectedMerges of resource with id of ${req.params.resourceId}`
  })
});


module.exports = router;
