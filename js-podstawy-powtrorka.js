'use strict'

var cat1 = {
    name: 'Fluffy',
    age: 3,
    'strings can be property names': 'Bye',
    123 : 123,
}

// var 123 = 'Hello'

console.log(cat1.name); //Fluffy
console.log(cat1.age); //3
console.log(cat1['strings can be property names']) //Bye

var stringPropertyName = 'strings can be property names'
console.log(cat1.stringPropertyName); // Bye

console.log(cat1[123]); //123
console.log(cat1['123']); //123

console.log(cat1);


console.log('---------------------------');


var cat2 = {}

cat2.name = 'Puszek'
cat2.age = 12

console.log(cat2);
