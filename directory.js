const fs = require("fs");

//Checking if a directory already exists
if (fs.existsSync("storage-files")) {
    console.log("Already exists!");
} else {
    //Creating directories
    //First arg is the name of the directory, second is the callback func 
    fs.mkdir("storage-files", (err) => {
        if (err) {
            throw err;
        }
        console.log("directory created!");
    });
}