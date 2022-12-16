import java.io.File
import java.lang.Integer.parseInt

var maxCalories = arrayOf(0, 0, 0)
var currentCalories = 0

// Load data from text file
File("../../input/day1.txt").forEachLine { caloriesString ->
    if (caloriesString == "") {
        // An empty string signifies a break between one elf and the next.
        // Check whether we need to update our current max calories,
        // then reset the calories of the current elf.
        if (currentCalories >= maxCalories[0]) {
            maxCalories[2] = maxCalories[1]
            maxCalories[1] = maxCalories[0]
            maxCalories[0] = currentCalories
        } else if (currentCalories >= maxCalories[1]) {
            maxCalories[2] = maxCalories[1]
            maxCalories[1] = currentCalories
        } else if (currentCalories >= maxCalories[2]) {
            maxCalories[2] = currentCalories
        }

        currentCalories = 0
    } else {
        // Add more calories to the current elf's calories.
        currentCalories += parseInt(caloriesString)
    }
}

val totalMaxCalories = maxCalories.reduce { accumulator, value -> accumulator + value }
println("Calories carried by the Top 3 highest calorie-carrying elves: $totalMaxCalories")