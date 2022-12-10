const fs = require("fs");

// Load data from text file
fs.readFile("../../input/day4.txt", (err, data) => {
    if (err) throw err;

    let assignments = data.toString().split(/\n/);

    let overlaps = 0;
    for (const assignmentPair of assignments) {
        const [assignment1, assignment2] = assignmentPair.split(/,/g);

        const start1 = parseInt(assignment1.split('-')[0]);
        const end1 = parseInt(assignment1.split('-')[1]);

        const start2 = parseInt(assignment2.split('-')[0]);
        const end2 = parseInt(assignment2.split('-')[1]);

        if (start1 >= start2 && start1 <= end2) {
            // start1 is somewhere within the range of [start2, end2]
            overlaps++;
        } else if (end1 >= start2 && end1 <= end2) {
            // end1 is somewhere within the range of [start2, end2]
            overlaps++;
        } else if (start2 >= start1 && start2 <= end1) {
            // start2 is somewhere within the range of [start1, end1]
            overlaps++;
        } else if (end2 >= start1 && end2 <= end1) {
            // end2 is somewhere within the range of [start1, end1]
            overlaps++;
        }
    }

    console.log("Assignment overlaps:", overlaps);
});