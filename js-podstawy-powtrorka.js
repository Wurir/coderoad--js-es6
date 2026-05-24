'use strict'

;(function () {

    var numbersAmount = 2

    function add(x, y) {
        return x + y
    }
    function showResult(sum) {
        if (sum) {

            alert('The result is: ' + sum)

        } else {

            if (sum === 0) {
                alert('The result is: ' + sum)
            } else {
                alert('Sorry, you provided not a number!')
            }

        }
    }
    function getNumberFromUser() {
        var userInput = prompt('Please type a number!')
        var number = Number(userInput)

        return number
    }

    var result = 0

    for (var i = 0; i < numbersAmount; i++) {
        var number = getNumberFromUser()
        result = add(result, number)
    }

    showResult(result)

})()