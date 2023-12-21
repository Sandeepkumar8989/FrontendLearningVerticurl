class CoffeeMachine{
    _water = 0;

    constructor(power){
        this._power = power;
    }

    set waterAmount(value){
        if(value < 0){
            value = 0;
        }
        this._water = value;
    }

    get waterAmount(){
        return this._water;
    }

    get power(){
        return this._power;
    }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount =10;

console.log(`power is ${coffeeMachine.power}`);






//-------------------------------// Private

class CoffeeMachine_New{
    #waterLimit = 200;

    #fixWaterAmount(value){
        if (value < 0 ) return 0;
        if (value > this.#waterLimit && value <=2500) return this.#waterLimit;
        if (value > 250 && value < 500) return value;
    }

    set waterAmount(value){
        this.#waterLimit=  this.#fixWaterAmount(value);
    }

    get water(){
        return this.#waterLimit;
        }

        display(){
            return this.#fixWaterAmount(value);
        }
}

let coffeeMachine1 = new CoffeeMachine_New();

coffeeMachine1.waterAmount = 400;

console.log(coffeeMachine1.water);

let a = coffeeMachine1.display();

console.log('the water limit returning from private method: '+a);
