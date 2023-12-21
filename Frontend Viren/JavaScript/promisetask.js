
let employeeMap = new Map([
    [1, 'Sandeep'],
    [2, 'Rohindh'],
    [3, 'Stephen'],
    [4, 'Ayush'],
    [5, 'Jila'],
    [6, 'Viren']
]);

employeeMap.delete(5);

employeeMap.set(7, 'Leslie');
employeeMap.set(8, 'Jeevitha');


console.log(`Is the 4th employee there? ${employeeMap.has(4)}`);


console.log(`Is the 11th employee there? ${employeeMap.has(11)}`);


console.log("Employee IDs:");
for (let employeeId of employeeMap.keys()) {
    console.log(employeeId);
}

console.log("Employee Names:");
for (let employeeName of employeeMap.values()) {
    console.log(employeeName);
}

console.log(`8th Employee: ${employeeMap.get(8)}`);
console.log(`3rd Employee: ${employeeMap.get(3)}`);

employeeMap.clear();
console.log("Map cleared:", employeeMap);
