import java.io.File

val characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var priorities = 0

// Load data from text file
val data = File("../../input/day3.txt").readText()
val rucksacks = data.split("\n".toRegex())
for (i in rucksacks.indices step 3) {
    val rucksack1 = rucksacks[i]
    val rucksack2 = rucksacks[i + 1]
    val rucksack3 = rucksacks[i + 2]

    for (item in rucksack1) {
        if (rucksack2.contains(item) && rucksack3.contains(item)) {
            priorities += characters.indexOf(item) + 1;
            break;
        }
    }
}

println("Priorities total $priorities")