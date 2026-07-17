const Journal = require("../models/Journal");

// CREATE JOURNAL
const createJournal = async (req, res) => {
    try {
        const {mood, moodScore,journalText} = req.body;

        if (!mood || !moodScore || !journalText) {
            return res.status(400).json({
                message: "Please provide all required fields"
            });
        }

        const journal = await Journal.create({mood, moodScore, journalText});

        res.status(201).json({
            message: "Journal added successfully",
            journal
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create journal",
            error: error.message
        });
    }
};

// GET ALL JOURNALS
const getJournals = async (req, res) => {
    try {
        const journals = await Journal.find()
            .sort({ createdAt: -1 });

        res.status(200).json(journals);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch journals",
            error: error.message
        });
    }
};

module.exports = {
    createJournal,
    getJournals
};