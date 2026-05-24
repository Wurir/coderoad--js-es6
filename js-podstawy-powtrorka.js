'use strict'

// #1

// variables are declared first
// before code execution
// so it will have undefined value
console.log(a)

var a = 10

// #2

// function declarations 
// are hoisted whole
// so it works before declaration in code
console.log(add(1, 3))

function add(a, b) {
    return a + b
}

// #3

// function expressions behave like
// normal variables declarations
// so it will have undefined value
// and throw error because you cannot call undefined
console.log(addExpression(1, 3))

var addExpression = function (a, b) {
    return a + b
}
