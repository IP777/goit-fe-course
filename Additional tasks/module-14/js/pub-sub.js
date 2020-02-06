class PubSub {
    constructor() {
        this.subscribers = {};
        this.state;
    }

    on(event, fn) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(fn);
    }

    emit(event, ...params) {
        if (!this.subscribers[event]) {
            return;
        }
        this.subscribers[event].forEach(fn => {
            fn(...params);
        });
    }
    off(event, fn) {
        this.subscribers[event] = this.subscribers[event].filter(
            sub => sub !== fn
        );
    }
}
