const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Berlin"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Jupiter",
            c: "Saturn"
        },
        correctAnswer: "b"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: {
            a: "Shakespeare",
            b: "Hemingway",
            c: "Tolkien"
        },
        correctAnswer: "a"
    }
];

let currentQuestion = 0;    //Inital values
let score = 0;              //Inital values

// DOM Manipulation
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

function showQuestion() {
    const question = questions[currentQuestion];
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ol type="A">
            <li><button class="answer-btn" onclick="checkAnswer('a')">${question.answers.a}</button></li>
            <li><button class="answer-btn" onclick="checkAnswer('b')">${question.answers.b}</button></li>
            <li><button class="answer-btn" onclick="checkAnswer('c')">${question.answers.c}</button></li>
        </ol>
    `;
}

function checkAnswer(answer) {
    const question = questions[currentQuestion];
    if (answer === question.correctAnswer) {
        score++;
    }
    currentQuestion++;  //currentQuestion = currentQuestion + 1
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
}

document.getElementById('next-btn').addEventListener('click', showQuestion);

showQuestion();
