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

$(".container2").hide()

$("#start").click(function () {
    $("#start").hide()
    $(".question").append(questions[0].question);
    $("#btn1").append(questions[0].choices[0]);
    $("#btn2").append(questions[0].choices[1]);
    $("#btn3").append(questions[0].choices[2]);
    $("#btn4").append(questions[0].choices[3]);
    $(".container2").show()


})

$("#btn1").click(function () {
    const btn1Val = $("#btn1").text()
    console.log(btn1Val)
    const answerVal = questions[0].answer
    console.log(answerVal)

    if (btn1Val === answerVal) {
        alert("Correct")
    }else {
        alert("Wrone")
    }

});


$("#btn2").click(function () {
    const btn2Val = $("#btn2").text()
    console.log(btn2Val)
    const answerVal = questions[0].answer
    console.log(answerVal)

    if (btn2Val === answerVal) {
        alert("Correct")
    }else {
        alert("Wrone")
    }
});




$("#btn3").click(function () {

    const btn3Val = $("#btn3").text()
    console.log(btn3Val)
    const answerVal = questions[0].answer
    console.log(answerVal)

    if (btn3Val === answerVal) {
        alert("Correct")
        
    }else {
        alert("Wrone")
    }

})

$("#btn4").click(function () {

    const btn4Val = $("#btn4").text()
    console.log(btn4Val)
    const answerVal = questions[0].answer
    console.log(answerVal)

    if (btn4Val === answerVal) {
        alert("Correct")
    }else {
        alert("Wrone")
    }

});


function moveToNext(){
//clear all conatiners that have values even buttons
//move to the next index of the array set with global vaeryable = to 0
//insteand of using 0 you will use the globale var for moving thur 
//like a for loop make the index ++
//using the index you will populate the page questions[].question to get the next question 
//same thing for the choices
//same thing for the answers

}