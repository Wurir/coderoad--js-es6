'use strict'

var names = ['Ala', 'Ola', 'Ela']

var objNames = {
    0: 'Ala',
    1: 'Ola',
    2: 'Ela',
}


console.log(names);
console.log(names.length); // 3
console.log(names[0]); // Ala

names[3] = 'Iza'
console.log(names.length); // 4

console.log(objNames);
console.log(objNames.length); // undefined
