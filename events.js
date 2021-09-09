//Module to raise custom events
const events = require("events");

//Constructor to create new custom events
const emitter = new events.EventEmitter();

//Once events are being emitted we must handle them with on() function
//First arg is the name of the event and the second is the function handler
emitter.on("customEvent", (msg, user) => {
    console.log(`${user}: ${msg}`);
});

//The first argument is the name of the custom event
//The second is the data we want to pass to custom event
//emitter.emit("customEvent", "Hello World!", "Computer");
//emitter.emit("customEvent", "That's pretty cool huh?", "Panna");

//More complex example
process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye", "Process");
        process.exit();
    }
    emitter.emit("customEvent", input, "Terminal")
});