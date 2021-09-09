const fs = require("fs");

//Creating writable file streams 
//First arg is where gonna write the file and the second the encoding
const writeStream = fs.createWriteStream("./assets/myFiles.txt", "UTF-8");

//Use the writable stream like process.stdout
writeStream.write("Hello World!\n");
writeStream.write("Hello NodeJS!\n");

//We can write data to a readable stream
//process.stdout.write("Hello World!\n");
//process.stdout.write("Hello NodeJS!\n");

//Working with readable streams are made to work with writable streams
const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");
readStream.on("data", (data) => {
    writeStream.write(data);
});

process.stdin.pipe(writeStream);