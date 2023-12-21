const { Console } = require("console");

function area(a) {

    if((a==='[a^z]' || a==='[A^Z]' || a==='[!^.]')){
        Console.log("Enter correct value")
    }
    return a * a;
}

module.exports = area;