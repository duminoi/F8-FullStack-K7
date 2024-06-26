//ES6: Phiên bản Javascript được cập nhật năm 2015
//Biến: const, let
//==> Block Scope

//Global Scope
// var a;

// function message() {
//   //Function Scope
//   var b;
//   if (b) {
//     //Block scope
//     console.log("hello");
//   }
//   for (var i = 1; i <= 10; i++) {}
// }

// var a = 10;
// if (a >= 5) {
//   let b = 20;
// }
// console.log(b);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log(i);

//Trong 1 scope chỉ được phép khai báo let 1 lần (với cùng một biến)
// let a = 10;
// a = 20;

// const a = 10;
// a = 20;

// function getMessage() {
//   console.log("Học lập trình không khó");
// }

// function getMessage() {
//   console.log("Học lập trình rất khó");
// }

// getMessage;

// const getMessage = function () {
//   console.log("Ahihi");
// };
// const getMessage = function () {
//   console.log("Bhihi");
// }; // ==> Không được gán lại hàm nếu đã khai báo là const

// const user = {
//   name: "Đức Minh",
//   email: "hoangan.web@gmail.com",
//   age: 32,
// };

// user.name = "Đức Minh F8";
// console.log(user);

const arr = [`Minh`, `28`, `hello`];
arr[0] = `minh F8`;

console.log(arr);
//Kiến thức buổi sau;
//Arrow Function
//Destructuring
//Spread
//Object Literal Enhanced
