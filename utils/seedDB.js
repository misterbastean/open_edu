// Run on server restart to clear out old DB data and populate with fresh data
const mongoose = require("mongoose");
const Resource = require("../api/models/resource");

// Import data
const seedResources = require("./seedResources");

const seedDB = () => {
  // Delete current
  Resource.deleteMany({}, (err, deletedResources) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Deleted ${deletedResources.deletedCount} resources`);
    }
  });

  // Resources
  Resource.create(seedResources, (err, createdResources) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${seedResources.length} resource(s) created successfully.`)
    }
  })


  // Units

  // Comments

  // Merges

  // Users

}


module.exports = seedDB;
