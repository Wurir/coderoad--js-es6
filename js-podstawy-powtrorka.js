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

firstName = 'Maciek' // strings are passed by value

car.model = 'Corolla' // zmieniam wartosc w referencji

console.log(me);
console.log(me.car.brand); //Toyota
console.log(me.car.model) //Avensis => w linii 21 zmienione na Corolla
console.log(me.name); // Bartosz Bogdanowicz