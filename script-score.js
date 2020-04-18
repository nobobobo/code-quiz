// select DOM elements
let tableBody = document.querySelector("#tableBody");
let goBack = document.querySelector("#goBack");
let clearScore = document.querySelector("#clearScore");


// get scores from local storage
let scores = JSON.parse(localStorage.getItem("scores"));

// define compare function used to sort by using each object's score 
function compare(scoreA, scoreB) {
    let a = parseInt(scoreA.score);
    let b = parseInt(scoreB.score);

    if (a > b) return -1;
    if (a < b) return 1;

    return 0;
}

// if there's scores stored in local storage, load and sort it. Then call renderScores to display scores.
if (scores !== null) {
    scores.sort(compare);
    renderScores();
}


// event listener for clicking on goBack button
goBack.addEventListener("click", function () {
    location.href = "index.html";
});


// event listener for clicking on Clear All button
clearScore.addEventListener("click", clearScores);


// function: renderScores()
function renderScores() {
    if (scores !== null) {
        tableBody.innerHTML = "";
        for (let i = 0; i < scores.length; i++) {
            let name = scores[i].name;
            let score = scores[i].score;
            let newTr = document.createElement("tr");
            newTr.innerHTML = "<th scope \"row\">" + (i + 1) + "</th><td>" + name + "</td><td>" + score + "</td></tr>";
            tableBody.appendChild(newTr);
        }
    }
}

// clearScores() clears out local storage item and innter html contents of the table body. 
function clearScores() {
    localStorage.clear();
    tableBody.innerHTML = "";
}