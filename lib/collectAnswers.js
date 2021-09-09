//Creating our own module
const readline = require("readline");
const { EventEmitter } = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Export this function as a module
//You can set done to a dummy function
module.exports = (questions, done = f => f) => {
    const answers = [];
    const [firstQuestion] = questions; //Destructuring questions array 
    const emitter = new EventEmitter();
    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            emitter.emit("completed", answers);
            done(answers);
        }
    }
    rl.question(firstQuestion, questionAnswered);
    return emitter;
}