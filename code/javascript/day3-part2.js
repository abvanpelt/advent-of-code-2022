const fs = require("fs");
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Load data from text file
fs.readFile("../../input/day3.txt", (err, data) => {
    if (err) throw err;

    let rucksacks = data.toString().split(/\n/);

    let priorities = 0;
    for (let i = 0; i < rucksacks.length; i += 3) {
        let rucksack1 = rucksacks[i];
        let rucksack2 = rucksacks[i + 1];
        let rucksack3 = rucksacks[i + 2];

        for (const item of rucksack1) {
            if (rucksack2.includes(item) && rucksack3.includes(item)) {
                priorities += characters.indexOf(item) + 1;
                break;
            }
        }
    }

    console.log("Priorities total:", priorities);
});