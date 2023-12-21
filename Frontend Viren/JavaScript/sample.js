class CoffeeMachine_New {
    #waterLimit = 200;         //private variable
     #fixWaterAmount(value) {   //private method
      if (value < 0) return 0;
      if (value > this.#waterLimit && value <=250) return this.#waterLimit;
      if (value > 250 && value < 500) return value;
    }
    set waterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
    get water(){
        return this.#waterLimit;
    }
    display()
    {
      return this.#fixWaterAmount(300);
    }
  }
 
  let coffeeMachine1 = new CoffeeMachine_New();
  coffeeMachine1.waterAmount = 400;  
  console.log(coffeeMachine1.water);  // this will access private variable using get method
  let a = coffeeMachine1.display(); //this will access the private method using the display method
  console.log('the water limit returning from private method: ' + a)
