const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', nextQuestion)


function startGame() {
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    setNextQuestion()


}

function nextQuestion() {
    console.log('next')
}

function selectAnswer() {

}

const questions = [
    {
        question: "What is JavaScript?",
        answers: [
            { text: "A programming language", correct: true },
            { text: "A tool for opening beer cans", correct: false },
            { text: "A large cup of coffee?", correct: false },
            { text: "A amount of hot lava?", correct: false },
        ]

    },
    {
        question: "what do you start an array with?",
        answers: [
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "parentheses", correct: false },
            { text: "square brackets", correct: true }
        ]

    },
    {
        question: "What symbol do you use to indicate an ID?",
        choices: [
            { text: "#", correct: true },
            { text: "||", correct: false },
            { text: "&&", correct: false },
            { text: "$", correct: false }
        ]

    },
    {
        question: "Can a function call itself?",
        choices: [
            { text: "Yes", correct: true },
            { text: "No", correct: false }
        ]

    },
    {
        question: "JavaScript can do math?",
        choices: [
            { text: "Yes", correct: true },
            { text: "No", correct: false }
        ]

    }
];