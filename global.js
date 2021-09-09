//require() function can be used to load other modules (it's python and vanilla js import)
const path = require("path");
console.log(`The filename is ${path.basename(__filename)}`);

//Not so fancy way to do the same as above:
//console.log(__dirname);
//console.log(__filename);