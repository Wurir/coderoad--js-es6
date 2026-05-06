const Counter = function(){
    this.number = 0
}

Counter.prototype.inc = function(){
    this.number = this.number + 1
}

const counter1 = new Counter()