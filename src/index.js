console.log(Number.EPSILON)
console.log(Number.isNaN(NaN))
console.log(Number.isInteger(1.2))

console.log('ha'.repeat(10))
console.log('ha'.includes('h'))

const listAllArgs = function () {
    console.log(arguments)
    console.log(Array.from(arguments))
    Array.from(arguments).forEach((arg) => console.log(arg))
}

listAllArgs(1, 2, 3)

console.log(Array.of(5))
console.log(Array.of(1, 2, 3, 4, 5))

console.log((new Array(100)).fill(1))