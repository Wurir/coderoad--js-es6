const myOwnForEach = function(array, callback){

    for(let i = 0; i < array.length; i++){
        const element = names[i]
        const index = i
        const array = names
    }

    callback(element, index, array)
}

const names = ['Ala', 'Ola', 'Ela']

const myName = 'Bartek'

names.forEach(
    function(name, index, array){
        console.log(this)
    // console.log(`Hello ${name}, I\'m ${myName}.`)
}, {} // second argument as context for 'this'
)