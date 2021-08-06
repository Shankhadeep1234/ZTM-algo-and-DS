const now = require("performance-now");

const arrayHandler = {
  get: function (arr, property) {
    if (property < 0) {
      return arr[arr.length + parseInt(property)];
    }
    return arr[property];
  },
  set: function (arr, property, value) {
    if (property < 0) {
      arr[arr.length + parseInt(property)] = value;
      return true;
    }
    arr[property] = value;
    return true;
  },
};

const array = new Proxy([10, 20, 30, 40, 50], arrayHandler);

array[0]; // => 10
array[-1]; // => 50
array[-3]; //=> 30
array[-1] = "Something random";
array; // [ 10, 20, 30, 40, 'Something random' ]
