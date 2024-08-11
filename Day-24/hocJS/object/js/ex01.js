//Object: Đặc tả về 1 đối tượng cụ thể
//Ví dụ: Con người, người dùng, sản phẩm,....
/*
Cấu tạo bởi
- Thuộc tính (Biến)
- Phương thức (Hàm)

Cú pháp: 
var tenObject = {
    key1: value1,
    key2: value2,
    ...
}
==> Object Literal
*/
var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 32,
  "address-a": "Hà Nội",
};

// console.log(user.name);
// console.log(user.email);
// console.log(user["age"]);
// console.log(user["address-a"]);

// user.address = "Hà Nội"; //Thêm mới
// user.a = "A";
// user.name = "Hoàng An f8"; // Sửa
// delete user.age;

console.log(user);
for (var key in user) {
  // console.log(user[key]); //Computed Property
}

//Hàm tạo của object là Object
// console.dir(Object);

//Nối 2 object
var obj1 = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
var obj2 = {
  age: 32,
  role: "Teacher",
};

var obj3 = {};

for (var key in obj1) {
  obj3[key] = obj1[key];
  console.log(`${key} :${obj3[key]}`);
}
for (var key in obj2) {
  obj3[key] = obj2[key];
}
console.log(obj3);

//Kiểm tra 1 biến có phải là mảng hay không?
//cách 1
var a = {};
if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log("Là Object");
}
//cách 2
// if (a && a.constructor.name === "Object") {
//   console.log("Là object");
// }
