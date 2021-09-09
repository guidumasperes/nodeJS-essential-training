const waitTime = 5000; //5000ms = 5s
const waitInterval = 500;
let currentTime = 0;

const formatLine = () => {
    process.stdout.clearLine(); //Clear last line
    process.stdout.cursorTo(0); //Move the cursor to the start of the line
};

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTime)*100);
    formatLine();
    process.stdout.write(`waiting... ${p}%`);
};

console.log(`Setting a ${waitTime/1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    formatLine();
    console.log("Done!")
};

//First arument is the function and the next is the time that should wait
//This function runs indefinitely, unless a clear is established
//This function returns the interval itself
const interval = setInterval(incTime, waitInterval);

//First argument is the function to invoke when the timer is completed and second is the time used
//for this delay
setTimeout(timerFinished, waitTime);