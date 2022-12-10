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
        let opponentString, outcomeString;
        [opponentString, outcomeString] = round.split(/\s/);

        let opponentShape = getShape(opponentString);
        let outcome = getOutcome(outcomeString);
        if (outcome === Outcome.LOSE) {
            // We lost.
            switch (opponentShape) {
                case Shape.ROCK:
                    totalScore += Outcome.LOSE + Shape.SCISSORS;
                    break;
                case Shape.PAPER:
                    totalScore += Outcome.LOSE + Shape.ROCK;
                    break;
                case Shape.SCISSORS:
                    totalScore += Outcome.LOSE + Shape.PAPER;
                    break;
            }
        } else if (outcome === Outcome.DRAW) {
            // Shapes are the same. It's a draw.
            totalScore += Outcome.DRAW + opponentShape;
        } else if (outcome === Outcome.WIN) {
            // We won.
            switch (opponentShape) {
                case Shape.ROCK:
                    totalScore += Outcome.WIN + Shape.PAPER;
                    break;
                case Shape.PAPER:
                    totalScore += Outcome.WIN + Shape.SCISSORS;
                    break;
                case Shape.SCISSORS:
                    totalScore += Outcome.WIN + Shape.ROCK;
                    break;
            }
        }
    }

    console.log("Total Score: ", totalScore);
});

function getShape(shapeString) {
    switch (shapeString) {
        case "A":
            return Shape.ROCK;
        case "B":
            return Shape.PAPER;
        case "C":
            return Shape.SCISSORS;
    }
}

function getOutcome(outcomeString) {
    switch (outcomeString) {
        case "X":
            return Outcome.LOSE;
        case "Y":
            return Outcome.DRAW;
        case "Z":
            return Outcome.WIN;
    }
}