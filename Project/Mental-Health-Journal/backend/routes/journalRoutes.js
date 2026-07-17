const express = require("express");

const {
    createJournal,
    getJournals
} = require("../controllers/journalController");

const router = express.Router();


// POST - Add Journal
router.post("/", createJournal);


// GET - Get Journals
router.get("/", getJournals);


module.exports = router;