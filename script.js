const myOwnForEach = function (array, callback, thisArg) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const index = i
        const originalArray = names

        callback.call(thisArg, element, index, originalArray)
    }
}

const names = ['Ala', 'Ola', 'Ela']

window.myName = 'Bartek from window'

const greeter = function (name, index, array) {
    // console.log(this)
    console.log(`Hello ${name}, I\'m ${this.myName}.`)
}

names.forEach(greeter)

myOwnForEach(names, greeter)

names.forEach(greeter, {myName: 'Bartek from "thisArg"'})
myOwnForEach(names, greeter, {myName: 'Bartek from "thisArg"'})