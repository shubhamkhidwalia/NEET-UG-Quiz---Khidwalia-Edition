const allQuizData = [
    {
        question: "Which of the following is the site for light-dependent reactions in photosynthesis?",
        choices: ["Stroma", "Thylakoid membrane", "Outer chloroplast membrane", "Cristae"],
        correctAnswer: 1
    },
    {
        question: "What is the role of DNA ligase in DNA replication?",
        choices: ["To unwind the DNA helix", "To join Okazaki fragments", "To add primers", "To remove primers"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a feature of genetic code?",
        choices: ["Universal", "Specific", "Degenerate", "Overlapping"],
        correctAnswer: 3
    },
    {
        question: "What is the function of RNA polymerase in transcription?",
        choices: ["To add amino acids to growing polypeptide chain", "To synthesize RNA from DNA template", "To join tRNA to mRNA", "To add sugar-phosphate backbone to nucleotides"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is the correct sequence of events in meiosis?",
        choices: ["Prophase I → Metaphase I → Anaphase I → Telophase I", "Prophase I → Anaphase I → Metaphase I → Telophase I", "Metaphase I → Prophase I → Anaphase I → Telophase I", "Prophase I → Telophase I → Metaphase I → Anaphase I"],
        correctAnswer: 0
    },
    {
        question: "What is the role of troponin in muscle contraction?",
        choices: ["It breaks down ATP", "It binds to myosin", "It exposes binding sites on actin for myosin", "It pumps calcium ions back into sarcoplasmic reticulum"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is NOT a function of the liver?",
        choices: ["Production of bile", "Storage of glycogen", "Production of insulin", "Detoxification of drugs"],
        correctAnswer: 2
    },
    {
        question: "What is the function of Bowman's capsule in the nephron?",
        choices: ["Secretion of erythropoietin", "Filtration of blood", "Reabsorption of glucose", "Concentration of urine"],
        correctAnswer: 1
    },
    {
        question: "Which of the following hormones is produced by the adrenal cortex?",
        choices: ["Epinephrine", "Aldosterone", "Melatonin", "Thyroxine"],
        correctAnswer: 1
    },
    {
        question: "What is the role of helper T cells in the immune system?",
        choices: ["Direct killing of infected cells", "Production of antibodies", "Activation of other immune cells", "Phagocytosis of pathogens"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is the correct pathway for blood flow through the heart?",
        choices: ["Right atrium → Right ventricle → Lungs → Left atrium → Left ventricle", "Left atrium → Left ventricle → Lungs → Right atrium → Right ventricle", "Right atrium → Left atrium → Right ventricle → Left ventricle → Lungs", "Left ventricle → Right ventricle → Left atrium → Right atrium → Lungs"],
        correctAnswer: 0
    },
    {
        question: "What is the function of the corpus luteum?",
        choices: ["Production of estrogen", "Production of progesterone", "Production of FSH", "Production of LH"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a part of the hindbrain?",
        choices: ["Pons", "Medulla oblongata", "Cerebellum", "Thalamus"],
        correctAnswer: 3
    },
    {
        question: "What is the role of pneumatophores in mangrove plants?",
        choices: ["Seed dispersal", "Gas exchange", "Water storage", "Photosynthesis"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of an enzyme that catalyzes hydrolysis reactions?",
        choices: ["DNA polymerase", "Amylase", "Rubisco", "Phosphofructokinase"],
        correctAnswer: 1
    },
    {
        question: "What is the function of the Golgi apparatus?",
        choices: ["Protein synthesis", "Lipid synthesis", "Modification and packaging of proteins", "ATP production"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a characteristic of C4 plants?",
        choices: ["High photorespiration rate", "Presence of Kranz anatomy", "RuBisCO as the primary CO2 acceptor", "Single-cell carbon fixation"],
        correctAnswer: 1
    },
    {
        question: "What is the role of telomeres in chromosomes?",
        choices: ["To initiate DNA replication", "To protect chromosome ends", "To separate sister chromatids", "To facilitate crossing over"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a function of the hypothalamus?",
        choices: ["Regulation of body temperature", "Control of hunger and thirst", "Secretion of ADH", "Production of thyroid hormones"],
        correctAnswer: 3
    },
    {
        question: "What is the function of the zona pellucida?",
        choices: ["To prevent polyspermy", "To provide nutrients to the developing embryo", "To secrete progesterone", "To facilitate implantation"],
        correctAnswer: 0
    },
    // ... Add more questions here to reach 50 total
];

let quizData = [];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const newQuizBtn = document.getElementById("new-quiz");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startNewQuiz() {
    shuffleArray(allQuizData);
    quizData = allQuizData.slice(0, 15);
    currentQuestion = 0;
    score = 0;
    submitBtn.style.display = "block";
    newQuizBtn.style.display = "none";
    resultEl.textContent = "";
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;

    choicesEl.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
        const choice = question.choices[i];
        choicesEl.innerHTML += `
            <div class="choice">
                <input type="radio" id="choice${i}" name="answer" value="${i}">
                <label for="choice${i}">${choice}</label>
            </div>
        `;
    }

    progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    const answerIndex = parseInt(selectedAnswer.value);
    const correct = answerIndex === quizData[currentQuestion].correctAnswer;

    if (correct) {
        score++;
        selectedAnswer.parentElement.classList.add("correct");
    } else {
        selectedAnswer.parentElement.classList.add("incorrect");
        const correctChoice = document.getElementById(`choice${quizData[currentQuestion].correctAnswer}`);
        correctChoice.parentElement.classList.add("correct");
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    questionEl.textContent = "";
    choicesEl.innerHTML = "";
    submitBtn.style.display = "none";
    newQuizBtn.style.display = "block";
    resultEl.textContent = `Quiz completed! Your score: ${score} out of ${quizData.length}`;
    progressEl.textContent = "";
}

submitBtn.addEventListener("click", checkAnswer);
newQuizBtn.addEventListener("click", startNewQuiz);

startNewQuiz();