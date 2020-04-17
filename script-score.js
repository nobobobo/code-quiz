// select DOM elements

let tableBody = document.querySelector("#tableBody");
let goBack = document.querySelector("#goBack");
let clearScore = document.querySelector("#clearScore");


// get scores from local storage and sort by comparing each object's score
let scores = JSON.parse(localStorage.getItem("scores"));

function compare(scoreA, scoreB) {
    let a = scoreA.score;
    let b = scoreB.score;

    if (a > b) return -1;
    if (a < b) return 1;

    return 0;
}

// sort obejct array, and call renderScores to display scores loaded from local storage.

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

function clearScores() {
    localStorage.clear();
    tableBody.innerHTML = "";
}