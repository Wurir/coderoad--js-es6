const sayHello = function(hello = 'Hello ', endmark = '!'){
    console.log(hello + this.firstName + ' ' + this.lastName + endmark)
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

sayHello.call(person, 'Czesc', '!!!') // funkcja .call() przyjmuje nowy kontekt dla this. Podajemy argumenty po obiekcie
const boundSayHello = sayHello.bind(person) // .bind() przyjmuje kontekts dla this i zwraca nowa funkcje

boundSayHello()

sayHello.apply(person, ['Czesc ', '!!!']) // działą tak samo jak .call, rozni sie jedynie przyjmowaniem argumentow, do apply dodajemy tablice z arg