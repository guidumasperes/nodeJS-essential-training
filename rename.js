const fs = require("fs");

//Renaming a file
//First arg is the path and second the new name
fs.renameSync("./assets/colors.json", "./assets/colorData.json");

//You can use the rename function to move files
fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    //Removing a file
    fs.unlinkSync("./assets/alex.jpg");
}, 4000);