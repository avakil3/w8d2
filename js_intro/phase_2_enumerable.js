// Array#myEach(callback) - receives a callback function and executes the callback for each element in the array

Array.prototype.myEach = function (callback) {
    for (i=0; i<this.length; i++){
        callback(this[i]);
    }
};
// [1, 2, 3].myEach(function(el) {
//     console.log(el + 1);
//   }); // => 2 ,3 ,4
//[2,3,4]

// Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array


Array.prototype.myMap = function (callback) {
    let new_array = [];

    for (i=0; i<this.length; i++){
        new_array.push(callback(this[i]));
    }
    return new_array
};

// console.log([1, 2, 3].myMap(function(el) {
//     return (el + 1);
//   })); // => [2 ,3 ,4]

// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)

Array.prototype.myReduce = function (callback, acc) {

    if (acc === undefined) {
        acc = this[0]; 
        StartingIndex = 1
    } else {
        StartingIndex = 0
    }
    for (i=StartingIndex; i<this.length; i++){
        acc = callback(acc, this[i]);
    } 
    return acc;
};
// // without initialValue
console.log([1, 2, 3].myReduce(function(acc, el) {
    return acc * el;
  }, 10)); // => 6
// 1 + 2 + 3 =6
//   // with initialValue
//   [1, 2, 3].myReduce(function(acc, el) {
//     return acc + el;
//   }, 25); // => 31
// 25 + 1 + 2 + 3 = 31

