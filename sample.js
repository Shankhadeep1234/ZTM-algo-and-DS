//Finding common items from two array
// @param {Array} array1
//@param {Array} array2
//@ return {Array}

//Approach 1

// function intersect(array1, array2) {
//   const result = array1.filter((value) => array2.includes(value));

//   return [...new Set(result)];
// }

//Approach 2
function intersect(array1, array2) {
  array2 = new Set(array2);

  const result = array1.filter((value) => array2.has(value));
  return [...new Set(result)];
}

intersect([1, 2, 1, 1, 3], [1, 2]); // [1,2]
intersect([1, 1, 1, 1, 3], [1]); //[1]
intersect([1, 1, 1, 3], [4, 2]); //[]
