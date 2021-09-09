const counter = require("./myModule");

console.log(counter.getCnt());
counter.inc();
counter.inc();
counter.inc();
console.log(counter.getCnt());
counter.dec();
console.log(counter.getCnt());