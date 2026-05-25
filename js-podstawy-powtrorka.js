const makeCounter = function () {

    let number = 0

    const inc = function () {
        number = number + 1
    }

    const status = function () {
        console.log('Current number is: ' + number)
    }

    return {
        inc: inc,
        status: status,
    }

}

const counter1 = makeCounter()
const counter2 = makeCounter()