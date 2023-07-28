// polyfill for array.map method
// arr.map((element, idx, arr) => {do something and return a new array})
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

// const arr = [1,2,3,4];

// console.log(arr.myMap((el, i, arr) => {
//   return el * 2 + i;
// }));

// polyfill for arr.filter method
// arr.filter((el, idx, arr) => {define some conditions and return elements that meet the condition})

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

// const arr = [1,2,3,4];

// console.log(arr.myFilter((el, i, arr) => {
//   return (el * 2 + i) < 10;
// }));

// polyfill for arr.reduce method
// arr.reduce((accum, curr, idx, arr) => {take the current value and do something with the accumulator and return a single value},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  let accum = initialValue;

  for (let i = 0; i < this.length; i++) {
    accum = accum ? cb(accum, this[i], i, this) : this[i];
  }

  return accum;
};

// const arr = [1,2,3,4];

// const sum = arr.myReduce((accum, curr) => accum + curr, 0);

// console.log(sum);
