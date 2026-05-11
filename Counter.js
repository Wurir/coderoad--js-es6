class Counter {

}

const counter1 = new Counter() // mozna zdefiniowac klase bez cnstructor


class Counter2 {
    number = 0

    inc(){
        this.number = this.number + 1
    }
} // to tez zadziala, ale nie jest poprawnym JS
