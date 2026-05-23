'use strict'

var me = {
    firstName: 'Bartek',
    lastName: 'Bogdanowicz',
}

var person1 = {
    firstName: 'Alicja',
    lastName: 'Kotowicz',
}

var people = [me, person1]

person1.firstName = 'Ala'

console.log(people);
 