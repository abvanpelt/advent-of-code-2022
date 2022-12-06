const fs = require("fs");

// Scoring = Shape + Outcome
// 1 point for Rock, 2 points for Paper, 3 points for Scissors
// 0 points for losing, 3 points for draw, 6 points for winning

const Shape = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3
};

const Outcome = {
    LOSE: 0,
    DRAW: 3,
    WIN: 6
};

// Load data from text file
fs.readFile("../input/day2.txt", (err, data) => {
    if (err) throw err;

    let rounds = data.toString().split(/\n/);
    let totalScore = 0;
    for (const round of rounds) {
        let opponentString, selfString;
        [opponentString, selfString] = round.split(/\s/);

        let opponentShape = getShape(opponentString);
        let selfShape = getShape(selfString);
        if (opponentShape == selfShape) {
            // Shapes are the same. It's a draw.
            totalScore += Outcome.DRAW + selfShape;
        } else {
            if (opponentShape === Shape.ROCK) {
                if (selfShape === Shape.PAPER) {
                    // Paper beats Rock. Win!
                    totalScore += Outcome.WIN + selfShape;
                } else {
                    // Rocks beats Scissors. Lose.
                    totalScore += Outcome.LOSE + selfShape;
                }
            } else if (opponentShape === Shape.PAPER) {
                if (selfShape === Shape.SCISSORS) {
                    // Scissors beats Paper. Win!
                    totalScore += Outcome.WIN + selfShape;
                } else {
                    // Paper beats Rock. Lose.
                    totalScore += Outcome.LOSE + selfShape;
                }
            } else if (opponentShape === Shape.SCISSORS) {
                if (selfShape === Shape.ROCK) {
                    // Rock beats Scissors. Win!
                    totalScore += Outcome.WIN + selfShape;
                } else {
                    // Scissors beats Paper. Lose.
                    totalScore += Outcome.LOSE + selfShape;
                }
            }
        }
    }

    console.log("Total Score: ", totalScore);
});

function getShape(shapeString) {
    switch (shapeString) {
        case "A":
        case "X":
            return Shape.ROCK;
        case "B":
        case "Y":
            return Shape.PAPER;
        case "C":
        case "Z":
            return Shape.SCISSORS;
    }
}