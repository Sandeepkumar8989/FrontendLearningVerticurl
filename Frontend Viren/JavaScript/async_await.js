
//----Example 3--//
let promisel = new Promise(function (resolve, reject) {
    setTimeout(function() {
        resolve('Promise resolved example 2');
    }, 4000);
});

async function asyncFunc1() {
    let result = await promisel;
    console.log(result);
    console.log('hello');
}

asyncFunc1();


//--Example -4-//

const promiseToDo = () => {

    return new Promise(resolve => {
    
    setTimeout(() => resolve('I did something'), 7000) })
    }


    const promiseBye =() => {
        return new Promise(resolve =>{
            setTimeout(() => resolve('because i can sit idle'),3000)
        })
    }
    const watchOver = async () => {
    
    const something = await promiseToDo()
    const a= await promiseBye()
    
    return something + '\nand I watched'
    
    }
    
    const watchOverSomeone = async () => { 
      const something = await watchOver()
    
    return something + '\nand I played as well'
    
    }
    
    watchOverSomeone().then(res => { 
      console.log(res)
    
    })

/*async function f() {
    console.log('Async function.');
    return Promise.reject(1);
}
 
f();
 
 
//-----------------------------------------------------------//
 
const doSomethingAsync = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 3000)  // 3 secs
    })
  }
 
  /* When you want to call this function you prepend await, and the calling code will
  stop until the promise is resolved or rejected*/
  /*
  const doSomething = async () => {
    console.log('we are inside doSomething() function.....')
    console.log(await doSomethingAsync())   // it will reach here after 3 secs
   
  }
 
console.log('Before')
doSomething()
console.log('After')
console.log('After>>>>>>')
 
 
//-----------Await()------- Example 2-------------------------
 
let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved example 2')}, 6000);    // 4 secs
});
 
// async function
async function asyncFunc1() {
    console.log("before the await >>>>")
    // wait until the promise resolves
    let result = await promise1; // it will wait till the promise1 value is either reoslved or rejected
    console.log("after the await ..........")
 
    console.log(result);
    console.log('hello');
}
 
// calling the async function
asyncFunc1();



//-------- Await() ------ Example 3:------------------------
 
// a promise
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
    reject('Promise resolved example 3')}, 4000);
});
 
// async function
async function asyncFunc() {
    try {   // it is the just a replacemnt of .then block
        // wait until the promise resolves
        let result = await promise2;
 
        console.log("%%%%%% " + result);
    }  
    catch(error) {
        console.log(">>>>" +error);
    }
    finally{  // always execute if pass or fail
      console.log("we are into finally block");
    }
}
 
// calling the async function
asyncFunc(); // Promise resolved
 

//------------------ Example 4 -----------------------//
//------- Multiple Async functions in series ----------//
/*
const promiseToDo = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 4000)
    })
  }
 
  const promiseBye = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('because i cant sit idle'), 3000)
    })
  }
 
  const watchOver = async () => {
    const something = await promiseToDo()
    const a = await promiseBye()
    return something + " " + a + '\nand I watched'
  }
 
  const watchOverSomeone = async () => {
    const something = await watchOver()
    return something + '\nand I played as well'
  }
 
  watchOverSomeone().then(res => {
    console.log(res)
  })
 
    */