function sub(a, b) {
    if((a==='[a^z]' || a==='[A^Z]' || a==='[!^.]') && (b==='[a^z]' || b==='[A^Z]' || b==='[!^.]')){
        console.log("Enter a valid number")
    }
    
    return a - b;
}

module.exports = sub;