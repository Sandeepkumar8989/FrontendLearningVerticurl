count = true;
let countvalue = new Promise(function(resolve,reject)
{
    if(count){
        resolve("there is count value")
    }else{
        reject('there is no count value')
    }
});

console.log(countvalue);