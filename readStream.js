const fs = require("fs");

/*
console.log("type something...");
process.stdin.on("data", (data) => {
    console.log(`I read ${data.length - 1} characters of text`);
});
*/

//Reading streams
//First arg is the path to the file that should be read,second is the enconde
//With this function we read the stream chunk by chunk

//We can store in a variable what we read
let txt = "";

const readStream = fs.createReadStream("./assets/Readme.md", "UTF-8");
readStream.on("data", (data) => {
    console.log(`I read ${data.length - 1} characters of text`);
    txt += data;
});

//Streams also raise the end event, we can use to know when the read has been completed
readStream.on("end", () => {
    console.log("Finished reading file.");
    console.log(`In total I read ${txt.length - 1} character of text.`);
});

