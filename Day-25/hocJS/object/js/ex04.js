var person1 = {
  name: "Đức Minh",
  email: "dmin@gmail.com",
  age: 32,
  getInfo: function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  },
};

// console.log(person1);
// console.log(person1.getInfo());
//---------------------------------------------------
//Cấu trúc của Object
//- Có những thuộc tính nào?
//- Có những phương thức nào?
//Giải pháp: Tạo 1 function constructor -->
//Định nghĩa cấu trúc của Object
//Nguyên tắc của function constructor
/**
 - Tên hàm phải là danh tử
 - Đặt tên theo quy tắc PascalCase (Ký tự đầu của mỗi từ sẽ viết hoa)
 ví dụ: UserService, UserCourse, ResetPasswordService,...
 */
//---------------------------------------------------

function Person(name, email, age) {
  //Thuộc tính
  this.name = name;
  this.email = email;
  this.age = age;
  this.a = "Học JS";
  //Phương thức
  this.getInfo = function () {
    return {
      name: this.name,
      email: this.email,
      age: this.age,
    };
  };
}
Person.prototype.message = "Learn JS"; //định nghĩa prototype cho Person
// //Tạo Object từ constructor
// var person1 = new Person("Đức Minh", "dmin@gmail.com", 21);
// var person2 = new Person("Đức Minh 2", "dmin@gmail.com", 21);

// console.log(person1);
// console.log(person2);
// console.log(person2.message);

// //Kiểm tra 1 object được tạo từ hàm tạo nào?
// console.log(person1.constructor.name);

// var users = ["User 1", "User 2", "User 3"];
// if (users && users.constructor.name === "Array") {
//   console.log("Đây là mảng");
// }

//---------------------------------------------------
//Thuộc tính tĩnh, phương thức tĩnh
/**
 - Không phụ thuộc vào object
 - Truy cập trực tiếp từ constructor (Hàm tạo)
 Ví dụ: Array.isArray(), Object.keys(), Object.values(),.....
 */
Person.message = "hello anh em F8"; //Static property

//Static method
Person.getMessage = function () {
  return "Học Js không khó";
};
Person.something = function () {
  console.log("something");
  console.log(new this().a);
};
Person.something();
//Nếu mà phương thức hay thuộc tính là tĩnh phải truy cập vào .constructor trước rồi mới truy cập đến phương thức,thuộc tính
var person1 = new Person("Đức Minh", "dmin@gmail.com", 21);
console.log(person1.constructor.message);
//Lưu ý:
//this trong phương thức tĩnh là constructor
//this trong phương thức thông thường (không tĩnh) là object
