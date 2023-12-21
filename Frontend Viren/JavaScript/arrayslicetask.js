let cities = ["Coimbatore", "Vellore", "Bangalore"];
console.log(cities);

cities.push("Mumbai", "Hyderabad");
console.log(cities);

console.log("Length of the array: " + cities.length);
console.log(cities);

cities.unshift('Delhi');
console.log(cities);

cities[1]= "Chennai";
console.log(cities);

cities.push("Kolkata");
console.log(cities);

cities.pop();
cities.pop();
console.log(cities);

console.log("Length of the array: " + cities.length);
console.log(cities);



let arr1 = ["Hello", "world"];
let arr2 = [1, 3, 9, 5, 4, 9, 6];


let arr3 = [...arr1, ...arr2];
console.log(arr3);

let arr4 = ['a', 'j', 't', 'r', 'f'];


let arr5 = [...arr3, ...arr4];
console.log(arr5);
