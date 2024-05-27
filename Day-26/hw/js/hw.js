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
  var number = Number(price).toLocaleString() + " " + unitAbs;
  return number;
};

console.log(price.getCurrency("    đ  "));
