let scores = JSON.parse(localStorage.getItem("scores"));


function compare(scoreA, scoreB) {
    let a = scoreA.score;
    let b = scoreB.score;

    if (a > b) return -1;
    if (a < b) return 1;

    return 0;
}

scores.sort(compare);
