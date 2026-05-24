'use strict'

// const is also scoped by functions

const name = 'Mateusz'

function sayName() {
    const name = 'Tadeusz'
    console.log(name)
}

console.log(name)

sayName()

// it cant be done because const cant be updated!
try {
    for (const i = 0; i < 3; i++) {
        console.log(i)
    }
} catch (error) {
    console.error(error)
}

// const is also scoped by blocks of code
try {
    console.log(i)
} catch (error) {
    console.error(error)
}

const lastName = 'Choma'
console.log(lastName)

// it is also a code block!
{
    const lastName = 'Kotowicz'
    console.log(lastName)
}

console.log(lastName)

// const can NOT be re declared
const x = 5
// if you uncomment this you will get error
// const x = 10

// const can NOT be updated
try {
    const y = 5
    y = 'Ala'

    console.log(y)
} catch (error) {
    console.error(error)
}

const array = []
array[0] = 0
array[1] = 1
array[2] = 2

console.log(array)

// const can not be only declared without initialization
// if you uncomment this you will get error
// const z
// console.log(z)

// hoisting
// q is hoisted to the top
// without initial value
// so ReferenceError it thrown
console.log(q)
const q = 5