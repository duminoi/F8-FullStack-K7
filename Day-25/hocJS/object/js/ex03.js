//Prototype: Object dùng để kế thừa các phương thức , thuộc tính
Object.prototype.combineValue = function () {
  //Nối tất cả các giá trị của các key thành 1 mảng
  //this: Đại diện cho cái Object hiện tại
  var array = [];
  var _this = this;
  Object.keys(this).forEach(function (key) {
    var value = _this[key];
    if (typeof value !== "function") {
      array.push(value);
    }
  });
  return array;
};

var user = {
  name: "Đức Minh",
  email: "dmin@gmail.com",
};
console.log(user);
console.log(user.combineValue());

var course = {
  name: "Fullstack",
  price: 1000,
};
console.log(course.combineValue());
//định nghĩa prototype cho string
String.prototype.last = function () {
  return this.split(" ").slice(-1).join();
};
//định nghĩa prototype cho Object
Object.prototype.message = "hello anh em";
// var fullname = "Đức Minh F8"; //String
// console.log(fullname.last());
// var arr = []; // Array
// var age = 32; // Number
// var check = false; //Boolean
// var getMessage = function () {};
// // console.log(age.message);
// console.log(getMessage.message);

var users = ["User 1", "User 2", "User 3", "User 4"];

Array.prototype.map2 = function (callback) {
  //Có tác dụng giống map
  //Yêu cầu: Không được dùng các phương thức xử lý mảng có săn (trừ .length)
  if (typeof callback !== "function") {
    return;
  }
  var newArr = [];
  for (var i = 0; i < this.length; i++) {
    var value = this[i];
    var result = callback(value, i);
    newArr[newArr.length] = result;
  }
  return newArr;
};

// var newArr = users.map(function (user, index) {
//   return `<h3>${index + 1} - ${user}</h3>`;
// });
var newArr2 = users.map2(function (user, index) {
  return `<h3>${index + 1} - ${user}</h3>`;
});
console.log(newArr2);
