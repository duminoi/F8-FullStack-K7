var numbers = [1, 2, 5, 7, 9];
//some(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về giá trị true/ false
- Trả về true khi có ít nhất 1 lần return truthy hoặc callback


*/
//Ví dụ: tìm trong mảng numbers xem có số chẵn hay ko;
// var result = numbers.(function (value, index) {
//   console.log(value, index);
//   return value % 2 === 0;
// });
// console.log(result);

//every(callback) ==> Ngược lại so với some(tất cả đều đúng)
// var numbers = [1, 2, 3, 5, 7, 9];
// var result = numbers.every(function (value) {
//   return value % 2 !== 0;
// });
// console.log(result);

// -------------------------------------
//find(callback)
/**
 - Điều Kiện giống filter
 - Trả về phần tử đầu tiên tìm được
 */
// var numbers = [1, 2, 3, 5, 7, 9];
// var result1 = numbers.filter(function (numbers) {
//   return numbers > 2;
// });
// console.log(result1);

// var numbers = [1, 2, 3, 5, 7, 9];
// var result2 = numbers.find(function (numbers) {
//   return numbers > 2;
// });
// console.log(result2);
// -------------------------------------
// findLast(callback) ==> Tìm phần tử cuối cùng
// -------------------------------------

//findIndex(callback) ==> Tìm index đầu tiên
// -------------------------------------
//findLastIndex(callback) ==> Tìm index cuối cùng

var users = [
  ["A", "A"],
  ["B", "B"],
  ["C", "C"],
  ["D", "D"],
];
//Về xem lại cách làm
// var index = users.findIndex(function (value) {
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] == "C" && value[i + 1] == "C") {
//       return true;
//     }
//   }
// });
// console.log(index);

// var arr = ["B", "B"];
// var index = users.findIndex(function (user) {
//   return user.join() === arr.join();
// });
// console.log(index);
var arrA = [1, 4, 3, 2, 2, 3, 3, 3, 3];
var arrB = [5, 2, 6, 7, 1, 3];
//[1,2]
//Xem lại cách làm này
//Cách 1
// var doublerFilter = arrA.filter(function (arrA) {
//   var check = false;
//   for (let i = 0; i < arrB.length; i++) {
//     if (arrA === arrB[i]) {
//       check = true;
//       break;
//     }
//   }
//   if (check) {
//     return true;
//   }
// });

// console.log(doublerFilter);
//Cách 2

var result = arrA.filter(function (arrA) {
  return arrB.includes(arrA);
});
var finalResult = result.filter(function (value, index, arr) {
  return arr.indexOf(value) === index;
});
console.log(finalResult);
// var finalResult = [];
// for (let i = 0; i < result.length; i++) {
//   var check = false;
//   for (let j = 0; j < finalResult.length; j++) {
//     if (result[i] == finalResult[j]) {
//       check = true;
//       break;
//     }
//   }
//   if (!check) {
//     finalResult[finalResult.length] = result[i];
//   }
// }
// console.log(finalResult);

//Cách của thầy
// var result = [];
// arrA.forEach(function (item) {
//   if (arrB.includes(item)) {
//     result.push(item);
//   }
// });
// console.log(result);

//tìm hiểu reduce
