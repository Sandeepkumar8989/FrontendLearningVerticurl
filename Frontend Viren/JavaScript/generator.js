/*
function* generate() {
    console.log('invoked 1st time');
    console.log('invoked 3rd time');
    console.log('invoked 4th time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}
 
let gen = generate();
console.log(gen);
 
let result = gen.next();
console.log(result);
 
result = gen.next();
console.log(result);
 
result = gen.next();
console.log(result);
 
 
//------------------Example 2 ---------------------//
function* generatorFunc() {
 
    console.log("1. code before first yield");
    yield 100;
 
    console.log("2. code before the second yield");
    yield 200;
 
    console.log("3. code after the second yield");
}
 
const generator = generatorFunc();
 
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
 
 
//-------------------Example 3----------------------//
// generator function
function* generatorFunc() {
 
    // returns 'hello' at first next()
    let x = yield 'hello';
   
    // returns passed argument on the second next()
    console.log(x);
    console.log('some code');
 
    // returns 5 on second next()
    yield 5;
   
}
 
const generator1 = generatorFunc();
 
console.log(generator1.next());
console.log(generator1.next(['Viren','Akash','Karuna']));
console.log(generator1.next());
 
 
 
//---------------------Example 4:----------------------------//
//-------JavaScript Generator Function With return-----------//
// generator function
 
function* generatorFunc() {
 
    yield 100;
 
   return 123;
 
   console.log("2. some code before second yield");
    yield 200;
}
 
// returns generator object
const generator2 = generatorFunc();
 
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
 
*/
//-----------------Example 5:---------------------//
class Sequence {
 
    constructor( start = 0, end = 5, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
   
    * [Symbol.iterator]() {
        for( let index = this.start; index <= this.end; index += this.interval ) {
            yield index;
        }
    }
}
 
let oddNumbers = new Sequence(3, 10, 2);
 
for (const num of oddNumbers) {
    console.log(num);
}