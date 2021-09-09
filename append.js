const colorData = require("./assets/colors.json");
const fs = require("fs");

//Loop through the arry using forEach
colorData.colorList.forEach(c => {
    //Let's append the colors to our storage-files
    //First arg is the path second the template literal and third the callback function on the append
    //is complete
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, (err) => {
        if (err) {
            throw err;
        }
        console.log("color appended!");
    });
});