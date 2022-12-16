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
    val outcome = getOutcome(roundString[1])

    if (outcome == Outcome.LOSE) {
        // We lost.
        when (opponentShape) {
            Shape.ROCK -> totalScore += Outcome.LOSE + Shape.SCISSORS
            Shape.PAPER -> totalScore += Outcome.LOSE + Shape.ROCK
            Shape.SCISSORS -> totalScore += Outcome.LOSE + Shape.PAPER
        }
    } else if (outcome == Outcome.DRAW) {
        // Shapes are the same. It's a draw.
        totalScore += Outcome.DRAW + opponentShape;
    } else if (outcome == Outcome.WIN) {
        // We won.
        when (opponentShape) {
            Shape.ROCK -> totalScore += Outcome.WIN + Shape.PAPER
            Shape.PAPER -> totalScore += Outcome.WIN + Shape.SCISSORS
            Shape.SCISSORS -> totalScore += Outcome.WIN + Shape.ROCK
        }
    }
}

println("Total Score: $totalScore")

fun getShape(shapeString: String): Int {
    return when (shapeString) {
        "A" -> Shape.ROCK
        "B" -> Shape.PAPER
        else -> Shape.SCISSORS
    }
}

fun getOutcome(outcomeString: String): Int {
    return when (outcomeString) {
        "X" -> Outcome.LOSE
        "Y" -> Outcome.DRAW
        else -> Outcome.WIN
    }
}