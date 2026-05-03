// only one expression in function body
const add = function(a, b){
    return a + b
}

//more than expression in function body
const validateAndAdd = function(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('Both args must be numbers')
    }
    return a + b
}

const addArrow = (a, b) => a + b

// RETURNING SIMPLE VALUE:

// regular function

const returnX = function(x){
    return x
}

// arrow function

const returnXArrow1 = (x) => x 
const returnXArrow2 = x => x //with 1 arg () are useless