var sumRest = function (...args) {
  var sum = 0;
  for (var key of args) {
    if (typeof key !== "number" || key == NaN || key == undefined) {
      console.log("vui lòng nhập lại");
    } else {
      sum += key;
    }
  }
  return sum;
};
console.log("Bài 1");
console.log(sumRest(1, 2, 3, 4));
// -----------------------------------------------------------
console.log("Bài 2");
var price = "12000000";
Object.prototype.getCurrency = function (unit) {
  var unitAbs = unit.split("").filter(function (value) {
    return value !== " ";
  });
  var number = Number(this).toLocaleString() + " " + unitAbs;
  return number;
};

console.log(price.getCurrency(" đ  "));
// -----------------------------------------------------------

console.log("Bài 3");

Array.prototype.push2 = function (...args) {
  for (let value of args) {
    this[this.length] = value;
  }
  return this;
};

var arr1 = [];
arr1.push2(1, 2);
console.log(arr1);

// -----------------------------------------------------------
console.log("Bài 4");
Array.prototype.filter2 = function (callback) {
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (
      callback(this[i], i) !== false &&
      callback(this[i], i) !== 0 &&
      callback(this[i], i) !== -0 &&
      callback(this[i], i) !== "" &&
      callback(this[i], i) !== null &&
      callback(this[i], i) !== undefined &&
      callback(this[i], i) !== NaN
    ) {
      newArr[newArr.length] = this[i];
    }
  }
  return newArr;
};
var arr2 = [1, 2, 3, 4, 5, 6];
var newArr = arr2.filter2(function (value) {
  return value % 2 == 0;
});
console.log(newArr);
// -----------------------------------------------------------

console.log("Bài 5");
