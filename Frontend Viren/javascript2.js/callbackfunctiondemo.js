//normal function
function greet(name,callback){

    console.log('hi my name is: ' + name);
    callback();
}

//call back function

function callMe(){
    
    console.log('I am call back function');
}

greet('sandeep',callMe) //calling from here  //html screen or mobile  //client calling

setTimeout(greet,2000,'sandy',callMe)//another call back function