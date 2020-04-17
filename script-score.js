// get scores from local storage and sort by comparing each object's score

let scores = JSON.parse(localStorage.getItem("scores"));

function compare(scoreA, scoreB) {
    let a = scoreA.score;
    let b = scoreB.score;

    if (a > b) return -1;
    if (a < b) return 1;

    return 0;
}

scores.sort(compare);


// select DOM elements

let tableBody = document.querySelector("#tableBody");

// call renderScores to display scores loaded from local storage.
renderScores();









// function: renderScores()
function renderScores() {
    tableBody.innerHTML = "";
    for (let i = 0; i < scores.length; i++) {
        let name = scores[i].name;
        let score = scores[i].score;
        let newTr = document.createElement("tr");
        newTr.innerHTML = "<th scope \"row\">" + (i + 1) + "</th><td>" + name + "</td><td>" + score + "</td></tr>";
        tableBody.appendChild(newTr);
    }
}

function clearScores(){
    localStorage.clear();
    renderScores();
}