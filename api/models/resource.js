const mongoose = require('mongoose');

const resourceSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  owner: "String", // Change to user relationship
  dateCreated: Date,
  imageUrl: String,
  title: String,
  description: String,
  linkUrl: String,
  grades: [String],
  subject: String,
  standards: [String],
  stars: [String],
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
