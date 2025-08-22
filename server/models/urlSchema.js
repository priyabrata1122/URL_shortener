const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true,
    },
    redirectID: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
