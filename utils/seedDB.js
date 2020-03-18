// Run on server restart to clear out old DB data and populate with fresh data
const mongoose = require("mongoose");
const Resource = require("../api/models/resource");
const Unit = require("../api/models/unit");

// Import data
const seedResources = require("./seedResources");
const seedUnits = require("./seedUnits");

const seedDB = () => {
  // DELETE CURRENT
  // Resources
  Resource.deleteMany({}, (err, deletedResources) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Deleted ${deletedResources.deletedCount} resources.`);
    }
  })
  .then(
    // Units
    Unit.deleteMany({}, (err, deletedUnits) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Deleted ${deletedUnits.deletedCount} units.`)
      }
    })
  ).then(
    // CREATE
    // Resources
    Resource.create(seedResources, (err, createdResources) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${seedResources.length} resources(s) created successfully.`)
      }
    })
  ).then(
    // Units
    Unit.create(seedUnits, (err, createdUnits) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${seedUnits.length} unit(s) created successfully.`)
      }
    })
  )






  // Comments

  // Merges

  // Users

}


module.exports = seedDB;
