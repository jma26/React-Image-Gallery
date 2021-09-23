const mongoose = require('mongoose');

const db = {
  mongoose: mongoose,
};

db.users = require('./user.model.js')(mongoose);

module.exports = db;