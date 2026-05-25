const inc = function () {
    this.number = this.number + 1
}

const status = function () {
    console.log('Current number is: ' + this.number)
}

const counter1 = {
    name: 'counter1',
    number: 0,
    inc: inc,
    status: status,
}

const counter2 = {
    name: 'counter2',
    number: 0,
    inc: inc,
    status: status,
}
