const fs = require("fs");

// Load data from text file
fs.readFile("../input/day5.txt", (err, data) => {
    if (err) throw err;

    let rows = data.toString().split(/\n/);
    let rowIndex = 0;

    let stacks = [];

    // Parse stacks of crates
    while (rows[rowIndex] != "") {
        const row = rows[rowIndex];
        const regex = /\[[a-z]\]/gi;
        while ((match = regex.exec(row)) != null) {
            // Use the match index to calculate what stack the item belongs to.
            // Each stack is four characters wide.
            const stackIndex = match.index / 4;

            // Check if the current stack has been initialized.
            if (stacks[stackIndex] == undefined) {
                // Initialize the stacks up to (and including) the current stack's index
                let index = 0;
                while (index <= stackIndex) {
                    if (stacks[index] == undefined) {
                        // Insert an empty array for each stack that has not yet been initialized.
                        stacks.splice(index, 0, []);
                    }
                    index++;
                }
            }

            // Insert new items at the "bottom" of the stack
            stacks[stackIndex].unshift(match[0]);
        }

        rowIndex++;
    }

    rowIndex++;

    // Parse movements of crates across stacks
    for (let i = rowIndex; i < rows.length; i++) {
        const regex = /move (\d+) from (\d+) to (\d+)/;
        const match = rows[i].match(regex);

        const amount = parseInt(match[1]);
        const origin = parseInt(match[2]) - 1;
        const destination = parseInt(match[3]) - 1;

        let originStack = stacks[origin];
        let originIndex = originStack.length - amount;
        let cratesToMove = originStack.splice(originIndex);

        stacks[destination] = stacks[destination].concat(cratesToMove);
    }

    let topOfStacks = "";
    for (let i = 0; i < stacks.length; i++) {
        let stack = stacks[i];
        topOfStacks = topOfStacks.concat(stack[stack.length - 1]);
    }

    console.log("The top crate on all stacks:", topOfStacks);

    return 0;
});