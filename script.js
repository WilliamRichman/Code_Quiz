//Score is set to zero
 const score = 0

 //timer in sec
 const time = 150

 const buttons = document.querySelector("#btn")
 
//Questions I was funny on the last one
const questions = [
 {
    question: "What is JavaScript?",
    choices:  ["A programming language(a)", "A tool for opening beer cans(b)", "A large cup of coffee?(c)"], 
    answer:     "a",
 },
 {
    question: "what do you start an array with?",
    choices: ["quotes(a)", "curly brackets(b)", "parentheses(c)", "square brackets(d)"],
    answer:    "d",
 },
 {
    question: "What symbol do you use to indicate an ID?",
    choices: ["#(a)", "||(b)", "&&(c)", "$(d)"],
    answer:    "a",
 },
 {
    question: "Can a function call itself?",
    choices: ["Yes(a)", "No(b)"],
    answer: "a",
 },
 {
   question: "Why don't I feel like I know more than I do?",
   choices: ["You need to study more(a)", "You are the king of the world(b)", "You eat too many PBandJ sandwiches(c)"],
   answer: "a"
 }
];


//The for loop for the questions or just 
for (let i = 0; i < questions.length; i++){
   let responce = prompt(questions[i].question);
   if(responce === choices[i].answer){
   //the let window.prompt(questions might need to be choice)
   score++;
   alert("Correct!");
   //look to add a sound to this
}
   else { 
      alert("Wrong!");
      //look to add sound to this and take away 5 sec
   };
};
//end of for loop


//Tell the score 
alert("you got " + score + " correct great job!")



 
 

buttons.addEventListener("click", function () {
<<<<<<< HEAD
    start timer
})
=======
   ///set inbtervule funcution
   /*  put what I want to happen here  start the timer*/
   console.log("Button works")
})

>>>>>>> e16434bfb9a8ffee3c18cfaf1b6dbc4a92e8ec4a
