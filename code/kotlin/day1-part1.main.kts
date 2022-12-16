import java.io.File
import java.lang.Integer.parseInt

var maxCalories = 0
var currentCalories = 0

File("../../input/day1.txt").forEachLine { caloriesString ->
    if (caloriesString == "") {
        // An empty string signifies a break between one elf and the next.
        // Check whether we need to update our current max calories,
        // then reset the calories of the current elf.
        maxCalories = Math.max(maxCalories, currentCalories)
        currentCalories = 0
    } else {
        // Add more calories to the current elf's calories.
        currentCalories += parseInt(caloriesString)
    }
}

println("Calories carried by the highest calorie-carrying elf: $maxCalories")