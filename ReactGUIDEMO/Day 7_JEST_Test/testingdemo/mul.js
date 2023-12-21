function mul(a, b) {
    if((a==='[a^z]' || a==='[A^Z]' || a==='[!^.]') && (b==='[a^z]' || b==='[A^Z]' || b==='[!^.]')){
        Console.log("enter only values")
    }
    return a * b;
}

module.exports = mul;