const fs = require('fs');

fs.stat('input.txt', (err, stat) => {
    console.log(stat.isDirectory())
    console.log(stat.isFile())
})

fs.exists('output.txt', (flag) => {
    if (flag) {
        fs.unlinkSync('output.txt')
        console.log('File deleted successfully')
    }else {
        console.log('File not deleted successfully')
    }
})