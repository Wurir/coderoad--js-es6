const me = {
    name: 'Mateusz',
}

const { name: firstName } = me

console.log(firstName)

const createPerson = (name) => {
    return { name }
}

const Person = function (name) {
    this.name = name
}

const { name: person1Name } = createPerson('Ola')
const { name: person2Name } = new Person('Ala')

console.log(person1Name)
console.log(person2Name)