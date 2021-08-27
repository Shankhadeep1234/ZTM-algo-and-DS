/**
 * Remove dynamic property from an object
 */

const object = { one: 1, two: 2, three: 3 };
const propertyName = "two";

//Process one ✔
delete object[propertyName];
// object = { one: 1, three: 3 }

//Process two ✔
const { [propertyName]: _, ...modifiedObject } = object;
// modifiedObject = { one: 1, three: 3 }
