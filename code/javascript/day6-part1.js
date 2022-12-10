const fs = require("fs");

// Load data from text file
fs.readFile("../../input/day6.txt", (err, data) => {
    if (err) throw err;

    let dataString = data.toString();
    for (let i = 0; i < dataString.length; i++) {
        let char1 = dataString[i];
        let char2 = dataString[i + 1];
        let char3 = dataString[i + 2];
        let char4 = dataString[i + 3];

        if (char1 != char2 && 
            char1 != char3 && 
            char1 != char4 && 
            char2 != char3 && 
            char2 != char4 && 
            char3 != char4) {
            console.log(`Found a match at index ${i + 3}! ${char1}-${char2}-${char3}-${char4}`);
            break;
        }
    }

    return 0;
});