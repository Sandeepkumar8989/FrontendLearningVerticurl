const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1300);  
});
 
const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 1100);    
});
 
const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 1200);
});


const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The four promise has rejected');
        reject(40);
    }, 1500);
});

const p5 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The five promise has resolved');
        resolve(50);
    }, 1000);
});

const p6 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('The six promise has rejected');
        reject(60);
    }, 1400);
});
 
Promise.all([p1, p2, p3, p4, p5, p6])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));