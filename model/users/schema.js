const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: Number,
        required: true,
    },
    username: {
        type: Number,
        required: true,
    },
    password: {
        type: Number,
        required: true,
    },
    email: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
    permissionId :[{ type: Schema.Types.ObjectId, ref: 'Permissions' }]

});

module.exports = UserSchema;