'use strict'

// let is also scoped by functions

let name = 'Mateusz'

function sayName() {
    let name = 'Tadeusz'
    console.log(name)
}

console.log(name)

sayName()

// let is also scoped by blocks of code
for (let i = 0; i < 3; i++) {
    console.log(i)
}

try {
    console.log(i)
} catch (error) {
    console.error(error)
}

let lastName = 'Choma'
console.log(lastName)

// it is also a code block!
{
    let lastName = 'Kotowicz'
    console.log(lastName)
}

console.log(lastName)

// let can NOT be re declared
let x = 5
// if you uncomment this you will get error
// let x = 10


// let can be updated
let y = 5
y = 'Ala'

console.log(y)

// let can be only declared without initialization
// if you uncomment this you will get error
let z
console.log(z)

// hoisting
// q is hoisted to the top
// without initial value
// so ReferenceError it thrown
console.log(q)
let q