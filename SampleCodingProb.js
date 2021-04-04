// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

//#region  handShank approach O(n^2) "Quadratic"
function compareTwo(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}
//#endregion

//#region with hashMap (object) more efficient O(a=+b)
function compareTwo2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
  // loop through second array and check if item in second array exists on created object.
}
//#endregion

//#region make more readable O(n^2) not efficient
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
//#endregion

let array1 = ["a", "b", "c", "x"];
let array2 = ["z", "y", "x"];

compareTwo2(array1, array2);
