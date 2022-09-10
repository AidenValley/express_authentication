const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // LocalStrategy is capitalized because its a class

// Database
const db = require('../models');