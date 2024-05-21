//Object.keys() --> Trả về 1 mảng chứa các key trong object
var obj = {
  name: "Đức Minh",
  email: "dmin@gmail.com",
  age: 21,
};
// Object.keys(obj).forEach(function (key) {
//   console.log(obj[key]);
// });
// console.log(Object.keys(obj));

// var user = {};
// // Kiểm tra object user có phần tử hay ko
// if (Object.keys(user).length) {
//   console.log("có phần tử");
// } else {
//   console.log("không có");
// }

// ---------------------------------------------------------
//Object.values() ===> Trả về 1 mảng chứa các value của object
// console.log(Object.values(obj));

// ---------------------------------------------------------
//Object.entries() ==> Trả về 1 mảng hai chiều chứa cả key và value
// console.log(Object.entries(obj));

// ---------------------------------------------------------
// Object.fromEntries() ==> Chuyển từ array entries (Mảng 2 chiều) thành object

// var arr = [
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ];
// var obj = Object.fromEntries(arr);
// console.log(obj);

// ---------------------------------------------------------
// Object.assign(target, source) ==> Copy object source và nối vào object target, đông thời cũng trả về object mới chính là object sau khi nối

var obj1 = {
  name: "Đức Minh",
  email: "dmin@gmail.com",
  age: 21,
};
var obj2 = {
  role: "student",
  address: "hà Nội",
};
// Nối obj2 vào obj1
// var obj3 = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(obj3);
//--> nếu làm thế này thì obj1 sẽ bị thay đổi

//Nối obj1 và obj2 lưu vào obj3 (Không làm thay đổi obj1, obj2)
var obj3 = [];
Object.assign(obj3, obj1, obj2);

// console.log(obj1);
// console.log(obj3);

var query = {
  category: 1,
  keyword: "Khóa học Fullstack",
  status: true,
};
//Chuyển thành string: category=1&keyword=Khóa+học+Fullstack&status=true

var querystring = Object.entries(query)
  .map(function (item) {
    return item.join("=");
  })
  .join("&")
  .replaceAll(" ", "+");
console.log(querystring);

//xem lại
// var str = ``;
// var string = Object.entries(query).forEach(function (value) {
//   str += value[0] + "=" + value[1] + "&";
// });
// str = str.slice(0, -1).replaceAll(" ", "+");
// console.log(str);

var arr = [1, 2, 3, 4];
// console.log(arr.join(""));
