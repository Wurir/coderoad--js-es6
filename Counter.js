const Counter = function(initialNumber = 0){
    this.number = initialNumber
}

Counter.prototype.inc = function(){
    this.number = this.number + 1
}

Counter.prototype.dec = function(){
    this.number = this.number - 1
}

const counter1 = new Counter()

class CounterClass{
    constructor(initialNumber){
        this.number = initialNumber
    }

    inc(){
        this.number = this.number + 1
    }

    dec(){
        this.number = this.number - 1
    }
}

const counter2 = new CounterClass()