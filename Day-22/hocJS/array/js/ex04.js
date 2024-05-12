// var numbers = [1, 2, 5, 7, 9];
//some(callback)
/*
- Duyệt qua từng phần tử của mảng ban đầu
- Trả về giá trị true/ false
- Trả về true khi có ít nhất 1 lần return truthy hoặc callback


*/
//Ví dụ: tìm trong mảng numbers xem có số chẵn hay ko;
// var result = numbers.some(function (value, index) {
//   console.log(value, index);
//   return value % 2 === 0;
// });
// console.log(result);

// //every(callback) ==> Ngược lại so với some(tất cả đều đúng)
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

// var users = [
//   ["A", "A"],
//   ["B", "B"],
//   ["C", "C"],
//   ["D", "D"],
// ];
//Về xem lại cách làm
// var index = users.findIndex(function (value, index) {
//   for (let i = value; i < value.length; i++) {
//     if (value[i][0] == "B" && value[i][1] == "B") {
//       return true;
//     }
//   }
// });

// var arr = ["B", "B"];
// var index = users.findIndex(function (user) {
//   return user.join() === arr.join();
// });
// console.log(index);
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
//[1,2]
//Xem lại cách làm này
// var doublerFilter = arrA.filter(function (arrA) {
//   for (let i = 0; i < arrA.length; i++) {
//     var check = false;
//     for (let j = 0; j < arrB.length; j++) {

//     }
//   }
// });

// console.log(doublerFilter);

//Cách của thầy
// var result = [];
// arrA.forEach(function (item) {
//   if (arrB.includes(item)) {
//     result.push(item);
//   }
// });
// console.log(result);

//tìm hiểu reduce
