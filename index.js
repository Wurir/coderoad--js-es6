import * as math from './math.js'

console.log(typeof math)
console.log(math)
console.log(math.add === math.default)

const add = math.default
const addNamed = math.add
const substract = math.substract

console.log(add(3, 3));
console.log(addNamed(2, 2));
console.log(substract(2, 2));

