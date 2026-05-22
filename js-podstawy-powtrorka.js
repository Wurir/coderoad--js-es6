'use strict'

var me = {
    firstName: 'Bartek',
    lastName: 'Bogdanowicz',
    car: {
        brand: 'Toyota',
        model: 'Avensis',
    },
}

me.name = me.firstName + ' ' + me.lastName

console.log(me);
console.log(me.car.brand); //Toyota
console.log(me.car.model) //Avensis
console.log(me.name); // Bartosz Bogdanowicz