//buttons for start and next
const startButton = document.getElementById('star-btn')
startButton.addEventListener('click', startGame)
const nextButton = document.getElementById('next-btn')
nextButton.addEventListener('click', nextPage)

//Score is set to zero
const score = 0

//timer in sec
const time = 150

const buttons = document.querySelector("#btn")
function btnListen(btn) {
   document.addEventListener('click', function);
}
//will this work all 6 buttons at once?




function startgame() {
   console.log('Start working');
}

function setNextQuestion() {

}

function selectAnswer() {


}


//Questions I was funny on the last one
const questions = [
   {
      question: "What is JavaScript?",
      choices: ["A programming language(a)", "A tool for opening beer cans(b)", "A large cup of coffee?(c)"],
      answer: "a",
   },
   {
      question: "what do you start an array with?",
      choices: ["quotes(a)", "curly brackets(b)", "parentheses(c)", "square brackets(d)"],
      answer: "d",
   },
   {
      question: "What symbol do you use to indicate an ID?",
      choices: ["#(a)", "||(b)", "&&(c)", "$(d)"],
      answer: "a",
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




//The for loop for the questions or just  old functions
/* for (let i = 0; i < questions.length; i++) {
   let responce = prompt(questions[i].question);
   if (responce === choices[i].answer) {
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
   start timer
}) */



//I found this online
/*  var mins = 2;

        //calculate the seconds
        var secs = mins * 60;

        //countdown function is evoked when page is loaded
        function countdown() {
            setTimeout('Decrement()', 60);
        }

        //Decrement function decrement the value.
        function Decrement() {
            if (document.getElementById) {
                minutes = document.getElementById("minutes");
                seconds = document.getElementById("seconds");

                //if less than a minute remaining
                //Display only seconds value.
                if (seconds < 59) {
                    seconds.value = secs;
                }

                //Display both minutes and seconds
                //getminutes and getseconds is used to
                //get minutes and seconds
                else {
                    minutes.value = getminutes();
                    seconds.value = getseconds();
                }
                //when less than a minute remaining
                //colour of the minutes and seconds
                //changes to red
                if (mins < 1) {
                    minutes.style.color = "red";
                    seconds.style.color = "red";
                }
                //if seconds becomes zero,
                //then page alert time up
                if (mins < 0) {
                    alert('time up');
                    minutes.value = 0;
                    seconds.value = 0;
                }
                //if seconds > 0 then seconds is decremented
                else {
                    secs--;
                    setTimeout('Decrement()', 1000);
                }
            }
        }

        function getminutes() {
            //minutes is seconds divided by 60, rounded down
            mins = Math.floor(secs / 60);
            return mins;
        }

        function getseconds() {
            //take minutes remaining (as seconds) away
            //from total seconds remaining
            return secs - Math.round(mins * 60);  */
