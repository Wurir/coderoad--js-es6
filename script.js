const task1 = {
    text: 'Wynieś śmieci',
    isCompleted: false,
}

const newTask1 = {
    text: task1.text,
    isCompleted : task1.isCompleted,
    date: new Date()
} // nieprzjemny sposob
console.log(newTask1);


const newTaskAssign = Object.assign(
    {}, // podaje pusty obiekt do ktorego zostana przypisan wartosci
    task1, // podaje obiekt, ktory wyladuje w obiekcie podanym na poczatku
    {date: new Date()} // tutaj tez podaje obiekt z wartoscia, ktora zostanie dodana do nowo utworzoneg obiektu
)
console.log(newTaskAssign);

console.log(task1 === newTask1); // false
console.log(task1 === newTaskAssign); // false

