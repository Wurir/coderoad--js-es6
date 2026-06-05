// const firstName = 'Bartek'
// const lastName = 'Bogdanowicz'

// const me = { firstName, lastName }

// console.log(me)

const me = {
    firstName: 'Bartek',
    lastName: 'Bogdanowicz',
    car: {
        brand: 'Opel',
        model: 'Insignia',
    },
}

// const firstName = me.firstName
// const lastName = me.lastName
// const notExistingProp = me.notExistingProp

const {
    firstName,
    lastName,
    notExistingProp,
} = me

// const { car } = me
// const { brand } = car

const { car: { brand } } = me

console.log(firstName)
console.log(lastName)
console.log(notExistingProp)
console.log(brand)