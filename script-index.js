// declare div elements by selecting ids
let time = document.querySelector("#time");
let startBtn = document.querySelector("#startBtn");
let welcomePage = document.querySelector("#welcomePage");
let question = document.querySelector("#question");
let options = document.querySelector("#options")
let resultPage = document.querySelector("#resultPage");
let score = document.querySelector("#score");
let submitResult = document.querySelector("#submitResult");
let userInput = document.querySelector("#userInput");
let correct = document.querySelector("#correct");
let wrong = document.querySelector("#wrong");

// hide resultPage, correct & wrong message. 
resultPage.style.display = 'none';
correct.style.display = 'none';
wrong.style.display = 'none';

// define interval
let interval;

// define a list at local storage that stores name and score if it's null.

let scores = JSON.parse(localStorage.getItem("scores"));

if (scores === null){
    localStorage.setItem("scores", JSON.stringify([]));
    scores = [];
}

// define quiz questions
let quizQuestions = [
    {
        question: "What JS method is used to print a string to console?",
        choices: ["print()", "System.out.println()", "console.log()", "printf()"],
        answer: "console.log()",
    },
    {
        question: "What is the output of the following statment: print(\"1\"+ 1*2 + \"a\")?",
        choices: ["Error", "12a", "3a", "11*2a"],
        answer: "12a"
    },
    {
        question: "What is the javascript library?",
        choices: ["JQuery", "HTML", "scikit-learn", "CSS"],
        answer: "JQuery"
    },
    {
        question: "What IS NOT the commonly used data types?",
        choices: ["Boolean", "Time", "Number", "String"],
        answer: "Time"
    },
    {
        question: "What is my favorite programming language?",
        choices: ["Python", "C++", "Java", "Javascript"],
        answer: "Python"
    }
];


// keep track of the question we are currently on
let currentQuestionId = 0;


// add a event listener to "startBtn" to listen a click event. 
startBtn.addEventListener("click", startQuiz);

// startQuiz function will render out questions and start a timer
function startQuiz() {
    welcomePage.style.display = 'none';
    render();
    interval = setInterval(function() {
        time.textContent--;
          
        if(time.textContent === "0") {
          finish();
        }
      }, 1000);

}

// display quiz question and options 
function render() {
    let questionData = quizQuestions[currentQuestionId];
    question.textContent = questionData.question;
    options.innerHTML = '';

    currentQuestionId += 1;

    for (let i = 0; i < questionData.choices.length; i++) {
        let choice = questionData.choices[i];
        let newElm = document.createElement("li");
        newElm.innerHTML = "<button id =\"" + choice + "\" class =\"btn btn-info btn-xs m-1\">" + choice + "</button>";
        newElm.firstElementChild.addEventListener("click", function(){
            let isCorrect;
            if (choice !== questionData.answer) {
                time.textContent -= 10;    
                isCorrect = false; 
                wrong.style.display = "block";           
            } else {
                isCorrect = true;
                correct.style.display = "block";
            }

            setTimeout(function(){
                if (isCorrect){
                    correct.style.display = "none";
                } else {
                    wrong.style.display = "none";
                }
                if (currentQuestionId === quizQuestions.length){
                    finish();
                } else {
                    render();
                }
            }, 1000);
        });

        options.appendChild(newElm);
    }
}

// finishing quiz (clearing interval, questions and options) and show result to the user
function finish() {
    clearInterval(interval);
    question.textContent = '';
    options.innerHTML = '';

    resultPage.style.display = 'block';

    score.textContent = time.textContent;
}


// adding event listener to submit button
submitResult.addEventListener("click", storeResult);


// storeResult to local storage

function storeResult(event){
    event.preventDefault();
    scores.push({
        name: userInput.value,
        score: time.textContent
    });
    localStorage.setItem("scores", JSON.stringify(scores));
    location.href = "score.html";
}


