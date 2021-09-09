//Process object
//console.log(process.pid);
//console.log(process.versions.node);

//Grabs arguments from command line
//console.log(process.argv);
//You can use array destruction to grab values
//const [,,fullName] = process.argv;
//console.log(fullName);

//We can pass arguments through flags and grab it with function grab()
const grab = flag => {
    let nextIndex = process.argv.indexOf(flag) + 1;
    return process.argv[nextIndex]; 
};

const greeting = grab("--greeting");
const user = grab("--user");

console.log(greeting, user);
