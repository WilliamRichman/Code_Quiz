const buttons = document.querySelector("#btn")
 
 
 
buttons.addEventListener("click", function () {
   /*  put what I want to happen here */
   console.log("Button works")
})
 
 
 
 
//Questions
var questions = [
 {
    question: "What is JavaScript?",
    choices:  ["A programming language", "A tool for opening beer cans", "A large cup of coffee?", ],
    answer:    "A programing language"
 },
 {
    question: "what do you start an array with?",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer:    "square brackets"
 },
 {
    question: "What symbol do you use to indicate an ID?",
    choices: ["#", "||", "&&", "$"],
    answer:    "#"
 },
 {
    question: "Can a function call itself?",
    choices: ["Yes", "No"],
    answer: "yes",
 },
 {
   question: "Why don't I feel like I know more than I do?",
   choices: ["You need to study more", "You are the king of the world", "You eat too many PBandJ sandwiches"],
   answer: "You need to study more",
 }
];

