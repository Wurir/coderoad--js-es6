const add = ([a, b]) => a + b

const numbers = [1, 3]

console.log(add(numbers))

const me = {
    name: 'Mateusz',
    lastName: 'Choma',
}

const meEntries = Object.entries(me)

console.log(meEntries)

const meLowerCase = (
    meEntries
        .map(([key, value]) => {
            return [key, value.toLowerCase()]
        })
        .reduce(
            (r, [key, value]) => {
                return {
                    ...r,
                    [key]: value,
                }
            },
            {}
        )
)

console.log(meLowerCase)