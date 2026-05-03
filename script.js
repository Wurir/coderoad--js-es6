const sayHello = function(){
    console.log('Hello ' + this.firstName + ' ' + this.lastName + '!')
}

const me = {
    firstName: 'Bartek',
    lastName: 'Nazwisko',
    sayHello: sayHello
}
me.sayHello()

const person = {
    firstName: 'Ala',
    lastName: 'Kotowicz',
}

sayHello.call(person) // funkcja .call() przyjmuje nowy kontekt dla this
const boundSayHello = sayHello.bind(person) // .bind() przyjmuje kontekts dla this i zwraca nowa funkcje

boundSayHello()
