const arr = [1, 2, 3, 4, 5, 6];

// Normal reduce
const normal = arr.reduce((acc, current) => {
  return acc + current;
}, " ");

// console.log(normal);

// Output : 123456

//reduce right
const reverse = arr.reduceRight((acc, current) => {
  return acc + current;
}, " ");

console.log(reverse);

// Output : 654321
