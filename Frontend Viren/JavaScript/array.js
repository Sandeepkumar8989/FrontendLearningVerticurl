//--------------------------Push-------------------------------
let dailyActivities1 = ['eat', 'sleep'];
 
// add an element at the end
dailyActivities1.push('exercise');
console.log(dailyActivities1);
 
//add an element at the start
dailyActivities1.unshift('work');
 
console.log(dailyActivities1);
 
dailyActivities1.shift();
console.log(dailyActivities1);
 
// this will add the new element 'exercise' at the 2 index
dailyActivities1[2] = 'enjoy';
console.log(">>>>" + dailyActivities1);
 
// this will add the new element 'exercise' at the 3 index
dailyActivities1[3] = 'walking';
console.log("------"+ dailyActivities1);
 
//--------------------------Pop-------------------------------
let dailyActivities2 = ['work', 'eat', 'sleep', 'exercise'];
 
// dailyActivities2.sort();
// console.log(dailyActivities2);

const d=dailyActivities2.indexOf('eat');
console.log(d);

// remove the last element
dailyActivities2.pop();
console.log(dailyActivities2);
 
// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities2.pop();
 
//get removed element
console.log(removedElement);
console.log(dailyActivities2);
 
// remove the first element
dailyActivities2.shift();
console.log(dailyActivities2);
 
// this gives the total number of elements in an array
console.log(dailyActivities2.length);