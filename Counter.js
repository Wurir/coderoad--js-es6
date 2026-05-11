class Counter {
    constructor(initialNumber = 0) {
        this.number = initialNumber
    }

    inc(){
        this.number++
    }
}

class DecreasingCounter extends Counter{
    constructor(){
        super()
    }

    dec(){
        this.number--
    }
}

const counter1 = new Counter()
const counter2 = new DecreasingCounter()