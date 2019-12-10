const stratButton = document.getElementById('start-btn')
const questionContainerEl = document.getElementById('question-container')
let currentQuestionIndex = questions
const questionEl = document.getElementById('questions')
const answerB = document.getElementById('answer-buttons')

stratButton.addEventListener('click', startGame)

function startGame() {
    console.log('working');
    stratButton.classList.add('hide');
    loadQuestions = questions
    questionContainerEl.classList.remove('hide');
    currentQuestionsIndex = 0;
    setNextQuestion()
}


function setNextQuestion() {
    showQuestion(loadQuestions[currentQuestionIndex])

};

function showQuestion(question) {
    questionElement.interText = questions.questions
};

function selectAnswer() {


};


//Questions I was funny on the last one
const questions = [
    {
        question: "What is JavaScript?",
        choices: ["A programming language", "A tool for opening beer cans", "A large cup of coffee?"],
        answer: "A programming language",
    },
    {
        question: "what do you start an array with?",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "square brackets",
    },
    {
        question: "What symbol do you use to indicate an ID?",
        choices: ["#", "||", "&&", "$"],
        answer: "#",
    },
    {
        question: "Can a function call itself?",
        choices: ["Yes", "No"],
        answer: "Yes",
    },
    {
        question: "Why don't I feel like I know more than I do?",
        choices: ["You need to study more", "You are the king of the world", "You eat too many PBandJ sandwiches"],
        answer: "You need to study more"
    }
];
