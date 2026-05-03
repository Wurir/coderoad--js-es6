// ARGUMENTS KEYWORD

const showAllArguments = function(){
    console.log(arguments) // built in fn to show all arguments
}

showAllArguments(1, 'Mateusz', {})


// to nie zadziała i wyskoczy ReferenceError
const showAllArgumentsArrow = () => {
    console.log(arguments)
}

// CONSTRUCTOR FUNCTIONS

const Greeter = function(name) {
    this.name = name
}

Greeter.prototype.sayHello = function(){
    console.log('Hello ' + this.name)
}

const greeter1 = new Greeter('Mateusz')
greeter1.sayHello()


// Arrow fn cannot be constructor bcuz of lexical scope 'this'
const GreeterArrow = (name) => {
    this.name = name
}

    // this will throw TypeError: Cannot set property 'sayHello' of undefined
// GreeterArrow.prototype.sayHello = function() {
//     console.log('Hello ' + this.name)
// }