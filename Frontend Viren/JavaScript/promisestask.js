const myPromise = new Promise((resolve, reject) => {
   
    const num = 67;
    if (num >= 0) {
      if (num % 2 === 0) {
        resolve("Even number resolved");
      } else {
        resolve("Odd number resolved");
      }
    } else {
      reject(new Error("Negative number rejected"));
    }
  });
  
  myPromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    })
    .finally(() => {
      console.log("Bye");
    });
  