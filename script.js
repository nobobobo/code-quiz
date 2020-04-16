// make a list of objects representing the quiz data
// remember that when we want to organize data in JS we typically use objects
let quizQuestions = [
    {
      question: "is javascript cool?",
      choices: ["yes", "no"],
      answer: "yes",
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
  let currentQuestion = 0;
  function render() {
    let questionData = quizQuestions[currentQuestion];
    $("#question").text(questionData.question);
    $("#options").empty();
    for (let choice of questionData.choices) {
      $("#options").append($("<li>").text(choice))
    }
    currentQuestion += 1;
    if (currentQuestion === questionData.length) {
        currentQuestion = 0;
    }
  }
  $("#submit").click(render)
render()