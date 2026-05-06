const Counter = function(initialNumber = 0){
    this.number = initialNumber
}

Counter.prototype.inc = function(){
    this.number = this.number + 1
}

Counter.prototype.dec = function(){
    this.number = this.number - 1
}

Counter.prototype.showNumber = function(){
    console.log(this.number)
}

const counter1 = new Counter()
console.log(typeof Counter) //function 

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

    showNumber(){
        console.log(this.number)
    }
}

const counter2 = new CounterClass()

console.log(typeof CounterClass) //function

// class mozna nadpisac. Counter zostal przypisany do const wiec jest przed tym chroniony
// CounterClass = null