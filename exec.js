//Execute child process
const cp = require("child_process");

//Is for sync commands
//cp.exec("start https://github.com/guidumasperes");
//cp.exec("start cmd");

//We can grab data from commands that return data
cp.exec("ls", (err, data) => {
    if (err) {
        throw err
    }
    console.log(data);
});