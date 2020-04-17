// declare div elements by selecting ids
let startBtn = document.querySelector("#startBtn");
let welcomePage = document.querySelector("#welcomePage");
let question = document.querySelector("#question");
let options = document.querySelector("#options")

// define quiz questions
let quizQuestions = [
    {
        question: "What JS method is used to print a string to console?",
        choices: ["print()", "System.out.println()", "console.log()", "printf()"],
        answer: "console.log()",
    },
    {
        question: "is HTML cool?",
        choices: ["yes", "no"],
        answer: "yes"
    },
    {
        question: "is CSS cool?",
        choices: ["yes", "no"],
        answer: "yes"
    },
    {
        question: "do it ever be like it do?",
        choices: ["do it yes be", "no it dont do like it be"],
        answer: "do it yes be"
    },
];


// keep track of the question we are currently on
let currentQuestionId = 0;


// startQuiz function will render out questions and start a timer
function startQuiz() {
    welcomePage.style.display = 'none';
    render();

}

// add a event listener to "startBtn" to listen a click event. 
startBtn.addEventListener("click", startQuiz);


// display quiz question and options 
function render() {
    let questionData = quizQuestions[currentQuestionId];
    question.textContent = questionData.question;
    options.innerHTML = '';

    currentQuestionId += 1;

    for (let i = 0; i < questionData.choices.length; i++) {
        let choice = questionData.choices[i];
        let newElm = document.createElement("li");
        newElm.innerHTML = "<button id =\"" + choice + "\" class =\"btn btn-info btn-xs\">" + choice + "</button>";
        newElm.addEventListener("click", function(){
            if (choice !== questionData.answer) {
                document.getElementById("time").textContent -= 10;
            }

            if (currentQuestionId === quizQuestions.length){
                console.log("fin");
            } else {
                render();
            }
        });
        options.appendChild(newElm);
    }

    
}


