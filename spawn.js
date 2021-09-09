const cp = require("child_process");

//We can launch writen modules by us
const questionApp = cp.spawn("node", ["askQuestions.js"]);

//Look for any spitted data by question.js
questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

//Listen when the question app closes
questionApp.on("close", () => {
    console.log(`question app process exited`);
});

//We can answer questions using:
questionApp.stdin.write("Panna \n");
questionApp.stdin.write("Ozis \n");
questionApp.stdin.write("Learn a back-end framework \n");