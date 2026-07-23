const mongoose = require("mongoose");

const studentSChema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            trim: true
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        course: {
            type: String,
            required: true,
            trim: true,
        },

        marks: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        }

    }
);

const Students = mongoose.model("Students", studentSChema);

module.exports = Students;