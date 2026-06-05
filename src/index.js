const name = 'Bartosz'
const lastName = 'Bogdanowicz'
const carPropName = 'myCar'

const obj = {
    // shorthand properties
    name,
    lastName,
    // methods
    sayHello() {
        console.log('Hello ' + this.name + ' ' + this.lastName)
    },
    // computed properties
    [carPropName]: {
        brand: 'Toyota',
    },
}

console.log(obj)

obj.sayHello()