//Object: Đặc tả về một đối tượng cụ thể
//Ví dụ: Con người, người dùng, sản phẩm,....
/*
Cấu tạo bởi
- Thuộc tính(Biến)
- Phương thức(Hàm)
Cú pháp:
var tenObject = {
    key1: value1,
    key2: value2,
    ....
}
===> Object Literal
*/

var user = {
  name: "Đức Minh",
  email: "dminso1koaiso2@gmail.com",
  age: 32,
  "address-a": "Hà Nội",
};

// console.log(user.name);
// console.log(user.email);
// console.log(user["age"]);
// console.log(user["address-a"]);
// user.address = "Hà Nội"; // thêm mới
// user.name = "Đức Minh F8"; // Sửa
// delete user.age;

console.log(user);
for (var key in user) {
  console.log(user[key]); //Computed Property
}

//Hàm tạo của object là object
// console.dir(Object);

//Nối 2 object
var obj1 = {
  name: "Đức Minh",
  email: "dminso1koaiso2@gmail.com",
};

var obj2 = {
  age: 32,
  role: "student",
};

var obj3 = {};

for (var key in obj1) {
  obj3[key] = obj1[key];
}
for (var key in obj2) {
  obj3[key] = obj2[key];
}
console.log(obj3);

//Kiểm tra 1 biến có phải là mảng hay ko?
var a = {};
if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log("là object");
}

if (a && a.constructor.name === "Object") {
  console.log("là object");
}
