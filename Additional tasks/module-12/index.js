function* generatorFunction() {
    console.log("started 1st iterator");
    yield 1;
    console.log("started 2st iterator");
    yield 2;
}
const iterableGenerator = generatorFunction();

console.log(iterableGenerator.next());
console.log(iterableGenerator.next());
//------------------------------------------
const range = {
    from: 1,
    to: 12,
    *[Symbol.iterator]() {
        for (let i = this.from; i < this.to; i++) {
            yield i;
        }
    }
};

console.log("range ", [...range]);
//------------------------------------------
const psevdoArr = {
    from: 22,
    to: 25,
    lenght: 12
};

const collection = document.getElementsByTagName("div");
const arrFromCollection = [...collection];
const arrFromCollection2 = Array.from(psevdoArr);

console.log(arrFromCollection2);
//------------------------------------------
function* generatorArrFromTo(from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    }
}

console.log([...generatorArrFromTo(12, 18)]);

function* allNumbers() {
    yield* generatorArrFromTo(1, 3);
    yield* generatorArrFromTo(11, 12);
    yield* generatorArrFromTo(21, 25);
}

const all = allNumbers();

console.log(all.next());
console.log(all.next());
console.log(all.next());
console.log(all.next());
console.log(all.next());
console.log(all.next());
