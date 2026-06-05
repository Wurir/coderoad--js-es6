const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]

const numbers = [...numbers1, ...numbers2]

console.log(numbers)

const add = (a = 0, b = 0) => a + b

console.log(add())

// const logAllArgs = function () {
//     for (let index = 0; index < arguments.length; index++) {
//         console.log(arguments[index])
//     }
// }

const logAllArgs = (...args) => args.forEach((arg) => console.log(arg))

logAllArgs(1, 2, 'Ala', [1, 2])

const logAllArgsAndHighlightFirst = (firstArg, ...restOfArgs) => {
    console.log('This is first arg', firstArg)
    logAllArgs(...restOfArgs)
}

logAllArgsAndHighlightFirst({ a: 1 }, { b: 2 }, 3, 4)

const minValOfArray = (arr) => Math.min(...arr)

console.log(minValOfArray([-1, 0, 2, -100]))