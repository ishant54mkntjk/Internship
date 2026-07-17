const API_URL = "http://localhost:5000/api/journals";


let selectedMood = null;

let selectedMoodScore = null;


// MOOD SELECTION

const moodButtons =
    document.querySelectorAll(".mood-btn");


moodButtons.forEach((button) => {

    button.addEventListener("click", () => {

        moodButtons.forEach((btn) => {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");


        selectedMood =
            button.dataset.mood;


        selectedMoodScore =
            Number(button.dataset.score);

    });

});


// ADD JOURNAL

const addJournalBtn =
    document.getElementById("addJournalBtn");


addJournalBtn.addEventListener("click", async () => {

    const journalText =
        document.getElementById("journalText").value.trim();


    if (!selectedMood) {

        alert("Please select your mood");

        return;

    }


    if (!journalText) {

        alert("Please write something in your journal");

        return;

    }


    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                mood: selectedMood,

                moodScore: selectedMoodScore,

                journalText: journalText

            })

        });


        const data =
            await response.json();


        if (!response.ok) {

            alert(data.message);

            return;

        }


        alert("Journal added successfully");


        document.getElementById("journalText").value = "";


        selectedMood = null;

        selectedMoodScore = null;


        moodButtons.forEach((button) => {

            button.classList.remove("selected");

        });


        loadJournals();


    } catch (error) {

        console.log(error);

        alert("Something went wrong");

    }

});


// LOAD JOURNALS

async function loadJournals() {

    try {

        const response =
            await fetch(API_URL);


        const journals =
            await response.json();


        displayJournals(journals);

        createCalendar(journals);

        calculateStreak(journals);

    } catch (error) {

        console.log(error);

    }

}


// DISPLAY JOURNALS

function displayJournals(journals) {

    const journalList =
        document.getElementById("journalList");


    journalList.innerHTML = "";


    journals.forEach((journal) => {

        const journalItem =
            document.createElement("div");


        journalItem.className =
            "journal-item";


        const date =
            new Date(journal.createdAt);


        const formattedDate =
            date.toLocaleDateString("en-IN", {

                day: "numeric",

                month: "long",

                year: "numeric"

            });


        const moodEmoji =
            getMoodEmoji(journal.mood);


        journalItem.innerHTML = `

            <div>

                <div class="journal-date">

                    ${formattedDate}

                </div>


                <div class="journal-text">

                    ${journal.journalText}

                </div>

            </div>


            <div class="journal-mood">

                ${moodEmoji}

            </div>

        `;


        journalList.appendChild(journalItem);

    });

}


// MOOD EMOJI

function getMoodEmoji(mood) {

    const moodMap = {

        happy: "😊",

        good: "🙂",

        neutral: "😐",

        sad: "😔",

        awful: "😢"

    };


    return moodMap[mood] || "😐";

}


// LOAD DATA WHEN PAGE OPENS

loadJournals();