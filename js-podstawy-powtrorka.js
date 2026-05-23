'use strict'

var func1 = console.log
var result1 = console.log('Hello!')

console.log(func1)
console.log(result1)

var x = 5
var y = 10

// add becomes a variable accessible in global scope
function add(x, y) {
    return x + y
}

var func2 = add
var result2 = add(1, 3)

console.log(func2)
console.log(result2)

// second argument is not defined
// so y is undefined
// and undefined + something === NaN
console.log(add(5)) // NaN