'use strict'

var names = ['Ala', 'Ola', 'Ela', 'Iza', 'Ada']
var numbers = [1, 2, 3, 4, 5, 123]

console.log(names[0])
console.log(names[1])
console.log(names[2]) // 2 < 3 so 2 < names.length

for (var i = 0; i < names.length; i++) {
    console.log(
        'For loop iteration no.: ' +
        (i + 1) +
        ' ' +
        names[i]
    )
}

var sum = 0

for (var j = 0; j < numbers.length; j++){
    sum = sum + numbers[j]
}

console.log('Sum of all numbers is: ' + sum)