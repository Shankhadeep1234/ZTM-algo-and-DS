/**
 * Flatten nested array using generator function 💡
 */

const nestedArray = [1, 2, [3, 4, [5, 6]], 7, 8];

function* flatten(array, depth = 1) {
  for (let item of array) {
    if (Array.isArray(item) && depth) {
      yield* flatten(item, depth - 1);
    } else {
      yield item;
    }
  }
}

const generator = flatten(nestedArray, Infinity);

generator.next(); //{ value: 1, done: false }
generator.next(); //{ value: 2, done: false }
generator.next(); //{ value: 3, done: false }
generator.next(); //{ value: 4, done: false }
generator.next(); //{ value: 5, done: false }
