const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  owner: { type: "String", required: true }, // Change to user relationship
  dateCreated: { type: Date, required: true },
  title: { type: String, required: true},
  description: { type: String, required: true},
  linkUrl: { type: String, required: true },
  grades: { type: [String], required: true },
  subject: { type: String, required: true },
  standards: { type: [String], required: true },
  stars: {type: [String], required: true },
  comments: [String], // Change to comment relationship
  pendingMerges: [String], // Change to merge relationship
  acceptedMerges: [String], // Change to merge relationship
  rejectedMerges: [{
    merge: String, // Change to merge relationship
    message: String
  }],
  lastUpdated: Date
});

module.exports = mongoose.model('Resource', resourceSchema);
