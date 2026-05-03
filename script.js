// ARGUMENTS KEYWORD

const showAllArguments = function(){
    console.log(arguments) // built in fn to show all arguments
}

showAllArguments(1, 'Mateusz', {})


// to nie zadziała i wyskoczy ReferenceError
const showAllArgumentsArrow = () => {
    console.log(arguments)
}
