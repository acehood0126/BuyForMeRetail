const mongoose = require('mongoose');
const config = require('config');
const mongUri = config.get('mongoURI');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = mongUri;
db.retailer = require("./retailer.model.js");
db.user= require("./user.model.js");

module.exports = db;
