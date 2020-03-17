// TODO: Finished basic resources post route. Need to create seedDB function and run on reload, then start working on other resource routes.
// TODO: Will likely need to make the webapp before being able to populate with resources/test well


const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Testing Imports
const seedDB = require('./utils/seedDB');


// ================
// Import Routes
// ================
// API Routes
const apiUserRoutes = require('./api/routes/users');
const apiUnitRoutes = require('./api/routes/units');
const apiResourceRoutes = require('./api/routes/resources');
const apiCommentRoutes = require('./api/routes/comments');
const apiMergeRoutes = require('./api/routes/merges');

// Webapp routes
const indexRoutes = require("./site/routes/index");
const unitRoutes = require("./site/routes/units");
const resourceRoutes = require("./site/routes/resources");
const userRoutes = require("./site/routes/users");


// Mongoose setup
mongoose.connect(
  `mongodb+srv://jbastean:${process.env.MONGO_ATLAS_PW}@open-edu-zejdn.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);


// Setup view engine
app.set('view engine', 'ejs');


// Morgan logging setup
app.use(morgan('dev'));


// BodyParser setup
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Handle CORS errors by allowing any client to interact with it
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});


// ================
// Use routes
// ================
// API Routes
app.use('/api/users', apiUserRoutes);
app.use('/api/units', apiUnitRoutes);
app.use('/api/resources', apiResourceRoutes);
app.use('/api/comments', apiCommentRoutes);
app.use('/api/merges', apiMergeRoutes);
app.use('/uploads', express.static('uploads')); // Make uploads folder public

// WebApp Routes
app.use("/", indexRoutes);
app.use("/units", unitRoutes);
app.use("/resources", resourceRoutes);
app.use("/users", userRoutes);

// Catch all requests that don't match any of the above routes (e.g. routing errors)
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});


// Catch any errors thrown
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message
  })
});

// Seed the DB
seedDB();

// Export
module.exports = app;
