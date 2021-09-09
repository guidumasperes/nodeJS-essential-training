var questions = [
    "What is your name ?",
    "What would you rather be doing ?",
    "What is your preferred programming language ?"
];

const ask = ( i = 0 ) => {
    process.stdout.write(`${questions[i]}`); //use stdout.write() to write on console
    process.stdout.write(` > `);
};

ask();

const answers = [];

process.stdin.on('data', data => { 
    answers.push(data.toString().trim()); //take data convert from bin to string and trim it

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
}); //use on() to listen for event on stdin, in this case is a input and enter

process.on("exit", () => {
    const [name, activity, lang] = answers
    console.log(`Go ${activity} ${name} you can write ${lang} code later!!!`);
});
