const fs = require('fs');
const zlib = require('zlib');
const ToLowerCase = require('./word_split_pipe');

const readStream = fs.createReadStream('input_stream.txt');
const writeStream = fs.createWriteStream('output_stream.txt');

readStream.on('data', (chunk) => {
    console.log(chunk.toString());
})

readStream.on('end', () => {
    console.log('Stream ended');
})

readStream.on('error', (err) => {
    console.log(err);
})

writeStream.on('close', () => {
    console.log('File written successfully');
})

writeStream.write('Hello World');
writeStream.write('Hello Toronto');
// writeStream.end();

readStream.pipe(writeStream);
readStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream('stream.txt.gz'))
readStream.pipe(new ToLowerCase()).pipe(writeStream);