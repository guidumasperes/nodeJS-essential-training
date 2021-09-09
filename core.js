//Loading core modules
const path = require("path");
const {log} = require("util"); //You can destruct modules
const v8 = require("v8");

//Joining paths
const dirUploads = path.join(__dirname, "outerFolder",  "innerFolder");
console.log(dirUploads);

//Getting infos with date and time
log(path.basename(__filename));
log("^ name of the current file");

//Getting heap info
log(v8.getHeapStatistics());