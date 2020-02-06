class Observer {
    constructor() {
        this._subscribers = [];
    }
    subscribe(cbFunc) {
        this._subscribers.push(cbFunc);
    }
    broadcast(param) {
        if (this._subscribers.length > 0) {
            this._subscribers.forEach(iterFunc => iterFunc(param));
        } else {
            console.log("erorr");
        }
    }
    unSubscribe(cbFunc) {
        this._subscribers.forEach((iterFunc, index) => {
            if (iterFunc === cbFunc) {
                this._subscribers.splice(index, 1);
            }
        });
    }
    get() {
        this._subscribers.forEach(iterFunc => console.log(iterFunc));
    }
}
const obsv = new Observer();

const cb1 = arg => {
    console.log(arg + " func1 OK");
};
const cb2 = arg => {
    console.log(arg + " func2 OK");
};
const cb3 = arg => {
    console.log(arg + " func3 OK");
};

obsv.subscribe(cb1);
obsv.subscribe(cb2);
obsv.subscribe(cb3);

obsv.broadcast("Event start!");

obsv.unSubscribe(cb2);

obsv.broadcast("Event start!");
