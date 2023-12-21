const promise1 = new Promise((resolve) => setTimeout(resolve, 120, 'Hello'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 20, 'You are learning'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'Javascript'));
const promise4 = new Promise((reject) => setTimeout(reject, 130, 'Bye'));

async function handlePromises() {
  try {
    const result1 = await promise3;
    const result2 = await promise1;
    const result3 = await promise2;
    console.log(result1);
    console.log(result2);
    console.log(result3);
  } finally{
    console.log("Final block");
  }
}

handlePromises();

async function doCode() {
  try {
    const result2 = await promise2;
    console.log(result2);

    const result4 = await promise4;
    console.log(result4);
  }catch (error) {
    console.error(error);
  }
   finally {
    console.log("Finally block executed.");
  }
}
doCode();
  
  