Number.prototype[Symbol.iterator] = function() {
    return {
        current: 0,
        last: this,
        next() {
            return {
                value: this.current++,
                done: this.current > this.last
            };
        }
    };
};

const a = 5;
for (let i of a) {
    console.log(i);
}
//---------------------------------------------
function* generatorF() {
    while (true) {
        console.log(yield);
    }
}

const g = generatorF();

g.next();
g.next("test");
g.next("ama");
