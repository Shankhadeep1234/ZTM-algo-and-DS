/**
 * 💡 Partition an array based on a condition
 */

const partition = (arr, fn) => {
  const partitionArray = [[], []];
  for (let item of arr) {
    if (fn(item)) partitionArray[1].push(item);
    else partitionArray[0].push(item);
  }
  return partitionArray;
};

partition([1, 2, 3, 4, 5], (n) => n % 2);

// output ---> [ [ 2, 4 ], [ 1, 3, 5 ] ]
