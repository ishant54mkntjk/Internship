const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
    {
        mood: {
            type: String,
            required: true
        },

        moodScore: {
            type: Number,
            required: true
        },

        journalText: {
            type: String,
            required: true
        },

        sentimentScore: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;