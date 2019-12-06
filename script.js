//Score is set to zero
 const score = 0
 
//Questions I was funny on the last one
const questions = [
 {
    question: "What is JavaScript?",
    choices:  ["A programming language\n(a)", "A tool for opening beer cans\n(b)", "A large cup of coffee?\n(c)", ],
    answer:     "a","A programing language"
 },
 {
    question: "what do you start an array with?",
    choices: ["quotes\n(a)", "curly brackets\n(b)", "parentheses\n(c)", "square brackets\n(d)"],
    answer:    "d","square brackets"
 },
 {
    question: "What symbol do you use to indicate an ID?",
    choices: ["#\n(a)", "||\n(b)", "&&\n(c)", "$\n(d)"],
    answer:    "a","#"
 },
 {
    question: "Can a function call itself?",
    choices: ["Yes\n(a)", "No\n(b)"],
    answer: "a","yes",
 },
 {
   question: "Why don't I feel like I know more than I do?",
   choices: ["You need to study more\n(a)", "You are the king of the world\n(b)", "You eat too many PBandJ sandwiches\n(c)"],
   answer: "a","You need to study more",
 }
];




const buttons = document.querySelector("#btn")
 
 

buttons.addEventListener("click", function () {
   /*  put what I want to happen here */
   console.log("Button works")
})

