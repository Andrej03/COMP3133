const fs = require('fs');

console.log("----------- START ----------")

// Read a file async
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`Async : ${data.toString()}`)
});

// Read a file sync
const data = fs.readFileSync("input.txt")
console.log(`Sync : ${data.toString()}`)


// Async Promise
fs.promises.readFile("input.txt")
    .then((data => {
        console.log(`Async promise: ${data.toString()}`)
    }))
    .catch((err) => {
        console.log(err)
    })

console.log("----------- END ----------")
