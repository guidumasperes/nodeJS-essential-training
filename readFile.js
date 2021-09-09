const fs = require("fs");

//We can read the content of files sync
//First arg is the path second arg is the encoding
//const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
//console.log(text);

//We can read the content of files async
//First arg is the path second arg is the encoding and third it's the callback function
//To read binaries we do not supply the enconding
fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if (err) {
        throw err;
    }
    console.log("File contens read");
    console.log(text);
});