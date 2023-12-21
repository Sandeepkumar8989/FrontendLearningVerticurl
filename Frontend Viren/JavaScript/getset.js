class Person{
	constructor(name){
        this.name = name;
	    
    }
 	
     greet(){
    console.log(`Hello ${this.name}`);
    }
    
    get personName() {
    return this.name;
    }
   
    set personName(x){
        this.name=x;
    }
}

//creating an object 
const person1 = new Person('sandeep');
const person2 = new Person('Daniel');

console.log(person1.name);
console.log(person2.name);

let person3 = new Person('Sandy');

person1.greet();
person2.greet();
person3.greet();



