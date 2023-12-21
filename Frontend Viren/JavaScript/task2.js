class Vehicle {
    #capacity = 200;
    constructor(name) {
        this.name = name;
    }
    startEngine() {
        return `${this.name} can start and has capacity of ${this.#capacity}`;
    }

    stopEngine() {
        return `${this.name} can stop and has capacity of ${this.#capacity}`;
    }

    run() {
        return `${this.name} can run on manual mode`;
    }

    static brake() {
        return 'We are calling static method brake()';
    }

    callCapacity() {
        return `${this.name} has this much ${this.#capacity} capacity`;
    }
}

class Twowheeler extends Vehicle {
    constructor(name, tyre, engine) {
        super(name);
        this.tyre = tyre;
        this.engine = engine;
    }
}

class Threewheeler extends Vehicle {
    constructor(name, tyre, engine) {
        super(name);
        this.tyre = tyre;
        this.engine = engine;
    }
}

const sub = new Twowheeler('Bike', 2, '3000cc');
const child = new Threewheeler('Auto', 3, '6000cc');

console.log(sub.startEngine());
console.log(sub.stopEngine());
console.log(sub.run());
console.log(Twowheeler.brake());
console.log(sub.callCapacity());
console.log(`Tyre: ${sub.tyre}, Engine: ${sub.engine}`);


console.log(child.startEngine());
console.log(child.stopEngine());
console.log(child.run());
console.log(Threewheeler.brake());
console.log(child.callCapacity());
console.log(`Tyre: ${child.tyre}, Engine: ${child.engine}`);
