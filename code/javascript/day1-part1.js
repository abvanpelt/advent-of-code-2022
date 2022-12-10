const fs = require("fs");

// Load data from text file
fs.readFile("../../input/day1.txt", (err, data) => {
    if (err) throw err;

    let allCalories = data.toString().split(/\n/);

    let maxCalories = 0;
    let currentCalories = 0;

    for (const caloriesString of allCalories) {
        if (caloriesString === "") {
            // An empty string signifies a break between one elf and the next.
            // Check whether we need to update our current max calories,
            // then reset the calories of the current elf.
            maxCalories = Math.max(maxCalories, currentCalories);
            currentCalories = 0;
        } else {
            // Add more calories to the current elf's calories.
            currentCalories += parseInt(caloriesString);
        }
    }

    console.log("Calories carried by the highest calorie-carrying elf:", maxCalories);
});
