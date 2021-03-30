const now = require("performance-now");

//O(n) linear time
//#region
// const nemo = ["nemo"];
// const everyone = [
//   "dory",
//   "bruce",
//   "marlin",
//   "nemo",
//   "gill",
//   "bloat",
//   "nigel",
//   "squirt",
//   "darla",
//   "hank",
// ];

// const large = new Array(100).fill("nemo");

// function findNemo(array) {
//   let t0 = now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("Found nemo!!!!");
//       break;
//     }
//   }
//   let t1 = now();
//   console.log(`The function took ${t1 - t0} milliSeconds`);
// }

// findNemo(everyone); //o(n) --> linear time
//#endregion

//O(1) constant time
//#region
// const boxes = [0, 1, 2, 3, 4, 5, 6];
// function countNumOfBoxes(boxes) {
//   console.log(boxes[0]); //O(1)
//   console.log(boxes[1]); //O(1)
// }

// countNumOfBoxes(boxes);
//#endregion

//O(n^2) Quadratic time
//#region
// const nums = ["a", "b", "c", "d", "e"];

//oldWay with For loops
// function logAllPairsInArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       console.log(array[i], array[j]);
//     }
//   }
// }

//ES5 way
// function logAllPairsInArray(array) {
//   array.forEach((firstNums) => {
//     array.forEach((secondNums) => {
//       console.log(firstNums, secondNums);
//     });
//   });
// }

// logAllPairsInArray(nums);
//#endregion
