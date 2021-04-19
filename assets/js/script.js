var startBtn = $("#startBtn")
var intro = $("#intro")
var answers = $("#answers")

// quiz questions
var questions = {
    question1: {
        question: "Commonly used data types DO Not Include:",
        answers: [ "strings", "booleans", "alerts", "numbers"],
        correctAnswer: "3"
    },
    question2:{
        question: "The condition in an if/else statement is enclosed with _____.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
        },
        correctAnswer: "3"
    },
    question3:{
        question: "Arrays in JavaScript can be used to store _____.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "4"
    },
    question4:{
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correctAnswer: "3"
    },
    question5:{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correctAnswer: "4"
    }
};

// click button to start quiz


startBtn.on("click", function (){

function test() {
    var quiz = questions.question1;
    intro.text(quiz.question)
    intro.text(quiz.answers)
    console.log(quiz.answers)
}
test()
})




