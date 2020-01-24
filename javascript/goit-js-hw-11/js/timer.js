class CountdownTimer {
    constructor({ selector, targetDate }) {
        //this.selector = document.querySelector(selector);
        this.selector = selector;
        this.targetDate = targetDate;
        //this.dayTitle = this.selector.querySelector("[data-value=days]");
        // this.hoursHours = selector.querySelector("[data-value=hours]");
        // this.minsTitle = selector.querySelector("[data-value=mins]");
        // this.secsTitle = selector.querySelector("[data-value=secs]");
    }

    elem() {
        return document.querySelector(this.selector);
    }

    getFullInfo() {
        console.log(
            `
		  Selector ${this.selector}
		  Target Data ${this.targetDate}
		  Date ${this.elem()}
		`,
            this.elem()
        );
    }
}

const contTimer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2019")
});

contTimer.getFullInfo();
//--------------------------------------------------------------------
/*
const refs = {
    dayTitle: document.querySelector("[data-value=days]"),
    hoursHours: document.querySelector("[data-value=hours]"),
    minsTitle: document.querySelector("[data-value=mins]"),
    secsTitle: document.querySelector("[data-value=secs]")
};

const timer = {
    start() {
        const startTime = Date.now();
        this.timerId = setInterval(() => {
            const time = Date.now();
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);

            console.log(
                `time ${time}, Days ${days}, Hours ${hours}, Mins ${mins}, Second ${secs}`
            );
        }, 1000);
    }
};

//timer.start();

*/
