const fs = require('fs');

// Write Async callback
let dataToWrite = Buffer.from("Welcome to GBC");
fs.writeFile('output.txt', dataToWrite, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written callback successfully");
}); 

// Write Sync callback
fs.writeFileSync("output.txt", dataToWrite);

// Write Async Promise
fs.promises.writeFile("output.txt", dataToWrite)
    .then(() => {
        console.log("File written promise successfully");
    })
    .catch((err) => {
        console.error(err)
    })  
