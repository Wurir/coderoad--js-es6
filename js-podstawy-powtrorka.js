'use strict'

function add(a, b) {
    return a + b
}

var userInput1 = prompt('Please type a number!')
var number1 = Number(userInput1)

var userInput2 = prompt('Please type second number!')
var number2 = Number(userInput2)

var sum = add(number1, number2)

if (sum) {

    alert('The result is: ' + sum)

} else {

    if (sum === 0) {
        alert('The result is: ' + sum)
    } else {
        alert('Sorry, you provided not a number!')
    }

}