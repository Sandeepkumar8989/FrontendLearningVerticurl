// function area(prinipal,rateofinterest)
// {
//   let result = principal * breadth;
//   console.log('the area of rectangle is :'+ result);
  
// }
// area(10,20);

// 1
function calculateSimpleInterest(p, roi, t) {
    
    let SimpleInterest = (p * roi * t) / 100;
    return "SimpleInterest:" + SimpleInterest;
}
console.log(calculateSimpleInterest(1000,7,2));

// 2
let calculateSimpleInterest = function(p, roi, t) {
    let SimpleInterest = (p * roi * t) / 100;
    return "SimpleInterest:" + SimpleInterest;
};
console.log(calculateSimpleInterest(1000, 7, 2));

// 3
let calculateSimpleInterest = (p, roi, t) => {
    let SimpleInterest = (p * roi * t) / 100;
    return "SimpleInterest:" + SimpleInterest;
};

console.log(calculateSimpleInterest(1000, 7, 2));




function area(length,breadth){
    return length*breadth;
}
let perimeter = (length) => length;

function calculate(a, b=20,c=b*area(10,20), d=c+perimeter(30)){
    return a+b+c+d;
}

console.log(calculate(20));
console.log(calculate(40, 50, 70, 60));
console.log(calculate(40, 50));
