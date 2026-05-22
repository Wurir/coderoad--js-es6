'use strict'

var firstName = 'Bartek'
var lastName = 'Bogdanowicz'

var car = {
        brand: 'Toyota',
        model: 'Avensis',
    }

var me = {
    firstName: firstName,
    lastName: lastName,
    car: car
}

me.name = me.firstName + ' ' + me.lastName

console.log(me);
console.log(me.car.brand); //Toyota
console.log(me.car.model) //Avensis
console.log(me.name); // Bartosz Bogdanowicz