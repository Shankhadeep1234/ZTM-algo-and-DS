/**
 *  Topic ✔ : Generate sequence of numbers in JavaScript
 */

//Approach One:
const numbers = Array.from({ length: 5 }, (_, index) => index + 1);
//numbers = [ 1, 2, 3, 4, 5 ]

//Approach Two:
const numbers = [];
for (let i = 0; i < 5; i++) numbers.push(i + 1);
//numbers = [1, 2, 3, 4, 5];

//Approach Three:
const numbers = Array(5)
  .fill(0)
  .map((_, index) => index + 1);
//numbers = [ 1, 2, 3, 4, 5 ]
