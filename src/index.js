// const name1 = 'Ola'
// const name2 = 'Ala'
// const name3 = 'Ela'

// const names = [name1, name2, name3]

// console.log(names)
// console.log(name1)
// console.log(name2)
// console.log(name3)

const names = ['Ala', 'Ola', 'Ela']

// const name1 = names[0]
// const name2 = names[1]
// const name3 = names[2]

const [name1, name2, name3] = names

console.log(names)
console.log(name1)
console.log(name2)
console.log(name3)

const numbers = [1, 2, 3]

// const three = numbers[2]

const [, , three] = numbers

console.log(three)