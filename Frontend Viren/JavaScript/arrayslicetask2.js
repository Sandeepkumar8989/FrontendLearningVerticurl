let fruits = ["Apple", "Orange", "Pear", "kiwi", "banana", "melon", "strawberry", "mango", "chiku", "grapes", "small-grapes"];

console.log("Even index fruits:");
for (let i = 0; i < fruits.length; i += 2) {
    console.log(fruits[i]);
}

console.log("\nOdd index fruits:");
for (let i = 1; i < fruits.length; i += 2) {
    console.log(fruits[i]);
}

console.log("\nFruits at multiple of 3 index:");
for (let i = 0; i < fruits.length; i += 3) {
    console.log(fruits[i]);
}

console.log("\nFirst, sixth, and last fruits together:");
console.log(fruits[0], fruits[5], fruits[fruits.length - 1]);