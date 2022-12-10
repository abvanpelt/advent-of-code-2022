const fs = require("fs");
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Load data from text file
fs.readFile("../../input/day3.txt", (err, data) => {
    if (err) throw err;

    let rucksacks = data.toString().split(/\n/);
    let priorities = 0;
    for (const rucksack of rucksacks) {
        let compartment1 = rucksack.slice(0, rucksack.length / 2);
        let compartment2 = rucksack.slice(rucksack.length / 2);

        for (const item of compartment1) {
            if (compartment2.includes(item)) {
                priorities += characters.indexOf(item) + 1;
                break;
            }
        }
    }

    console.log("Priorities total:", priorities);
});