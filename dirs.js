const fs = require("fs");

//Renaming directory
//fs.renameSync("./storage-files", "./storage");

//Before removing dir you need to remove all its content
fs.readdirSync("./storage").forEach(file => {
    fs.unlinkSync(`./storage/${file}`);
});

//Removing directory
fs.rmdir("./storage", err => {
     if (err) {
         throw err;
     }
     console.log("removed!");
});