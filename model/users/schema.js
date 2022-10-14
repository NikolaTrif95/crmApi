const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        unique: true
    },
    last_name: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
        unique: true
    },
    permissionId :[{ type: Schema.Types.ObjectId, ref: 'Permissions' }]

});

module.exports = UserSchema;