const fs = require("fs");

const md = `
#This is a new file
We can write text to file with fs.write
`;

//Writing to a file
//First arg is the path, second is the text, third is the callback func 
fs.writeFile("./assets/nodes.md", md.trim(), (err) => {
    if (err) {
        throw err;
    }
    console.log("file saved!");
});