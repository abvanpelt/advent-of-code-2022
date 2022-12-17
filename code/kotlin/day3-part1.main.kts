import java.io.File

val characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var priorities = 0

// Load data from text file
File("../../input/day3.txt").forEachLine { rucksack ->
    val compartment1 = rucksack.substring(0, rucksack.length / 2);
    val compartment2 = rucksack.substring(rucksack.length / 2);

    for (item in compartment1) {
        if (compartment2.contains(item)) {
            priorities += characters.indexOf(item) + 1;
            break;
        }
    }
}

println("Priorities total: $priorities")