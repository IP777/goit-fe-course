export function task5() {
    class Car {
        static getSpecs(car) {
            console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}  
            `);
        }

        constructor({ price, maxSpeed }) {
            this.speed = 0;
            this._price = price;
            this.maxSpeed = maxSpeed;
            this.isOn = false;
            this.distance = 0;
        }

        get price() {
            return this._price;
        }

        set price(newPrice) {
            this._price = newPrice;
        }

        turnOn() {
            this.isOn = true;
        }

        turnOff() {
            this.isOn = false;
            this.speed = 0;
        }

        accelerate(value) {
            if (this.speed <= this.maxSpeed) {
                this.speed += value;
            } else {
                console.log(`нельзя привысить максимально допустимую скорость`);
            }
        }

        decelerate(value) {
            if (this.speed > 0) {
                this.speed -= value;
            } else {
                console.log(`скорость менше 0`);
            }
        }

        drive(hours) {
            if (this.isOn) {
                this.distance = hours * this.speed;
            } else {
                console.log(`машина не заведена`);
            }
        }
    }

    //Вызов функции===========================================================
    const mustang = new Car({ maxSpeed: 200, price: 2000 });

    //mustang.car();

    mustang.turnOn();
    mustang.accelerate(50);
    mustang.drive(2);

    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

    mustang.decelerate(20);
    mustang.drive(1);
    mustang.turnOff();

    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

    console.log(mustang.price); // 2000
    mustang.price = 4000;
    console.log(mustang.price); // 4000
}
