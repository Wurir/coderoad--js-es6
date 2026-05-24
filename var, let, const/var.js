'use strict'

// var is only scoped by functions

var name = 'Mateusz'

function sayName() {
    var name = 'Tadeusz'
    console.log(name)
}

console.log(name)

sayName()

for (var i = 0; i < 3; i++) {
    console.log(i)
}

// i is declared in global scope!
console.log(i)


// var can be re declared
var x = 5
var x = 10

console.log(x)

// var can be updated
var y = 5
y = 'Ala'

console.log(y)

// var can be only declared without initialization
// if you uncomment this you will get error
console.log(z)
var z

// hoisting
// q is hoisted to the top
// with initial undefined value
console.log(q)
var q