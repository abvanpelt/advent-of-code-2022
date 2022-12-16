import java.io.File

// Scoring = Shape + Outcome
// 1 point for Rock, 2 points for Paper, 3 points for Scissors
// 0 points for losing, 3 points for draw, 6 points for winning

companion object Shape {
    const val ROCK = 1
    const val PAPER = 2
    const val SCISSORS = 3
}

companion object Outcome {
    const val LOSE = 0
    const val DRAW = 3
    const val WIN = 6
}

var totalScore = 0

// Load data from text file
File("../../input/day2.txt").forEachLine { round ->
    val roundString = round.split("\\s".toRegex())
    val opponentShape = getShape(roundString[0])
    val selfShape = getShape(roundString[1])

    if (opponentShape == selfShape) {
        // Shapes are the same. It's a draw.
        totalScore += Outcome.DRAW + selfShape;
    } else {
        if (opponentShape == Shape.ROCK) {
            if (selfShape == Shape.PAPER) {
                // Paper beats Rock. Win!
                totalScore += Outcome.WIN + selfShape;
            } else {
                // Rocks beats Scissors. Lose.
                totalScore += Outcome.LOSE + selfShape;
            }
        } else if (opponentShape == Shape.PAPER) {
            if (selfShape == Shape.SCISSORS) {
                // Scissors beats Paper. Win!
                totalScore += Outcome.WIN + selfShape;
            } else {
                // Paper beats Rock. Lose.
                totalScore += Outcome.LOSE + selfShape;
            }
        } else if (opponentShape == Shape.SCISSORS) {
            if (selfShape == Shape.ROCK) {
                // Rock beats Scissors. Win!
                totalScore += Outcome.WIN + selfShape;
            } else {
                // Scissors beats Paper. Lose.
                totalScore += Outcome.LOSE + selfShape;
            }
        }
    }
}

println("Total Score: $totalScore")

fun getShape(shapeString: String): Int {
    return when (shapeString) {
        "A", "X" -> Shape.ROCK
        "B", "Y" -> Shape.PAPER
        else -> Shape.SCISSORS
    }
}