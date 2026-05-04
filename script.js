const myOwnForEach = function (array, callback) {

    for (let i = 0; i < array.length; i++) {
        const element = names[i]
        const index = i
        const array = names

        callback(element, index, array)
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