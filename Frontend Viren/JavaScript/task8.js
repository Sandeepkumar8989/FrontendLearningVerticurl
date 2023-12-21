// const promise1 = Promise.resolve(0);
const p1 = new Promise((resolve) => setTimeout(resolve, 103, 10));
const p2 = new Promise((resolve) => setTimeout(resolve, 101, 20));
const p3 = new Promise((resolve) => setTimeout(resolve, 102, 30));
const p4 = new Promise((reject) => setTimeout(reject, 106, 40));
const p5 = new Promise((resolve) => setTimeout(resolve, 100, 50));
const p6 = new Promise((reject) => setTimeout(reject, 105, 60));

Promise.all([p1, p2, p3, p4, p5, p6])
  .then((values) => {
    console.log("All promises have been resolved:", values);
  })
  .catch((reason) => {
    console.error("At least one promise was rejected:", reason);
  });
 
// const promises1 = [promise1, promise2, promise3];
 
// Promise.any(p1).then((value) => console.log(value));

// Promise.all();

// Promise.race([p1,p2, p3,p4,p5,p6])
//     .then(value => console.log(`Resolved: ${value}`))
//     .catch(reason => console.log(`Rejected: ${reason}`));