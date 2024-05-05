/**
 Closure: Định nghĩa hàm trong 1 phạm vi khác và có thể truy cập các biến ở phạm vi chứa nó

 Trong JS: Tất cả các hàm đều là Closure
 */
// var y = 20;
// function display() {
//   console.log("display");
//   var x = 10;
//   function something() {
//     console.log("something");
//     console.log(x);
//     console.log(y);
//   }
//   something();
// }
// display();

// function getMessage() {
//   console.log("getMessage");
// }

// function display() {
//   function getMessage() {
//     return "Học lập trình không khó";
//   }
//   return getMessage;
// }
// // // var func = display();
// // // console.log(func());
// console.log(display()());

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// var add = sum(10);
// var result = add(20);
// console.log(result);

// IIFE
// function getMessage() {
//   console.log("học lập trình không khó");
// }
// getMessage();
// (function () {
//   console.log("học lập trình không khó");
// })();

// Giải thuật đệ quy
// function showNumber(n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// }
// showNumber(10);

function getTotal(n) {
  if (n === 1) {
    return 1;
  }
  return n + getTotal(n - 1);
}
var total = getTotal(10);
console.log(total);

function fibonaci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonaci(n - 1) + fibonaci(n - 2);
}
console.log(fibonaci(5));
