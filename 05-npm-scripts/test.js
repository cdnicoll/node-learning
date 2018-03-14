// to run$: node test
var assert = require("assert");
var math = require("./math");

assert(math.add(3, 4) === 7);
assert(math.subtract(3, 4) === -1);
assert(math.multiple(3, 4) === 12);

console.log("All tests passed!");