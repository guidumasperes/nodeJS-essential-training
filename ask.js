//Load readline module
const readline = require("readline");

//To work with readline we must create an interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); //Supply this function with an object describing output/input type of string
//With this we can ask questions

//First argument is the question
//Answer is the argument for the callback function(second argument)
//When execute this code wait for the answer before invoke callback function
rl.question("How do you like Node ?", answer => {
    console.log(`Your answer: ${answer}`);
});