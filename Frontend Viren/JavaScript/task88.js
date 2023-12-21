const p1 = new Promise((resolve) => setTimeout(resolve, 103, 10));
const p2 = new Promise((resolve) => setTimeout(resolve, 101, 20));
const p3 = new Promise((resolve) => setTimeout(resolve, 102, 30));
const p4 = new Promise((reject) => setTimeout(reject, 106, 40));
const p5 = new Promise((resolve) => setTimeout(resolve, 100, 50));
const p6 = new Promise((reject) => setTimeout(reject, 105, 60));

  
 
  Promise.all([p1,p2,p3,p4,p5,p6])
    .then((results) => {
      console.log("Results in order of .all: ", results);
    })
    .catch((err) => {
      console.error("Error in .all: ", err);
    });
  
  
  Promise.race([p5, p2, p3, p1, p6, p4])
    .then((result) => {
      console.log("Result in .race: ", result);
    })
    .catch((err) => {
      console.error("Error in .race: ", err);
    });
  

  Promise.any([p5, p2, p3, p1, p6, p4])
    .then((result) => {
      console.log("Result in .any: ", result);
    })
    .catch((err) => {
      console.error("Error in .any: ", err);
    });
  
  
  Promise.all([p5, p2, p3, p1, p6, p4])
    .then((results) => {
      console.log("Results in order of .all with .catch: ", results);
    })
    .catch((err) => {
      console.error("Error in .all with .catch: ", err);
    });
  