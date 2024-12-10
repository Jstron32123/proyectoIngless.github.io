// Verb list with the base form, past participle, and corresponding sentences in present perfect
const verbs = [
    { base: "run", pastParticiple: "run", sentence: "I have _____ today." },
    { base: "eat", pastParticiple: "eaten", sentence: "She has _____ lunch already." },
    { base: "study", pastParticiple: "studied", sentence: "They have _____ for their exams." },
    { base: "read", pastParticiple: "read", sentence: "He has _____ that book." },
    { base: "play", pastParticiple: "played", sentence: "We have _____ soccer this morning." },
    { base: "work", pastParticiple: "worked", sentence: "I have _____ on this project for hours." },
    { base: "sleep", pastParticiple: "slept", sentence: "The baby has _____ for two hours." },
    { base: "write", pastParticiple: "written", sentence: "She has _____ an email to her friend." },
    { base: "sing", pastParticiple: "sung", sentence: "They have _____ that song many times." },
    { base: "dance", pastParticiple: "danced", sentence: "We have _____ at the party tonight." },
    { base: "watch", pastParticiple: "watched", sentence: "I have _____ that movie before." },
    { base: "talk", pastParticiple: "talked", sentence: "He has _____ on the phone for an hour." },
    { base: "cook", pastParticiple: "cooked", sentence: "She has _____ dinner for the family." },
    { base: "travel", pastParticiple: "traveled", sentence: "They have _____ to Italy this year." },
    { base: "clean", pastParticiple: "cleaned", sentence: "I have _____ the house already." },
    { base: "draw", pastParticiple: "drawn", sentence: "He has _____ a picture in his notebook." },
    { base: "swim", pastParticiple: "swum", sentence: "They have _____ in the pool." },
    { base: "shop", pastParticiple: "shopped", sentence: "We have _____ for clothes this weekend." },
    { base: "listen", pastParticiple: "listened", sentence: "She has _____ to music for hours." },
    { base: "study", pastParticiple: "studied", sentence: "They have _____ the new language." }
];

// Get DOM elements
const sentenceContainer = document.getElementById('sentence-container');
const verbInput = document.getElementById('verb-input');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const resultDisplay = document.getElementById('result');

// Current verb being used
let currentVerb = {};

// Function to generate a new verb and corresponding sentence
function generateVerb() {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    currentVerb = verbs[randomIndex];
    // Display sentence with a blank where the verb should go
    sentenceContainer.textContent = currentVerb.sentence;
    // Clear input and result display
    verbInput.value = "";
    resultDisplay.textContent = "";
}

// Function to check user's answer
function checkAnswer() {
    const userAnswer = verbInput.value.toLowerCase().trim();  // Normalize input
    const correctAnswer = currentVerb.pastParticiple.toLowerCase().trim();  // Present perfect form
    
    if (userAnswer === correctAnswer) {
        resultDisplay.textContent = "Correct!";
        resultDisplay.classList.add('correct');
        resultDisplay.classList.remove('incorrect');
    } else {
        resultDisplay.textContent = `Incorrect! The correct form is "${correctAnswer}".`;
        resultDisplay.classList.add('incorrect');
        resultDisplay.classList.remove('correct');
    }
}

// Add event listeners
checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', generateVerb);

// Initialize with a random verb
generateVerb();
