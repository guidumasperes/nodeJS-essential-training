//Require module to deal with directories
const { deepStrictEqual } = require("assert");
const fs = require("fs");

//Get contents from directory
//This read is synchronous
//const files = fs.readdirSync("./assets");
//To read asynchronously, we use:
//The first arg is the path and the second is the callback function to deal with reading
//The first arg of the callback function is any errors that have been thrown, the second are the files
console.log("start reading files.");
fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    console.log("reading...");
    //Show them
    console.log(files);
    console.log("...finished");
});
console.log("finished reading files.");