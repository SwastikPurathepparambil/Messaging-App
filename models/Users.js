const mongoose = require("mongoose");

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    }, 
    isAdmin: {
        type: Boolean,
        default: false
    },
}, 
    {timestamps: true}
);

module.exports = mongoose.model('User', User)