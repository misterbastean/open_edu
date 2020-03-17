const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const Resource = require('../models/resource');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/resources');
  },
  filename: (req, file, cb) => {
    // const uniquePrefix = Date.now()
    cb(null, new Date().toISOString() + "_" + file.originalname)
  }
});

/*
List of File Types to Accept:
Documents: .docx, .pdf, .odt, .rtf, .txt, .wpd, .pages
Images: .bmp, .gif, .jpg, .jpeg, .png, .svg
Presentations: .pptx, .odp, .key
Spreadsheets: .csv, .xlsx, .ods, .numbers
Audio: .mp3
Video: .avi, .h264, .m4v, .mov, .mp4, .mpg, .mpeg
Compressed: .7z, .rar, .zip
Other: .otf,
*/

const acceptedFileTypes = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // docx
  "application/pdf",
  "application/vnd.oasis.opendocument.text", // odt
  "text/rtf",
  "text/plain", // txt
  "application/vnd.wordperfect", // wpd
  "application/x-iwork-pages-sffpages", // pages
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml", // svg
  "application/vnd.openxmlformats-officedocument.presentationml.presentation", // pptx
  "application/vnd.oasis.opendocument.presentation", // odp
  "application/x-iwork-keynote-sffkey", // key
  "text/csv",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // xlsx
  "application/vnd.oasis.opendocument.spreadsheet", // ods
  "application/x-iwork-numbers-sffnumbers", // numbers
  "audio/mpeg", // mp3
  "video/x-msvideo", // avi
  "video/H264",
  "video/x-m4v",
  "video/quicktime", // movie
  "video/mp4",
  "application/x-7z-compressed", // 7z
  "application/vnd.rar", // rar
  "application/zip",
  "font/otf"
]

const fileFilter = (req, file, cb) => {
  if (acceptedFileTypes.includes(file.mimetype)) {
    // accept the file
    cb(null, true)
  } else {
    // reject the file
    cb(new Error("File does not meet requirements"), false)
  }
}

const limits = {
  fileSize: 1024 * 1024 * 5, // 5MB max
}

const upload = multer({storage, limits, fileFilter});


// ===============================
// GENERIC RESOURCE ROUTES
// ===============================
router.get('/', (req, res, next) => {
  const limitNum = req.query.limit || 20
  Resource.find({}).limit(limitNum)
  .exec((err, foundResources) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "We goofed...",
        error: err
      })
    } else {
      console.log("Sending resources");
      res.status(200).json(foundResources)
    }
  })
});

router.post('/', upload.single('resourceFile'), (req, res, next) => {
  // Create new resource model
  const resource = new Resource({
    _id: new mongoose.Types.ObjectId(),
    dateCreated: new Date(),
    owner: req.body.owner,
	  title: req.body.title,
	  description: req.body.description,
	  linkUrl: req.file.path,
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

// Update specific resource properties (NOT the file itself)
router.put('/:resourceId', (req, res, next) => {
  // Build resource object
  let updatedResource = {
    lastUpdated: new Date()
  };
  if (req.query.title) { updatedResource.title = req.query.title };
  if (req.query.description) { updatedResource.description = req.query.description };
  if (req.query.linkUrl) { updatedResource.linkUrl = req.query.linkUrl };
  if (req.query.grades) { updatedResource.grades = req.query.grades };
  if (req.query.subject) { updatedResource.subject = req.query.subject };
  if (req.query.standards) { updatedResource.standards = req.query.standards };

  // Update resource in DB
  Resource.findByIdAndUpdate(req.params.resourceId, updatedResource, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: "We goofed...",
        error: err
      })
    } else {
      res.status(200).json({
        message: `Updated resource with id of ${req.params.resourceId}.`
      })
    }
  })
});

router.delete('/:resourceId', (req, res, next) => {
  Resource.findByIdAndDelete(req.params.resourceId, (err, deletedResource) => {
    if (err) {
      res.status(500).json({
        message: "Unable to delete...",
        error: err
      })
    } else {
      res.status(200).json({
        message: `Delete resource with id of ${req.params.resourceId}`
      })
    }
  })
});

// ==========================
// SPECIFIC RESOURCE METHODS
// ==========================
router.get('/:resourceId/standards', (req, res, next) => {
  Resource.findById(req.params.resourceId, (err, foundResource) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        err
      })
    } else {
      res.status(200).json({
        _id: foundResource._id,
        standards: foundResource.standards
      })
    }
  })
});

router.get('/:resourceId/comments', (req, res, next) => {
  Resource.findById(req.params.resourceId, (err, foundResource) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        err
      })
    } else {
      res.status(200).json({
        _id: foundResource._id,
        comments: foundResource.comments
      })
    }
  })
});

// TODO: NEED TO FIGURE OUT BEST WAY TO IMPLEMENT THE ADDCOMMENT METHOD

// router.put('/:resourceId/comments', (req, res, next) => {
//   res.status(200).json({
//     message: `Update comments of resource with id of ${req.params.resourceId}`
//   })
// });

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
