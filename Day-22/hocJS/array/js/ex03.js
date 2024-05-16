var users = ["An", "Dũng", "Tâm", "hạnh"];
//sort(): Sắp xếp mảng theo thứ tự tăng dầ
//Sắp xếp theo ký tự: a, b ,c

/**
 Lưu ý: hàm sort nhận vào 1 callback function callbackSort(a, b){
    //a: Phần tử sau
    //b: Phần tử trước
    //Nếu hàm này trả về giá trị âm ==> Tự đông đổi chỗ
 }
 */
// users.sort();
// console.log(users);
//Hướng giải quyết
var numbers = [5, 1, 2, 100, 10];
numbers.sort(function (a, b) {
  //sắp xếp tăng dần:
  //Phần tử trước < phần tử sau
  //Cần xử lý: Nếu phần tử trước > phần tử sau ===> Đổi chỗ
  console.log(numbers);
  console.log(`Trước = ${b}, Sau = ${a}`);
  if (b > a) {
    return -100000;
  }
});

console.log(numbers);

var users = [
  "Nguyễn Đức Minh",
  "Lưu Anh Quân",
  "Lê Đức Nam",
  "Đặng Ngọc Sơn",
  "Trần Công Lực",
];
// Sắp xếp mảng theo thứ tự tăng dần (Theo tên)
// var strArr = [];
// for (let i = 0; i < users.length; i++) {
//   var position = users[i].lastIndexOf(" ");
//   var firstPosition = users[i].lastIndexOf(" ");
//   var arr1 = users[i].slice(0, position);
//   var arr = users[i].slice(position + 1);
//   strArr[strArr.length] = arr;
// }
// strArr.sort();
// for (let i = 0; i < strArr.length; i++) {
//   // strArr[i] +=
// }

// console.log(strArr);

//Cách của thầy
// var getFirstName = function (fullname) {
//   return fullname.split(" ").slice(-1).join();
// };
// users.sort(function (a, b) {
//   if (getFirstName(a) < getFirstName(b)) {
//     return -1;
//   }
// });
// console.log(users);
// --------------------------------------
//Vòng lặp
// var users = ["Item1", "Item2", "Item3", "Item4"];

//forEach(callback): duyệt từng phần tử của mảng
/**
 Callback sẽ 3 tham số
 - value
 - index
 - array: Mảng ban đầu
 */
// var result = users.forEach(function (value, index) {
//   console.log(value, index);
// });
// console.log(result);

//-------------------------------------------
//map(callback)
/*
 - Duyệt qua từng phần tử của mảng ban đầu
 - Trả về 1 mảng mới có số lượng phần tử bằng với mảng ban đầu
 - Giá trị từng phần của mảng mới là return của callback
 */

// var newArr = users.map(function (value, index) {
//   // return `${index + 1} - ${value}`;
//   return value;
// });
// console.log(newArr);

// ------------------------------------------
//filter(callback)
/**
 - Duyệt qua từng phần tử của mảng ban đầu
 - Trả về 1 mảng mới, giả trị phần tử của mảng mới sẽ là các phần tử của mảng ban đầu nếu callback return là truthy
 */
// var newArr = users.filter(function (value, index) {
//   // if (index > 1) {
//   //   console.log(value, index);
//   //   return true;
//   // }
//   return index > 1;
// });
// console.log(newArr);

/**
 Bài tập

 */
var customers = [
  ["Customer 1", "customer1@gmail.com", 32],
  ["Customer 2", "customer2@gmail.com", 28],
  ["Customer 3", "customer3@gmail.com", 31],
  ["Customer 4", "customer4@gmail.com", 29],
];

// var getEmail = "customer2@gmail.com";

// var customers = customers.filter(function (value) {
//   var check = value.includes(getEmail);
//   return check == false;
// });
// console.log(customers);

//Tăng tuổi của khách hàng có email customer2@gmail.com thêm 2 tuổi
//Gợi ý dùng vòng lặp map
// var getEmail = "customer2@gmail.com";
// var newArr = customers.map(function (value) {
//   var check = value.includes(getEmail);
//   if (check) {
//     value[2] = value[2] + 2;
//   }
//   return value;
// });

// console.log(newArr);

// var data = [];
// function addData(value, status) {
//   var addItem = function (item) {
//     if (!data.includes(item)) {
//       data.push(item);
//     }
//   };
//   var removeItem = function (item) {
//     // item = "Quan"
//     data = data.filter(function (_item) {
//       return item !== _item;
//     });
//     // Filter: Lặp từng phần tử trong mảng data, nó kiểm tra phần tử trong mảng data khác với giá trị truyền vào(item = "Quan"), nếu khác return true, ngươc lại return false
//   };
//   if (status) {
//     return addItem(value);
//   }
//   removeItem(value);
// }
// ["An", "An", "Quan"];
// addData("An", true);
// addData("An", true);
// addData("Quan", true);
// addData("Quan", false);
// console.log(data);

/*
[`An`] [1,2,3,4]


Giải thích:
Nếu status = true ==> Thêm value vào mảng data
(Kiểm tra trùng)
nếu status = false ==> Xóa phần tử có value

*/
