const quizQuestions = [
    {
        question: "What is the capital of Indonesia?",
        options: ["Jakarta", "Bali", "Surabaya", "Bandung"],
        answer: 0
    },
    {
        question: "Which country is known for the Angkor Wat temple?",
        options: ["Thailand", "Vietnam", "Cambodia", "Laos"],
        answer: 2
    },
    {
        question: "What is the largest island in the Philippines?",
        options: ["Luzon", "Visayas", "Mindanao", "Palawan"],
        answer: 0
    },
    {
        question: "Which sea lies between Borneo and the Philippines?",
        options: ["Sulu Sea", "Celebes Sea", "Makassar Strait", "Java Sea"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById("result").style.display = "none";
    document.getElementById("restart").style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.innerText = question.options[index];
    });
}

function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestionIndex];
    if (selectedIndex === question.answer) {
        correctAnswers++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById("quiz").style.display = "none";
    const result = document.getElementById("result");
    result.innerText = `You got ${correctAnswers} out of ${quizQuestions.length} correct!`;
    result.style.display = "block";
    document.getElementById("restart").style.display = "block";

    // Record score if user is logged in
    const user = auth.currentUser;
    if (user) {
        recordScore(user.uid, correctAnswers, quizQuestions.length);
    }
}

function restartQuiz() {
    document.getElementById("quiz").style.display = "block";
    startQuiz();
}

// Modal handling
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Start quiz on page load
window.onload = startQuiz;
