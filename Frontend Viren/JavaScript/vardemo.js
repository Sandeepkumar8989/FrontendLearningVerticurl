let promise  = new Promise(function(resolve,reject)
{
    const a= "Monday";
    const b= "Monday1";

    if(a==b){
        resolve();
    }
    else{
        reject();
    }
});

promise.then(function(){
    console.log("yes both variable are same and resoloved.")
})
.catch(function(){
    console.log("both are different>>>.")
})

let pro= new Promise(function(resolve,reject){
    reject("you are in the reject state");
});

pro.then(function(result){
    console.log(result);
})
.catch(function(result){
    console.log(result)
})
