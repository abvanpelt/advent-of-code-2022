const fs = require("fs");

// Load data from text file
fs.readFile("../input/day6.txt", (err, data) => {
    if (err) throw err;

    let dataString = data.toString();
    for (let i = 0; i < dataString.length; i++) {
        let charString = "";
        for (let j = i; j < i + 14; j++) {
            charString = charString.concat(dataString[j]);
        }

        let charSet = new Set(charString);
        if (charSet.size == 14) {
            console.log(`Found a match at index ${i + 14}! ${charString}`);
            break;
        }
    }

    return 0;
});