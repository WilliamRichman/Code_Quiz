const questions = [
    {
        question: "What is JavaScript?",
        choices: ["A programming language", "A tool for opening beer cans", "A large cup of coffee?", "A amount of hot lava?"],
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
        choices: ["Yes", "No", "maybe", "I dont know"],
        answer: "Yes",
    },
    {
        question: "Why don't I feel like I know more than I do?",
        choices: ["You need to study more", "You are the king of the world", "You eat too many PBandJ sandwiches", "I am sitting in a corner crying"],
        answer: "You need to study more"
    }
];
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
let currentQuestionIndex = 0
let questionEl = document.getElementById('questions')
let choices0 = document.getElementById('c0')
let choices1 = document.getElementById('c1')
let choices2 = document.getElementById('c2')
let choices3 = document.getElementById('c3')
const answerEl = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame())
//add next button add to show next questrion event listener

<<<<<<< HEAD
/* nextButton.addEventListener('click', setNextQuestion()) */
=======
document.getElementById("questions-container").addEventListener('click', function(event){
    if(event.target.matches('.choice')){
        console.log("Choice clicked")
        console.log(event.textContent)
        console.log(event)
    }

})
>>>>>>> 71cb33ec0b40d2e85316b19c37aaa73d7f67fea7

function startGame() {
    console.log('working');
    questionContainerEl.removeAttribute('class')
    setNextQuestion()
}

/* function showNextButton() {
    nextButton.removeAttribute('class', 'hide');
} */

function setNextQuestion() {

    startButton.setAttribute('class', 'hide')
    showQuestion(questions[currentQuestionIndex])
    /* nextButton.removeAttribute('class') */



};

/* function resetState(){
    nextButton.classList.add('hide')
    while()
} */

function showQuestion(question) {
    /* questionElement.interText = questions.questions */
    console.log(question)
    questionEl.textContent = question.question
    choices0.textContent = question.choices[0]
    choices1.textContent = question.choices[1]
    choices2.textContent = question.choices[2]
    choices3.textContent = question.choices[3]

    /* questions && choices console.log('corecect') */
    /* activity 24 data attributs look over this value on a button or a tag week 4*/
    /* week 5 fridge game will help activity 11 that wil help  */


};

function selectAnswer() {
    if (choiceEl || answers) {
        console.log("Yes");
        /* showNextButton(setNextQuestion()) */
    }
    /*    else {
           console.log("No")
       } */


};



