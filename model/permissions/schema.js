const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PermissionsSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
  
  },
});

module.exports = PermissionsSchema;