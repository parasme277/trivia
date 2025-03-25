const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Who wrote 'To be, or not to be'?",
        answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
        correct: 1
    },
    {
        question: "What is the largest planet in our Solar System?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        alert("Correct!");
    } else {
        alert("Wrong answer.");
    }
    nextButton.style.display = 'block';
}

nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        alert("You've completed the quiz!");
    }
};

loadQuestion();
