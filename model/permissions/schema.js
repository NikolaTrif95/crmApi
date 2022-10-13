const mongoose = require("mongoose");

const PermissionsSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
  
  },
});

module.exports = PermissionsSchema;