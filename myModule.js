//Exports any type or values
//module.exports = "panna";

//Within a every js file all the variables are scoped to that module
let cnt = 0;

const inc = () => ++cnt;
const dec = () => --cnt; 
const getCnt = () => cnt;

//Now we can export this function in an object
module.exports = {
    inc,
    dec,
    getCnt
};